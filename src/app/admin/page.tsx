import { getSlotTime } from "@/components/Form";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getData() {
  const users = await prisma.bookings.findMany({
    include: { users: true, address: true, bookings_products: true },
  });

  return users;
}

export default async function AdminPage() {
  const bookings = await getData();

  console.log(bookings);

  return (
    <main className="m-auto max-w-3xl">
      {bookings.map((x) => (
        <div key={x.id}>
          <div>boknings-id: {x.id}</div>
          <div>datum: {x.date.toLocaleDateString()}</div>
          <div>
            lucka: {x.slot} ({getSlotTime(x.slot)})
          </div>
          <div>
            krukor:{" "}
            {x.bookings_products.map((y) => (
              <div key={y.products_id}>
                <div>id: {y.products_id}</div>
                <div>antal: {y.amount}</div>
              </div>
            ))}
          </div>
          <div>kund: {x.users?.email}</div>
          <div>
            adress: {x.address?.street}, {x.address?.postal_code},{" "}
            {x.address?.city}
          </div>
        </div>
      ))}
    </main>
  );
}
