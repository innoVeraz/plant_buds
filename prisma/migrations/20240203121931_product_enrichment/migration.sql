/*
  Warnings:

  - Added the required column `quantity` to the `bookings_products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bookings" ADD COLUMN     "large_plants" INTEGER,
ADD COLUMN     "small_plants" INTEGER;

-- AlterTable
ALTER TABLE "bookings_products" ADD COLUMN     "quantity" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "img_url" VARCHAR;
