CREATE USER app_user WITH PASSWORD 'app_user_password' CREATEDB;
CREATE DATABASE plantbuds OWNER app_user;
GRANT ALL PRIVILEGES ON DATABASE plantbuds TO app_user;

\c plantbuds;


CREATE TYPE "booking_status" AS ENUM (
  'created',
  'cancelled',
  'done'
);

CREATE TYPE "role" AS ENUM (
  'admin',
  'customer'
);

CREATE TABLE "users" (
  "id" integer PRIMARY KEY,
  "username" varchar,
  "role" role,
  "created_at" timestamp
);

CREATE TABLE "address" (
  "id" integer PRIMARY KEY,
  "user_id" integer,
  "street" varchar,
  "postal_code" varchar,
  "city" varchar,
  "created_at" timestamp
);

CREATE TABLE "bookings" (
  "id" integer PRIMARY KEY,
  "address_id" integer,
  "user_id" integer,
  "time" timestamp,
  "date" date,
  "status" booking_status,
  "created_at" timestamp
);

CREATE TABLE "products" (
  "id" integer PRIMARY KEY,
  "name" varchar,
  "description" varchar,
  "quantity" integer
);

ALTER TABLE "bookings" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "address" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "bookings" ADD FOREIGN KEY ("address_id") REFERENCES "address" ("id");

CREATE TABLE "bookings_products" (
  "bookings_id" integer,
  "products_id" integer,
  PRIMARY KEY ("bookings_id", "products_id")
);

ALTER TABLE "bookings_products" ADD FOREIGN KEY ("bookings_id") REFERENCES "bookings" ("id");

ALTER TABLE "bookings_products" ADD FOREIGN KEY ("products_id") REFERENCES "products" ("id");

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO app_user;