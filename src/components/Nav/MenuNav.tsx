import Link from "next/link";

export function MenuNav() {
  return (
    <nav className="">
      <div className="flex justify-center gap-10 text-2xl font-thin p-3">
        <Link href="/">VÅR SERVICE</Link>
        <Link href="booking/products">PRODUKTER</Link>
        <Link href="/products">INSPIRATION</Link>
      </div>
    </nav>
  );
}
