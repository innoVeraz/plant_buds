/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `products` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `price` to the `products` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quantity` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "price" INTEGER NOT NULL,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "quantity" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "products_name_key" ON "products"("name");
