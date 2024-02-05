import Link from "next/link";

export function MenuNav() {
  return (
    <nav className="">
      <div className="flex justify-center gap-10 text-xl font-regular p-3 bg-light-green">
        <Link href="/">VÅR SERVICE</Link>
        <Link href="booking/products">PRODUKTER</Link>
        <Link href="/products">INSPIRATION</Link>
      </div>
    </nav>
  );
}
