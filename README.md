# Slooze Food Ordering Backend

## About the Project

The Slooze Food Ordering Backend is a scalable and modular server-side application designed to power a modern food ordering platform. Built using [NestJS](https://nestjs.com/), a progressive Node.js framework, and [TypeORM](https://typeorm.io/) for database operations, this backend provides a solid foundation for building reliable and maintainable food ordering systems. Key features include user authentication and management, restaurant and menu management, order processing, and payment integration, all exposed through a clean RESTful API.

The backend’s design follows best practices in code organization, security, and extensibility. Each domain—users, restaurants, orders, payments—is encapsulated as a separate module, making it easy to extend or modify functionality as business needs evolve. The system is designed for easy deployment, whether for development, staging, or production environments, and can be quickly adapted for use with various frontends or third-party integrations.

### Features

- **User Management:** Registration, login, and role-based access control for customers and restaurant staff.
- **Restaurant and Menu Management:** CRUD operations for restaurants, menu categories, and menu items.
- **Order Processing:** Customers can place and track orders; restaurants can manage incoming orders.
- **Payments:** Modular payment integration with support for adding new payment providers.
- **API-first:** All features are exposed via clean, versioned REST APIs.
- **Testing:** Includes unit and integration tests for reliability.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Anjan2222/slooze-backend.git
cd slooze-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure the Database

This project uses PostgreSQL by default. Update the database configuration in `src/app.module.ts` or use environment variables to match your setup:

```typescript
TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'your_username',
  password: 'your_password',
  database: 'slooze_db',
  autoLoadEntities: true,
  synchronize: true,
}),
```

> **Note:** You can also use SQLite for local development by adjusting the TypeORM config.

### 4. Run Migrations (Optional)

If you add migrations in the future, run:
```bash
npm run typeorm migration:run
```

### 5. Start the Server

```bash
npm run start
```

By default, the backend will run at [http://localhost:3000](http://localhost:3000).

---

## Run Instructions

- **Development:**  
  Start the server with hot-reloading:
  ```bash
  npm run start:dev
  ```
- **Testing:**  
  Run all tests:
  ```bash
  npm run test
  ```
- **Production:**  
  Build and run:
  ```bash
  npm run build
  npm run start:prod
  ```

---

## API Overview

Core endpoints:
- `POST /user` — Register a new user
- `POST /auth/login` — Login
- `GET /restaurants` — List all restaurants
- `POST /orders` — Place a new order
- ...and many more (see `src/` modules for details)

**Thank you for reviewing my project!**
