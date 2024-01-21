import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getData() {
  const users = await prisma.users.findMany();

  return users;
}

export default async function AdminPage() {
  const data = await getData();

  return (
    <main>
      {data.map((user) => (
        <div key={user.id}>{user.username}</div>
      ))}
    </main>
  );
}
