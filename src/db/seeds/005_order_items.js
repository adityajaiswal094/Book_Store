/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("order_items").del();
  await knex("order_items").insert([
    {
      order_item_id: 1,
      order_id: 1,
      book_id: 1,
      quantity: 2,
      unit_price: 10.99,
      total_price: 21.98,
    },
    {
      order_item_id: 2,
      order_id: 1,
      book_id: 5,
      quantity: 3,
      unit_price: 11.99,
      total_price: 35.97,
    },
    {
      order_item_id: 3,
      order_id: 2,
      book_id: 2,
      quantity: 5,
      unit_price: 9.99,
      total_price: 49.95,
    },
    {
      order_item_id: 4,
      order_id: 2,
      book_id: 4,
      quantity: 1,
      unit_price: 8.99,
      total_price: 8.99,
    },
    {
      order_item_id: 5,
      order_id: 2,
      book_id: 10,
      quantity: 2,
      unit_price: 9.99,
      total_price: 19.98,
    },
    {
      order_item_id: 6,
      order_id: 3,
      book_id: 3,
      quantity: 4,
      unit_price: 12.99,
      total_price: 51.96,
    },
    {
      order_item_id: 7,
      order_id: 3,
      book_id: 6,
      quantity: 1,
      unit_price: 14.99,
      total_price: 14.99,
    },
    {
      order_item_id: 8,
      order_id: 3,
      book_id: 9,
      quantity: 3,
      unit_price: 7.99,
      total_price: 23.97,
    },
    {
      order_item_id: 9,
      order_id: 4,
      book_id: 8,
      quantity: 2,
      unit_price: 10.99,
      total_price: 21.98,
    },
    {
      order_item_id: 10,
      order_id: 5,
      book_id: 11,
      quantity: 5,
      unit_price: 11.99,
      total_price: 59.95,
    },
    {
      order_item_id: 11,
      order_id: 5,
      book_id: 14,
      quantity: 1,
      unit_price: 8.99,
      total_price: 8.99,
    },
    {
      order_item_id: 12,
      order_id: 6,
      book_id: 12,
      quantity: 3,
      unit_price: 12.99,
      total_price: 38.97,
    },
    {
      order_item_id: 13,
      order_id: 6,
      book_id: 15,
      quantity: 2,
      unit_price: 11.99,
      total_price: 23.98,
    },
    {
      order_item_id: 14,
      order_id: 7,
      book_id: 7,
      quantity: 4,
      unit_price: 13.99,
      total_price: 55.96,
    },
    {
      order_item_id: 15,
      order_id: 7,
      book_id: 13,
      quantity: 1,
      unit_price: 15.99,
      total_price: 15.99,
    },
    {
      order_item_id: 16,
      order_id: 8,
      book_id: 16,
      quantity: 2,
      unit_price: 10.99,
      total_price: 21.98,
    },
    {
      order_item_id: 17,
      order_id: 8,
      book_id: 18,
      quantity: 3,
      unit_price: 7.99,
      total_price: 23.97,
    },
    {
      order_item_id: 18,
      order_id: 8,
      book_id: 20,
      quantity: 1,
      unit_price: 8.99,
      total_price: 8.99,
    },
    {
      order_item_id: 19,
      order_id: 9,
      book_id: 17,
      quantity: 5,
      unit_price: 9.99,
      total_price: 49.95,
    },
    {
      order_item_id: 20,
      order_id: 10,
      book_id: 3,
      quantity: 2,
      unit_price: 12.99,
      total_price: 25.98,
    },
  ]);
};
