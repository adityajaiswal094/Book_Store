/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("orders", (table) => {
    table.increments("order_id").primary().notNullable();
    table
      .integer("customer_id")
      .references("customer_id")
      .inTable("customers")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();
    table.datetime("order_date").notNullable();
    table.decimal("order_amount", null).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("orders");
};
