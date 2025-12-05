"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Code2,
  Users,
  LucideProps,
} from "lucide-react";
import { LanguagePageData } from "@/types/languages";
import { CodeExample } from "@/components/CodeExample";
import { url } from "inspector";

const icons: Record<string, React.ComponentType<LucideProps>> = {
  Code2,
  Users,
};

export function LanguagePage({ data }: { data: LanguagePageData }) {
  const Icon = icons[data.hero.icon];

  // cores padrão adaptáveis
  const cardBg = data.theme?.cardBg ?? "bg-gray-100";
  const cardText = data.theme?.cardText ?? "text-gray-600";
  const linkColor = data.theme?.linkColor ?? "text-blue-600";
  const recommendedBg = data.theme?.recommendedBg ?? "bg-gray-50";
  const recommendedText = data.theme?.recommendedText ?? "text-gray-700";

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================= HERO ================= */}
      <section
        className={`relative bg-linear-to-r ${data.hero.gradient.from} ${data.hero.gradient.to} py-16`}
        style={
          data.hero.image
            ? {
                backgroundImage: `url('${data.hero.image}')`,
                backgroundSize: "cover",      // ✅ cover
                backgroundPosition: "center", // ✅ center
                backgroundRepeat: "no-repeat" // ✅ no-repeat
              }
            : undefined
        }
      >
        {/* Overlay com gradiente */}
        <div className={`absolute inset-0 bg-linear-to-r ${data.hero.gradient.from} to-transparent backdrop-blur-[3px]`}></div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-white z-10">
          <div className="flex items-center gap-3 mb-4">
            {Icon && <Icon className="w-12 h-12" />}
            <h1 className="text-4xl font-semibold">{data.name}</h1>
          </div>
          <p className={`text-xl ${data.hero.textColor} max-w-3xl`}>
            {data.hero.description}
          </p>
        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6">Introdução</h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          {data.introduction.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </section>

      {/* ================= USAGE ================= */}
      <section className="bg-white border-y border-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">Para Que Serve?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.usage.map((item) => (
              <div key={item.title} className={`${cardBg} rounded-lg p-6`}>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className={`${cardText}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXAMPLE ================= */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6">Exemplo</h2>

        <CodeExample
          code={data.example.code}
          language={data.example.language}
        />

        <a
          href={data.example.compilerLink.url}
          target="_blank"
          className={`mt-6 inline-flex items-center gap-2 ${linkColor} hover:underline`}
        >
          {data.example.compilerLink.label}
          <ExternalLink className="w-4 h-4" />
        </a>

        <div className="mt-6 space-y-3">
          {data.example.tip.map((tip, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5" />
              <p className="text-gray-600">{tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="bg-white border-y border-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">Por que vale a pena?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.benefits.map((item) => (
              <div key={item.title} className={`${cardBg} rounded-lg p-6`}>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className={`${cardText}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RECOMMENDED ================= */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6">Quando Usar?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.recommended.map((item) => (
            <div key={item.title} className={`${cardBg} rounded-lg p-6`}>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className={`${cardText}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= RECOMMENDED FOR ================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`rounded-lg p-8 ${recommendedBg}`}>
          <div className="flex items-start gap-4 mb-6">
            <Users className={`w-8 h-8 ${recommendedText} shrink-0`} />
            <h2 className={`text-xl font-semibold ${recommendedText}`}>
              Para Quem é Recomendado?
            </h2>
          </div>
          <div className={`space-y-4 ${recommendedText}`}>
            {data.recommended.map((item) => (
              <p key={item.title}>
                <strong>{item.title}:</strong> {item.desc}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ================= REFERENCES ================= */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-semibold mb-4">Referências Oficiais</h2>
        <ul className={`space-y-3 ${linkColor}`}>
          {data.references.map((ref) => (
            <li key={ref.label}>
              <a
                href={ref.url}
                target="_blank"
                className={`hover:underline inline-flex items-center gap-2 ${linkColor}`}
              >
                {ref.label}
                <ExternalLink className="w-4 h-4" />
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= NAVIGATION ================= */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="flex justify-between">
          <Link href={data.navigation.previous.href}>
            <button className="cursor-pointer flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <ArrowLeft className="w-4 h-4" />
              {data.navigation.previous.label}
            </button>
          </Link>

          <Link href={data.navigation.next.href}>
            <button className={`cursor-pointer flex items-center gap-2 ${linkColor} hover:${linkColor}-dark font-medium`}>
              {data.navigation.next.label}
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
