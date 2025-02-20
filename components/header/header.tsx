"use client";

import { useEffect, useState } from "react";

import { ReactComponent as Logo } from "@/public/icons/logo.svg";
import { ReactComponent as Insta } from "@/public/icons/insta.svg";
import { ReactComponent as Facebook } from "@/public/icons/facebook.svg";
import { ReactComponent as Linkedin } from "@/public/icons/linkedin.svg";

import Hamburger from "@/components/hamburger";
import Wrapper from "@/components/wrapper";
import Link from "next/link";
import { usePathname } from "next/navigation";

// import { scrollToTop } from "@/lib/utils";

interface NavLink {
  name: string;
  href: string;
}

const Nav = ({ navLinks }: { navLinks: NavLink[] }) => {
  const pathname = usePathname();
  return navLinks.map(({ name, href }) => (
    <Link
      key={name}
      aria-label="nav-link"
      href={pathname !== "/" ? "/" : `/${href}`}
      className="text-sm uppercase tracking-wider hover:underline"
    >
      {name}
    </Link>
  ));
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#purpose" },
    { name: "Mission", href: "#mission" },
    { name: "Solution", href: "#solution" },
    { name: "Work", href: "#work" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 h-[var(--header-height)] border-b border-muted bg-gradient-to-r from-background to-background lg:to-transparent lg:backdrop-blur-sm">
      <Wrapper className="flex h-full items-center justify-between px-0 lg:px-4">
        <Link aria-label="Home" href="/">
          <Logo />
        </Link>

        <div className="hidden items-center gap-2 space-x-5 lg:flex xl:space-x-8">
          <Nav navLinks={navLinks} />

          <Link href="/blog" className="text-sm tracking-wider hover:underline">
            BLOG
          </Link>

          <Link
            aria-label="Instagram"
            href="https://www.instagram.com/varahaheritage/"
            target="_blank"
            className="flex min-h-6 min-w-6 items-center justify-center"
          >
            <Insta />
          </Link>
          <Link
            aria-label="Facebook"
            href="https://www.facebook.com/varahatechlabs/"
            target="_blank"
            className="flex min-h-6 min-w-6 items-center justify-center"
          >
            <Facebook />
          </Link>
          <Link
            aria-label="Linkedin"
            href="https://www.linkedin.com/company/varaha-tech-labs/"
            target="_blank"
            className="flex min-h-6 min-w-6 items-center justify-center"
          >
            <Linkedin />
          </Link>

          <Link href="/contact">
            <button
              className="group relative m-2 inline-flex h-12 min-h-12 w-32 min-w-32 items-center justify-start overflow-hidden border bg-primary font-medium transition-all xl:w-44"
              //   onClick={scrollToTop}
            >
              <span className="absolute bottom-0 left-0 right-0 h-0 border-0 bg-background/90 transition-all duration-300 ease-linear group-hover:h-12" />
              <span className="relative w-full text-sm text-primary-foreground transition-colors duration-300 ease-in-out group-hover:text-primary">
                Let&apos;s Talk
              </span>
            </button>
          </Link>
        </div>

        <div
          className={`transition-height transition-padding absolute left-0 right-0 top-full transform overflow-hidden bg-black bg-opacity-65 duration-300 ${
            isOpen ? "h-screen" : "h-0 py-0"
          }`}
          onClick={() => setIsOpen(false)}
        >
          <nav className="flex h-auto flex-col items-center gap-6 bg-[#0E0E0E] py-6">
            <Nav navLinks={navLinks} />
            <Link
              href="/blog"
              className="text-sm tracking-wider hover:underline"
            >
              BLOG
            </Link>
            <Link href="/contact">
              <button className="group relative inline-flex h-12 w-40 items-center justify-start overflow-hidden border bg-primary font-medium transition-all">
                <span className="absolute bottom-0 left-0 right-0 h-0 border-0 bg-background/90 transition-all duration-100 ease-linear group-hover:h-12" />
                <span className="relative w-full text-sm text-primary-foreground transition-colors duration-200 ease-in-out group-hover:text-primary">
                  Let&apos;s Talk
                </span>
              </button>
            </Link>
          </nav>
        </div>

        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </Wrapper>
    </header>
  );
}
