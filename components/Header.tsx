"use client";

import { useState } from "react";
import Link from "next/link";
import { Code2, Menu, X} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Início", href: "/" },
    { id: "about", label: "Sobre", href: "/about" },
    { id: "contact", label: "Contactos", href: "/contact" },
  ];

  const languages = [
    { id: "html", label: "HTML", href: "/language/html" },
    { id: "css", label: "CSS", href: "/language/css" },
    { id: "javascript", label: "JavaScript", href: "/language/javascript" },
    { id: "python", label: "Python", href: "/language/python" },
    { id: "php", label: "PHP", href: "/language/php" },
    { id: "c", label: "C", href: "/language/c" },
    { id: "cpp", label: "C++", href: "/language/cpp" },
    { id: "java", label: "Java", href: "/language/java" },
    { id: "sql", label: "SQL", href: "/language/sql" },
    { id: "kotlin", label: "Kotlin", href: "/language/kotlin" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80">
          <Code2 className="h-7 w-7 text-primary" />
          <span className="font-medium text-foreground">Wiliet Code Academy</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-gray hover:text-foreground hover:bg-gray-100 transition"
            >
              {item.label}
            </Link>
          ))}

          {/* Dropdown de linguagens — versão UI/UX moderna */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="gap-1 text-gray hover:text-foreground">
                  Linguagens
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-30 gap-1 rounded-md border bg-white p-2 shadow-lg">
                    {languages.map((lang) => (
                      <Link
                        key={lang.id}
                        href={lang.href}
                        className="rounded-md px-3 py-2 text-sm text-gray hover:bg-gray-100 hover:text-foreground transition"
                      >
                        {lang.label}
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-2 text-gray hover:bg-gray-100 md:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-gray-200 bg-background p-4 md:hidden animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="rounded-md px-3 py-2 text-gray hover:bg-gray-100 hover:text-foreground transition"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-4 border-t pt-3">
              <p className="px-3 pb-2 text-xs text-gray-500">Linguagens</p>

              {languages.map((lang) => (
                <Link
                  key={lang.id}
                  href={lang.href}
                  className="rounded-md px-3 py-2 text-gray hover:bg-gray-100 hover:text-foreground transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {lang.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
