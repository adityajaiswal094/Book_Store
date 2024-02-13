const { topSellingBooks } = require("../db/queries/queries");

const getTopSellingBooks = (app) => {
  app.get("/top-selling", async (req, res) => {
    try {
      const response = await topSellingBooks();

      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        title: "Internal Server Error",
        message: "Something went wrong!",
      });
    }
  });
};

module.exports = getTopSellingBooks;
