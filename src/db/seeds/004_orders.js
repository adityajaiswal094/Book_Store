/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("orders").del();
  await knex("orders").insert([
    {
      order_id: 1,
      customer_id: 1,
      order_date: "2024-02-01 08:00:00",
      order_amount: 50.95,
    },
    {
      order_id: 2,
      customer_id: 2,
      order_date: "2024-02-01 09:30:00",
      order_amount: 89.75,
    },
    {
      order_id: 3,
      customer_id: 3,
      order_date: "2024-02-02 10:45:00",
      order_amount: 102.9,
    },
    {
      order_id: 4,
      customer_id: 4,
      order_date: "2024-02-02 12:15:00",
      order_amount: 33.97,
    },
    {
      order_id: 5,
      customer_id: 5,
      order_date: "2024-02-03 13:45:00",
      order_amount: 149.85,
    },
    {
      order_id: 6,
      customer_id: 6,
      order_date: "2024-02-03 15:00:00",
      order_amount: 64.95,
    },
    {
      order_id: 7,
      customer_id: 7,
      order_date: "2024-02-04 16:30:00",
      order_amount: 79.95,
    },
    {
      order_id: 8,
      customer_id: 8,
      order_date: "2024-02-04 18:00:00",
      order_amount: 47.92,
    },
    {
      order_id: 9,
      customer_id: 9,
      order_date: "2024-02-05 19:15:00",
      order_amount: 159.6,
    },
    {
      order_id: 10,
      customer_id: 10,
      order_date: "2024-02-05 20:30:00",
      order_amount: 74.85,
    },
    {
      order_id: 11,
      customer_id: 11,
      order_date: "2024-02-06 21:45:00",
      order_amount: 89.85,
    },
    {
      order_id: 12,
      customer_id: 12,
      order_date: "2024-02-06 23:00:00",
      order_amount: 97.74,
    },
    {
      order_id: 13,
      customer_id: 13,
      order_date: "2024-02-07 08:00:00",
      order_amount: 128.85,
    },
    {
      order_id: 14,
      customer_id: 14,
      order_date: "2024-02-07 09:30:00",
      order_amount: 44.95,
    },
    {
      order_id: 15,
      customer_id: 15,
      order_date: "2024-02-08 10:45:00",
      order_amount: 68.97,
    },
    {
      order_id: 16,
      customer_id: 16,
      order_date: "2024-02-08 12:15:00",
      order_amount: 74.85,
    },
    {
      order_id: 17,
      customer_id: 17,
      order_date: "2024-02-09 13:45:00",
      order_amount: 59.94,
    },
    {
      order_id: 18,
      customer_id: 18,
      order_date: "2024-02-09 15:00:00",
      order_amount: 127.6,
    },
    {
      order_id: 19,
      customer_id: 19,
      order_date: "2024-02-10 16:30:00",
      order_amount: 59.94,
    },
    {
      order_id: 20,
      customer_id: 20,
      order_date: "2024-02-10 18:00:",
      order_amount: 74.85,
    },
  ]);
};
