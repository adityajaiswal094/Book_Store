/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("books", (table) => {
    table
      .integer("author_id")
      .references("author_id")
      .inTable("authors")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable("books", (table) => {
    table.dropColumn("author_id");
  });
};
