"use client";

import Link from "next/link";
import { Code2, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* ========== Brand / About ========== */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-7 h-7 text-primary-400" />
              <span className="text-white font-semibold tracking-tight text-lg">
                Wiliet Code Academy
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Plataforma educativa do Instituto Wiliet focada na introdução à
              programação e desenvolvimento de competências digitais para o
              futuro.
            </p>
          </div>

          {/* ========== Quick Links ========== */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Início" },
                { href: "/about", label: "Sobre" },
                { href: "/#languages", label: "Linguagens de Programação" },
                { href: "/contact", label: "Contactos" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-primary-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========== Contact Info ========== */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contactos</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary-400 shrink-0" />
                Instituto Wiliet, Benguela, Angola
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary-400 shrink-0" />
                info@wilietcode.ao
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary-400 shrink-0" />
                +244 923 456 789
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Wiliet Code Academy — Todos os direitos reservados.</p>
          <p className="mt-1">Instituto Wiliet — Educação para o Futuro</p>
        </div>
      </div>
    </footer>
  );
}
