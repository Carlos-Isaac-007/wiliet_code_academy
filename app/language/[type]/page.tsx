import React from "react";
import HtmlPage from "@/components/pages/Html";
import { Css as CssPage } from "@/components/pages/Css";
import { JavaScript as JavascriptPage } from "@/components/pages/JavaScript";
import { Python as PythonPage } from "@/components/pages/Python";
import { Php as PhpPage } from "@/components/pages/Php";
import { C as CPage } from "@/components/pages/C";
import { Cpp as CppPage } from "@/components/pages/Cpp";
import { Java as JavaPage } from "@/components/pages/Java";
import { Sql as SqlPage } from "@/components/pages/Sql";
import { Kotlin as KotlinPage } from "@/components/pages/Kotlin";

// Mapa de componentes por linguagem
const languagePages: Record<string, React.FC> = {
  html: HtmlPage,
  css: CssPage,
  javascript: JavascriptPage,
  python: PythonPage,
  php: PhpPage,
  c: CPage,
  cpp: CppPage,
  java: JavaPage,
  sql: SqlPage,
  kotlin: KotlinPage,
};
interface PageProps {
  params: Promise<{ type: string }>;
}
async function Page({ params }: PageProps) {
  const { type } = await params;
  const normalized = type.toLowerCase();
  const Component = normalized ? languagePages[normalized] : null;

  if (!Component) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Linguagem não encontrada
      </div>
    );
  }

  return <Component />;
}

export default Page;
