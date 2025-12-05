import { BookOpen, Code, Lightbulb, Rocket, Target, Users } from "lucide-react";
import Link from "next/link";
import { LanguageCard } from "@/components/LanguageCard";
import { ImageWithFallback } from "@/components/ImageWithFallback";

export default function Home() {
  const languages = [
    {
      id: "html",
      name: "HTML",
      description: "Estrutura de páginas web",
      icon: <Code className="w-7 h-7 text-orange-600" />,
      color: "bg-orange-100",
    },
    {
      id: "css",
      name: "CSS",
      description: "Estilização de websites",
      icon: <Code className="w-7 h-7 text-blue-600" />,
      color: "bg-blue-100",
    },
    {
      id: "javascript",
      name: "JavaScript",
      description: "Interatividade na web",
      icon: <Code className="w-7 h-7 text-yellow-600" />,
      color: "bg-yellow-100",
    },
    {
      id: "python",
      name: "Python",
      description: "Linguagem versátil e poderosa",
      icon: <Code className="w-7 h-7 text-blue-700" />,
      color: "bg-blue-100",
    },
    {
      id: "php",
      name: "PHP",
      description: "Desenvolvimento backend",
      icon: <Code className="w-7 h-7 text-purple-600" />,
      color: "bg-purple-100",
    },
    {
      id: "c",
      name: "C",
      description: "Base da programação moderna",
      icon: <Code className="w-7 h-7 text-gray-700" />,
      color: "bg-gray-100",
    },
    {
      id: "cpp",
      name: "C++",
      description: "Programação orientada a objetos",
      icon: <Code className="w-7 h-7 text-blue-800" />,
      color: "bg-blue-100",
    },
    {
      id: "java",
      name: "Java",
      description: "Aplicações empresariais",
      icon: <Code className="w-7 h-7 text-red-600" />,
      color: "bg-red-100",
    },
    {
      id: "sql",
      name: "SQL",
      description: "Gestão de bases de dados",
      icon: <Code className="w-7 h-7 text-cyan-600" />,
      color: "bg-cyan-100",
    },
    {
      id: "kotlin",
      name: "Kotlin",
      description: "Desenvolvimento Android",
      icon: <Code className="w-7 h-7 text-purple-700" />,
      color: "bg-purple-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="relative overflow-hidden text-white py-24">
        {/* Vídeo de fundo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2019/05/06/23355-334950213_large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay para dar contraste */}
        <div className="absolute inset-0 bg-primary-700/70 backdrop-blur-[2px]"></div>

        {/* Blur circles */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary-400 blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-white/20 blur-3xl opacity-20"></div>

        {/* Conteúdo */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white mb-6">
              Wiliet Code Academy
            </h1>

            <p className="text-xl text-primary-50 mb-4">
              Aprende programação e escolhe a tua ferramenta para o futuro.
            </p>

            <p className="text-primary-100 max-w-xl mb-8">
              Tutoriais práticos, exercícios, exemplos modernos e uma trilha
              completa para iniciares a tua jornada tecnológica.
            </p>

            <Link
              href="/#languages"
              className="inline-flex items-center gap-2 bg-white text-primary-700 font-medium px-7 py-3 rounded-xl shadow hover:bg-primary-50 transition"
            >
              <BookOpen className="w-5 h-5" />
              Começar Agora
            </Link>
          </div>

          <div className="hidden lg:block">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759884248009-92c5e957708e?fit=crop&w=900&q=80"
              alt="Estudantes aprendendo"
              width={900}
              height={700}
              className="rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* LINGUAGENS */}
      <section className="py-20 max-w-7xl mx-auto px-6" id="languages">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-3">
            Escolhe a tua primeira linguagem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descobre as linguagens de programação com melhor futuro e começa a
            aprender agora.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {languages.map((lang) => (
            <LanguageCard key={lang.id} {...lang} />
          ))}
        </div>
      </section>

      {/* PORQUÊ APRENDER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Porquê aprender programação?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Uma habilidade essencial para o século XXI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="text-white w-7 h-7" />,
                title: "Carreira promissora",
                desc: "Mercado de tecnologia em crescimento e muitas oportunidades.",
              },
              {
                icon: <Lightbulb className="text-white w-7 h-7" />,
                title: "Pensamento crítico",
                desc: "Desenvolve lógica, raciocínio e resolução de problemas.",
              },
              {
                icon: <Target className="text-white w-7 h-7" />,
                title: "Cria as tuas soluções",
                desc: "Transforma ideias em aplicações reais.",
              },
              {
                icon: <Users className="text-white w-7 h-7" />,
                title: "Trabalho colaborativo",
                desc: "Aprende a construir projetos em equipa.",
              },
              {
                icon: <Code className="text-white w-7 h-7" />,
                title: "Aprendizagem contínua",
                desc: "Tecnologia evolui sempre — nunca ficas parado.",
              },
              {
                icon: <BookOpen className="text-white w-7 h-7" />,
                title: "Recursos gratuitos",
                desc: "Aprende sem barreiras financeiras.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-primary-50 rounded-2xl p-7 hover:shadow-xl border border-primary-100 transition"
              >
                <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1508361727343-ca787442dcd7?fit=crop&w=900&q=80"
            alt="Tecnologia futuro"
            width={900}
            height={700}
            className="rounded-2xl shadow-xl object-cover"
          />

          <div>
            <h2 className="text-3xl font-bold mb-6">Sobre o projeto Wiliet</h2>

            <p className="text-gray-600 mb-4">
              A Wiliet Code Academy é uma iniciativa do Instituto Wiliet
              dedicada a democratizar o ensino de programação em Angola.
            </p>

            <p className="text-gray-600 mb-4">
              Uma plataforma gratuita, prática e totalmente acessível para
              estudantes iniciantes.
            </p>

            <p className="text-gray-600 mb-6">
              Acreditamos que o conhecimento tecnológico abre portas e muda
              vidas — e queremos ajudar-te a dar os primeiros passos.
            </p>

            <Link
              href="/about"
              className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition"
            >
              Saber Mais
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
