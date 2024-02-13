const pool = require("../dbConfig");

const topSellingBooks = async () => {
  const query = `SELECT b.title AS Book_Title, SUM(oi.quantity) AS Total_Sold
                    FROM order_items oi
                    JOIN books b ON oi.book_id = b.book_id
                    GROUP BY b.title
                    ORDER BY Total_Sold DESC
                    LIMIT 10`;

  const result = await pool.query(query);

  return result.rows;
};

const salesRevenue = async (startDate, endDate) => {
  const query =
    "SELECT SUM(order_amount) AS Total_Sales_Revenue FROM orders WHERE order_date BETWEEN $1 AND $2";

  const result = await pool.query(query, [startDate, endDate]);

  let [{ total_sales_revenue }] = result.rows;

  if (total_sales_revenue === null) {
    total_sales_revenue = "0.00";
  }

  return {
    startDate: startDate,
    endDate: endDate,
    total_sales_revenue: total_sales_revenue,
  };
};

module.exports = { topSellingBooks, salesRevenue };
