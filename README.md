[NestJS Logo - https://nestjs.com/img/logo-small.svg]
A progressive Node.js framework for building efficient and scalable server-side applications.
Badges
NPM Version: https://img.shields.io/npm/v/@nestjs/core.svg
Package License: https://img.shields.io/npm/l/@nestjs/core.svg
NPM Downloads: https://img.shields.io/npm/dm/@nestjs/common.svg
CircleCI: https://img.shields.io/circleci/build/github/nestjs/nest/master
Discord: https://img.shields.io/badge/discord-online-brightgreen.svg
Backers: https://opencollective.com/nest/backers/badge.svg
Sponsors: https://opencollective.com/nest/sponsors/badge.svg
Donate us: https://img.shields.io/badge/Donate-PayPal-ff3f59.svg
Support us: https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg
Follow us on Twitter: https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow
Slooze Food Ordering Backend
This is the backend for the Slooze Food Ordering project, built with NestJS and TypeORM using a PostgreSQL database.
🚀 Features
- User registration and management
- Restaurant and menu management
- Order and payment processing
- Modular architecture with NestJS
- Database integration with TypeORM
🏗️ Project Structure
backend/
  src/
    orders/
    payments/
    restaurants/
    user/
    app.module.ts
    main.ts
  data/
    users.csv / users.json
⚙️ Getting Started
1. Clone the Repository:
   git clone https://github.com/Anjan2222/slooze-backend.git
   cd slooze-backend

2. Install Dependencies:
   npm install

3. Database Configuration: Update 'src/app.module.ts'

4. Start the Server:
   npm run start
📦 API Endpoints
- GET /user — List all users
- POST /user — Create a new user
- GET /restaurants — List all restaurants
- POST /orders — Place an order
📝 Exporting Data
COPY "user" TO 'C:/Users/Sambayya/slooze-food-ordering/backend/data/users.csv' DELIMITER ',' CSV HEADER;
📨 Submission Instructions (for Slooze Careers)
1. Push your complete solution to your GitHub repository.
2. Email your repo link to careers@slooze.xyz with subject:
   SUB: Backend Engineer | Anjan
🤝 Contributing
Pull requests are welcome! Please open an issue first to discuss changes.
📄 License
MIT
Thank you
Thank you for reviewing my work!
