import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="logo" href="/">
        TA
      </Link>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/#work">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <a
          href="https://github.com/calle1003"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
