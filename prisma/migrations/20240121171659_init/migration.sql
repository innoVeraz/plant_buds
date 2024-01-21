-- CreateEnum
CREATE TYPE "booking_status" AS ENUM ('created', 'cancelled', 'done');

-- CreateEnum
CREATE TYPE "role" AS ENUM ('admin', 'customer');

-- CreateTable
CREATE TABLE "address" (
    "id" INTEGER NOT NULL,
    "user_id" INTEGER,
    "street" VARCHAR,
    "postal_code" VARCHAR,
    "city" VARCHAR,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookings" (
    "id" INTEGER NOT NULL,
    "address_id" INTEGER,
    "user_id" INTEGER,
    "time" TIMESTAMP(6),
    "date" DATE,
    "status" "booking_status",
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookings_products" (
    "bookings_id" INTEGER NOT NULL,
    "products_id" INTEGER NOT NULL,

    CONSTRAINT "bookings_products_pkey" PRIMARY KEY ("bookings_id","products_id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR,
    "description" VARCHAR,
    "quantity" INTEGER,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL,
    "username" VARCHAR,
    "role" "role",
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "bookings_products" ADD CONSTRAINT "bookings_products_bookings_id_fkey" FOREIGN KEY ("bookings_id") REFERENCES "bookings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "bookings_products" ADD CONSTRAINT "bookings_products_products_id_fkey" FOREIGN KEY ("products_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
