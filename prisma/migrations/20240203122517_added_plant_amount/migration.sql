/*
  Warnings:

  - You are about to drop the column `large_plants` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `small_plants` on the `bookings` table. All the data in the column will be lost.
  - Added the required column `plant_amount` to the `bookings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bookings" DROP COLUMN "large_plants",
DROP COLUMN "small_plants",
ADD COLUMN     "plant_amount" INTEGER NOT NULL;
