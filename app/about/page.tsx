"use client";

import Image from "next/image";
import { Target, Users, Award, Heart } from "lucide-react";


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* ================= HERO ================= */}
      <section className="relative text-white py-24 overflow-hidden">
        {/* Vídeo de fundo */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://www.pexels.com/pt-br/download/video/6266247/" // substitua pela URL do seu vídeo
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay com gradiente */}
        <div className="absolute inset-0 bg-linear-to-r from-primary-600/80 to-primary-700/60"></div>

        {/* Conteúdo */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre a Wiliet Code Academy
          </h1>
          <p className="text-lg md:text-xl text-primary-50 max-w-2xl mx-auto">
            Uma plataforma educativa dedicada a formar a próxima geração de
            programadores angolanos.
          </p>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Nossa Missão</h2>
            <p className="text-gray-700 leading-relaxed">
              A Wiliet Code Academy nasceu com o objetivo de democratizar o
              acesso à educação em programação para estudantes do ensino
              secundário do Instituto Wiliet e de toda Angola.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Acreditamos que a tecnologia é o futuro e que todos os jovens
              devem ter a oportunidade de aprender as competências necessárias
              para prosperar na era digital.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Oferecemos conteúdo educativo gratuito, de qualidade e em
              português, adaptado à realidade dos estudantes angolanos.
            </p>
          </div>

          <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="https://plus.unsplash.com/premium_photo-1682140996200-6e1472d8ac64?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Educação em programação"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4">Nossos Valores</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Guiados por princípios que nos ajudam a criar um ambiente de
              aprendizagem inclusivo e eficaz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: Target,
                title: "Excelência",
                desc: "Compromisso com a qualidade do conteúdo e métodos de ensino.",
              },
              {
                icon: Users,
                title: "Inclusão",
                desc: "Educação acessível a todos, independentemente do contexto social.",
              },
              {
                icon: Award,
                title: "Inovação",
                desc: "Métodos modernos e atualizados para facilitar a aprendizagem.",
              },
              {
                icon: Heart,
                title: "Comunidade",
                desc: "Construir uma rede de apoio entre estudantes e educadores.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GOALS ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">Nossos Objetivos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              num: "01",
              title: "Formar Programadores Competentes",
              desc: "Equipar os estudantes com as competências técnicas necessárias para desenvolver software de qualidade e competir no mercado global.",
            },
            {
              num: "02",
              title: "Promover o Pensamento Computacional",
              desc: "Desenvolver a capacidade de resolver problemas de forma lógica e sistemática, competência essencial para qualquer área.",
            },
            {
              num: "03",
              title: "Preparar para o Mercado de Trabalho",
              desc: "Orientar os estudantes sobre as oportunidades de carreira em tecnologia e ajudá-los a escolher o caminho certo.",
            },
            {
              num: "04",
              title: "Contribuir para o Desenvolvimento de Angola",
              desc: "Formar profissionais que possam contribuir para a transformação digital e o desenvolvimento tecnológico do país.",
            },
          ].map((goal) => (
            <div
              key={goal.num}
              className="bg-primary-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-primary-700 font-bold mb-2">{goal.num}</div>
              <h3 className="text-xl font-semibold mb-3">{goal.title}</h3>
              <p className="text-gray-700">{goal.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INSTITUTE INFO ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold mb-12">
            Sobre o Instituto Wiliet
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
            <p>
              O Instituto Wiliet é uma instituição de ensino secundário
              localizada em Benguela, Angola, comprometida com a excelência
              académica e a formação integral dos seus estudantes.
            </p>
            <p>
              Com uma visão voltada para o futuro, o Instituto Wiliet reconhece
              a importância da tecnologia na educação moderna e investe em
              iniciativas que preparam os estudantes para os desafios do século
              XXI.
            </p>
            <p>
              A Wiliet Code Academy é parte do compromisso do instituto em
              oferecer aos seus estudantes oportunidades de aprendizagem em
              áreas estratégicas como a programação e as ciências
              computacionais.
            </p>
            <p>
              Através desta plataforma, o Instituto Wiliet reafirma o seu papel
              como líder na educação de qualidade em Angola, preparando os
              jovens para serem protagonistas da transformação digital do país.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
