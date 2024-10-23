# EzyMetrics Backend

## Project Overview

EzyMetrics Backend is an API service focused on integrating with CRM and Marketing platforms. The API fetches lead and campaign data, stores it in a MongoDB database, and provides functionalities for generating reports (CSV and PDF) based on transformed data. It also supports email alerts based on certain conditions.

## Features

- **CRM Lead Data**: Fetches and stores dummy lead data.
- **Marketing Campaign Data**: Fetches and stores dummy campaign data.
- **ETL Process**: Transforms raw data into useful metrics such as leads generated and campaign efficiency.
- **Reports**: Generates reports in both CSV and PDF formats.
- **Email Alerts**: Sends email alerts based on data conditions.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (NoSQL)
- **Reporting**: CSV and PDF generation
- **Email Alerts**: Nodemailer for email notifications

## Installation & Setup

Follow these steps to set up the project on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ezyMetrics-backend.git
cd ezyMetrics-backend
 Install Dependencies:npm install express mongoose dotenv nodemailer pdfkit cors --save && npm install --save-dev nodemon


### Notes:
- Replace `<your_mongodb_connection_string>` with your actual MongoDB URI.
- Adjust the features, endpoints, and instructions according to any additional details specific to your project.
- You can add any other relevant sections, such as testing instructions, if needed.

Let me know if you need any further modifications!
