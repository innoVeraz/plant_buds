-- AlterTable
CREATE SEQUENCE address_id_seq;
ALTER TABLE "address" ALTER COLUMN "id" SET DEFAULT nextval('address_id_seq');
ALTER SEQUENCE address_id_seq OWNED BY "address"."id";

-- AlterTable
CREATE SEQUENCE bookings_id_seq;
ALTER TABLE "bookings" ALTER COLUMN "id" SET DEFAULT nextval('bookings_id_seq');
ALTER SEQUENCE bookings_id_seq OWNED BY "bookings"."id";

-- AlterTable
CREATE SEQUENCE products_id_seq;
ALTER TABLE "products" ALTER COLUMN "id" SET DEFAULT nextval('products_id_seq');
ALTER SEQUENCE products_id_seq OWNED BY "products"."id";

-- AlterTable
CREATE SEQUENCE users_id_seq;
ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT nextval('users_id_seq');
ALTER SEQUENCE users_id_seq OWNED BY "users"."id";
