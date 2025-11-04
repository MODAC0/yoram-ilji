"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import Link from "next/link";

export default function Header() {
  return (
    <Navbar className="mb-8 border-b">
      <NavbarBrand>
        <Link href="/" className="font-bold text-xl">
          Yoram Ilji
        </Link>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <Link href="/">홈</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/blog">블로그</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/portfolio">포트폴리오</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
