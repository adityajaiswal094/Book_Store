/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("customers", (table) => {
    table.increments("customer_id").primary().notNullable();
    table.string("customer_name").notNullable();
    table.string("email_id").unique().notNullable();
    table.string("phone_no").unique().notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("customers");
};
