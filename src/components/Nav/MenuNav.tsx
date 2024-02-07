import Link from "next/link";

export function MenuNav() {
  return (
    <nav className="relative w-full">
      <div className="fixed z-50 w-full flex justify-center gap-10 bg-light-green text-xl font-thin p-2">
        <Link href="/#replantscroll">Vår service</Link>
        <Link href="/booking/products">Boka</Link>
      </div>
    </nav>
  );
}
