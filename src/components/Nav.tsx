import Link from "next/link";

export default function Nav() {
  return (
    <nav className=" bg-sec-mg">
      <div className="flex justify-center gap-10 text-2xl font-thin p-3 text-white">
        <Link href="/">Vår service</Link>
        <Link href="/products">Krukor</Link>
      </div>
    </nav>
  );
}
