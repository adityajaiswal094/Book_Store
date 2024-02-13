# Book Store Management System

## About this application

An Express.js application which efficiently handles inventory, customer orders, and sales tracking. It allows customers to browse and purchase books while enabling administrators to manage stock levels, track sales revenue, and maintain customer records, ensuring seamless operations and improved customer satisfaction.

## Setting up

1. Download and install PostgreSQL (v13.11) and pgAdmin4 (v7.2) in your system.
2. Download and install Git in your system.
3. Clone this repo in your system and open in your IDE (eg: VSCode).
4. Open your psql terminal and create a DB in your postgres engine named **book_store**. Use postgres as your user.

   - `psql -U postgres -d postgres`

   - `CREATE DATABASE book_store;`

   - `\c book_store`

   After this you will be connected to the `book_store` DB.

5. **.env** file config:

   - Create a `.env` file in your root directory and enter the following details as written here:
     - PORT=8080
     - DB_USER='postgres'
     - DB_HOST='localhost'
     - DB_DATABASE='book_store'
     - DB_PASSWORD='your_password' (write your postgres server password in place of 'your_password')
     - DB_PORT=5432

6. Run `npm install` in your root directory to install all the necessary dependencies.

## Getting Started

1. Run the following command in root directory to run the schema migration:

   - `npx knex migrate:latest --env development`

2. Run the following command in root directory to seed the db with dummy data:

   - `npx knex seed:run`

3. Now, in your root directory, run the command `npm run dev` to start the server.
4. Finally, use Postman to test the APIs.

## APIs

Base URL = `http://localhost:8080`

1. `GET` route to retrieve a list of top-selling books.

   - Endpoint: `/top-selling`
   - Example: `http://localhost:8080/top-selling`

2. `GET` route to calculate total sales revenue for a given period. The API accepts a json body containing start date and end date to calculate revenue for that period.

   Note: Not providing either one or both the dates will return an error. Start date should not be greater than end date.

   - Endpoint: `/sales-revenue`
   - Example: `http://localhost:8080/sales-revenue`

   JSON object in body: { "endDate": "2024-02-13 23:59:59", "startDate": "2024-02-10 00:00:00" }

## Sample cURLs

1. curl --location '<http://localhost:8080/top-selling>'

2. curl --location --request GET '<http://localhost:8080/sales-revenue>' \
   --header 'Content-Type: application/json' \
   --data '{
   "endDate": "2024-02-13 23:59:59",
   "startDate": "2024-02-10 00:00:00"
   }'
