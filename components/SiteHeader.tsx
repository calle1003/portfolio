import Link from "next/link";

type SiteHeaderProps = {
  variant?: "home" | "case";
};

export function SiteHeader({ variant = "home" }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <Link className="logo" href="/">
        TA
      </Link>
      <nav>
        {variant === "home" ? (
          <>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </>
        ) : (
          <>
            <Link href="/#work">Work</Link>
            <Link href="/#about">About</Link>
          </>
        )}
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
