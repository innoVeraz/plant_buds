/*
  Warnings:

  - You are about to drop the column `time` on the `bookings` table. All the data in the column will be lost.
  - Added the required column `slot` to the `bookings` table without a default value. This is not possible if the table is not empty.
  - Made the column `date` on table `bookings` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "bookings" DROP COLUMN "time",
ADD COLUMN     "slot" INTEGER NOT NULL,
ALTER COLUMN "date" SET NOT NULL;
