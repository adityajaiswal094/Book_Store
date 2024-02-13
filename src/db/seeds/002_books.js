/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("books").del();
  await knex("books").insert([
    {
      book_id: 1,
      title: "The Great Gatsby",
      isbn: "9780743273565",
      price: 10.99,
      author_id: 1,
    },
    {
      book_id: 2,
      title: "To Kill a Mockingbird",
      isbn: "9780061120084",
      price: 9.99,
      author_id: 2,
    },
    {
      book_id: 3,
      title: "1984",
      isbn: "9780451524935",
      price: 12.99,
      author_id: 3,
    },
    {
      book_id: 4,
      title: "Pride and Prejudice",
      isbn: "9780141439518",
      price: 8.99,
      author_id: 4,
    },
    {
      book_id: 5,
      title: "The Catcher in the Rye",
      isbn: "9780316769488",
      price: 11.99,
      author_id: 5,
    },
    {
      book_id: 6,
      title: "Harry Potter and the Sorcerer's Stone",
      isbn: "9780545069670",
      price: 14.99,
      author_id: 6,
    },
    {
      book_id: 7,
      title: "Lord of the Rings",
      isbn: "9780544003415",
      price: 13.99,
      author_id: 7,
    },
    {
      book_id: 8,
      title: "The Hobbit",
      isbn: "9780261102217",
      price: 10.99,
      author_id: 8,
    },
    {
      book_id: 9,
      title: "Animal Farm",
      isbn: "9780451526342",
      price: 7.99,
      author_id: 9,
    },
    {
      book_id: 10,
      title: "The Alchemist",
      isbn: "9780061122415",
      price: 9.99,
      author_id: 10,
    },
    {
      book_id: 11,
      title: "The Hunger Games",
      isbn: "9780439023481",
      price: 11.99,
      author_id: 11,
    },
    {
      book_id: 12,
      title: "The Da Vinci Code",
      isbn: "9780307474278",
      price: 12.99,
      author_id: 12,
    },
    {
      book_id: 13,
      title: "Ikigai",
      isbn: "9781786330895",
      price: 15.99,
      author_id: 13,
    },
    {
      book_id: 14,
      title: "Gone with the Wind",
      isbn: "9780684830681",
      price: 8.99,
      author_id: 14,
    },
    {
      book_id: 15,
      title: "Moby-Dick",
      isbn: "9780142000083",
      price: 11.99,
      author_id: 15,
    },
    {
      book_id: 16,
      title: "The Merchant of Venice",
      isbn: "9780198129257",
      price: 10.99,
      author_id: 16,
    },
    {
      book_id: 17,
      title: "Frankenstein",
      isbn: "9780486282114",
      price: 9.99,
      author_id: 17,
    },
    {
      book_id: 18,
      title: "Romeo and Juliet",
      isbn: "9780743477116",
      price: 7.99,
      author_id: 18,
    },
    {
      book_id: 19,
      title: "Brave New World",
      isbn: "9780060850524",
      price: 12.99,
      author_id: 19,
    },
    {
      book_id: 20,
      title: "Adventures of Huckleberry Finn",
      isbn: "9780486280615",
      price: 8.99,
      author_id: 20,
    },
  ]);
};
