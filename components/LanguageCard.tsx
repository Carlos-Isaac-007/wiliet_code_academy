import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface LanguageCardProps {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export function LanguageCard({ id, name, description, icon, color }: LanguageCardProps) {
  return (
    <Link
      href={`/language/${id}`}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-linear-to-br from-primary-100/30 to-primary-200/20 pointer-events-none" />

      <div className="relative z-10">
        {/* Ícone */}
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-inner ${color} group-hover:scale-110 transition-transform`}
        >
          {icon}
        </div>

        {/* Conteúdo */}
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">
          {name}
        </h3>
        <p className="text-sm text-gray-600 mt-1 mb-4">{description}</p>

        <div className="flex items-center gap-2 text-primary-700 group-hover:gap-3 transition-all">
          <span className="text-sm font-medium">Aprender {name}</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
