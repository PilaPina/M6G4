"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./navBar.module.css";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav} aria-label="Primary">
          <div className={styles.inner}>
            <Link href="/" className={styles.brand} aria-label="Home">
              <Image
                src="/logo.svg"
                alt="Site logo"
                className={styles.brandIcon}
                width={40}
                height={40}
                priority
              />
            </Link>

            <button
              type="button"
              className={styles.menuBtn}
              aria-expanded={open}
              aria-controls="primary-nav"
              onClick={() => setOpen(!open)}
            >
              <span className={styles.menuIcon} aria-hidden />
            </button>

            <div
              id="primary-nav"
              className={`${styles.right} ${open ? styles.open : ""}`}
            >
              <Link
                href="/articles"
                className={styles.link}
                onClick={() => setOpen(false)}
              >
                Journal
              </Link>
              <Link
                href="/about"
                className={styles.link}
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
