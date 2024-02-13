/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("authors").del();
  await knex("authors").insert([
    { author_id: 1, author_name: "F. Scott Fitzgerald" },
    { author_id: 2, author_name: "Harper Lee" },
    { author_id: 3, author_name: "George Orwell" },
    { author_id: 4, author_name: "Jane Austen" },
    { author_id: 5, author_name: "J.D. Salinger" },
    { author_id: 6, author_name: "J.K. Rowling" },
    { author_id: 7, author_name: "J.R.R. Tolkien" },
    { author_id: 8, author_name: "George R.R. Martin" },
    { author_id: 9, author_name: "George Orwell" },
    { author_id: 10, author_name: "Paulo Coelho" },
    { author_id: 11, author_name: "Suzanne Collins" },
    { author_id: 12, author_name: "Dan Brown" },
    { author_id: 13, author_name: "C.S. Lewis" },
    { author_id: 14, author_name: "Margaret Mitchell" },
    { author_id: 15, author_name: "Herman Melville" },
    { author_id: 16, author_name: "Mark Twain" },
    { author_id: 17, author_name: "Mary Shelley" },
    { author_id: 18, author_name: "William Shakespeare" },
    { author_id: 19, author_name: "Aldous Huxley" },
    { author_id: 20, author_name: "Oscar Wilde" },
  ]);
};
