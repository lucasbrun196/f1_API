# f1_API

The `f1_API` is a RESTful API built with Node.js and TypeScript, using Fastify as the server framework and PostgreSQL as the database. It follows the Clean Architecture pattern and provides endpoints for managing Formula 1 data such as drivers, teams, and publications.

## Technologies Used

- Node.js
- TypeScript
- Fastify
- PostgreSQL
- Docker
- TypeORM
- Plop (for feature scaffolding)

## Getting Started

This project uses Docker for the PostgreSQL container. Below are the instructions to run the project in development or production mode.

### Development Setup

```bash
npm run install
```

Only the PostgreSQL container will be started. The application must be run locally with `npm run dev`.

```bash
docker compose -f docker-compose.dev.yml up -d
```

After the container is up, run the migrations:

```bash
npm run migration:run
```

Then, start the development server:

```bash
npm run dev
```

### Production Setup (e.g., on a virtual machine)

Both the PostgreSQL container and the application (using the Dockerfile) will be started.

```bash
docker compose -f docker-compose.prod.yml up -d
```

## Available Scripts

```json
"dev": "cp .env.dev .env && tsx --env-file=.env src/server.ts",
"dev:nodemon": "cp .env.dev .env && npx nodemon src/server.ts",
"start:dist": "npm run dist && node dist/src/index.js",
"typeorm": "typeorm-ts-node-commonjs",
"migration:create": "npm run typeorm migration:create -n",
"migration:run": "npx typeorm-ts-node-commonjs migration:run -d src/database/data-source.ts",
"migration:revert": "npx typeorm-ts-node-commonjs migration:revert -d src/database/data-source.ts",
"generator": "plop",
"build": "npx tsc"
```

### Migration Files

Migration files are located in:

```
src/database/migrations
```

Run the migrations after the PostgreSQL container is up.

### Plop Generator

The project uses Plop for generating boilerplate code according to Clean Architecture.

```bash
npm run generator
```

This will create:

- Controller  
- Service  
- Repository  
- Data source

## Environment Variables

Create a `.env.dev` && `.env.prod` file with the following variables:

```
PORT=
HOST_DB=
PORT_DB=
USERNAME_DB=
PASSWORD_DB=
DATABASE_DB=
SECRET_KEY=
NODE_ENV="dev" || "prod"
```

## API Endpoints

### Drivers

- `GET /driver` – Fetch all drivers (with optional filters)
- `POST /driver` – Create a driver (requires access token, admin only)
- `PUT /driver` – Update a driver (requires access token, admin only)

### Publications

- `POST /publication` – Create a publication (requires access token)
- `GET /publication` – Get publications (pagination supported) (requires access token)
- `DELETE /publication/:id` – Delete a publication (requires access token)
- `PATCH /publication/like/:id` – Like a publication (requires access token)

### Teams

- `POST /team` – Create a team (requires access token, admin only)
- `GET /team` – Get teams (with optional filters)
- `DELETE /team/:id` – Delete a team (requires access token, admin only)
- `GET /team/image/:id` – Get team's representative image

### Users

- `GET /users` – Get user(s) (requires access token)
- `POST /users/auth` – Authenticate user (email and password required)
- `POST /users` – Register a new user

## Architecture

This project follows Clean Architecture principles. Each feature is organized with:

- Controller
- Service
- Repository
- Data source

## Postman Collection

You can download and import the Postman collection to test all API endpoints:

[Download Postman Collection](./postman/f1_API.postman_collection.json)
