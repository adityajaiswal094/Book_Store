/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("customers").del();
  await knex("customers").insert([
    {
      customer_id: 1,
      customer_name: "John Doe",
      email_id: "johndoe@example.com",
      phone_no: "123-456-7890",
    },
    {
      customer_id: 2,
      customer_name: "Jane Smith",
      email_id: "janesmith@example.com",
      phone_no: "987-654-3210",
    },
    {
      customer_id: 3,
      customer_name: "Michael Johnson",
      email_id: "michaeljohnson@example.com",
      phone_no: "555-123-4567",
    },
    {
      customer_id: 4,
      customer_name: "Emily Brown",
      email_id: "emilybrown@example.com",
      phone_no: "321-654-9870",
    },
    {
      customer_id: 5,
      customer_name: "David Martinez",
      email_id: "davidmartinez@example.com",
      phone_no: "111-222-3333",
    },
    {
      customer_id: 6,
      customer_name: "Sarah Wilson",
      email_id: "sarahwilson@example.com",
      phone_no: "444-555-6666",
    },
    {
      customer_id: 7,
      customer_name: "Robert Taylor",
      email_id: "roberttaylor@example.com",
      phone_no: "777-888-9999",
    },
    {
      customer_id: 8,
      customer_name: "Lisa Anderson",
      email_id: "lisaanderson@example.com",
      phone_no: "999-888-7777",
    },
    {
      customer_id: 9,
      customer_name: "Christopher Lee",
      email_id: "christopherlee@example.com",
      phone_no: "123-321-1234",
    },
    {
      customer_id: 10,
      customer_name: "Amanda Thompson",
      email_id: "amandathompson@example.com",
      phone_no: "456-789-0123",
    },
    {
      customer_id: 11,
      customer_name: "Jennifer White",
      email_id: "jenniferwhite@example.com",
      phone_no: "789-012-3456",
    },
    {
      customer_id: 12,
      customer_name: "Daniel Clark",
      email_id: "danielclark@example.com",
      phone_no: "098-765-4321",
    },
    {
      customer_id: 13,
      customer_name: "Jessica Hall",
      email_id: "jessicahall@example.com",
      phone_no: "987-654-3212",
    },
    {
      customer_id: 14,
      customer_name: "Matthew Walker",
      email_id: "matthewwalker@example.com",
      phone_no: "567-890-1234",
    },
    {
      customer_id: 15,
      customer_name: "Olivia Allen",
      email_id: "oliviaallen@example.com",
      phone_no: "321-098-7654",
    },
    {
      customer_id: 16,
      customer_name: "Ethan Moore",
      email_id: "ethanmoore@example.com",
      phone_no: "456-123-7890",
    },
    {
      customer_id: 17,
      customer_name: "Sophia Garcia",
      email_id: "sophiagarcia@example.com",
      phone_no: "654-321-0987",
    },
    {
      customer_id: 18,
      customer_name: "Benjamin King",
      email_id: "benjaminking@example.com",
      phone_no: "987-123-4567",
    },
    {
      customer_id: 19,
      customer_name: "Natalie Lopez",
      email_id: "natalielopez@example.com",
      phone_no: "321-456-7890",
    },
    {
      customer_id: 20,
      customer_name: "Jacob Wright",
      email_id: "jacobwright@example.com",
      phone_no: "654-987-3210",
    },
  ]);
};
