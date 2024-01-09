import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">hem</Link>
        <Link href="/products">produkter</Link>
      </nav>
    </header>
  );
}
