const { salesRevenue } = require("../db/queries/queries");

const getTotalSalesRevenue = (app) => {
  app.get("/sales-revenue", async (req, res) => {
    try {
      let { startDate, endDate } = req.body;

      if (startDate === undefined || endDate === undefined) {
        return res.status(400).json({
          title: "Bad Request",
          message:
            "Missing fequired fields: Enter both start date and end date!",
        });
      }

      if (new Date(startDate).getTime() > new Date(endDate).getTime()) {
        return res.status(422).json({
          title: "Unprocessable Entity",
          message: "'startDate' should be less than 'endDate'",
        });
      }

      const response = await salesRevenue(startDate, endDate);

      res.status(200).json(response);
      //   res.status(200).json(response);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        title: "Internal Server Error",
        message: "Something went wrong!",
      });
    }
  });
};

module.exports = getTotalSalesRevenue;
