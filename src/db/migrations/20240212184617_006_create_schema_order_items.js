/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("order_items", (table) => {
    table.increments("order_item_id").primary().notNullable();
    table
      .integer("order_id")
      .references("order_id")
      .inTable("orders")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();

    table
      .integer("book_id")
      .references("book_id")
      .inTable("books")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();
    table.integer("quantity").notNullable();
    table.decimal("unit_price", null).notNullable();
    table.decimal("total_price", null).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("order_items");
};
