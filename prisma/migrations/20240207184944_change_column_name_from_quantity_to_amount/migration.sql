/*
  Warnings:

  - You are about to drop the column `quantity` on the `bookings_products` table. All the data in the column will be lost.
  - Added the required column `amount` to the `bookings_products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bookings_products" DROP COLUMN "quantity",
ADD COLUMN     "amount" INTEGER NOT NULL;
