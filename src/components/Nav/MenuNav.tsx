import Link from "next/link";

export function MenuNav() {
  return (
    <nav className="relative w-full">
      <div className="fixed z-50 w-full flex justify-center gap-10 text-xl font-thin p-3 bg-light-green">
        <Link href="/#replantscroll">Vår service</Link>
        <Link href="/booking/products">Produkter</Link>
      </div>
    </nav>
  );
}
