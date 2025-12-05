import { LanguagePageData } from "@/types/languages";

export const cData: LanguagePageData = {
  slug: "c",
  name: "C",
  seo: {
    title: "Linguagem C | Wiliet Code Academy",
    description:
      "Aprende a linguagem C de forma prática e didática: história, aplicações, vantagens, exemplos e como começar.",
  },
  hero: {
    icon: "Code2",
    description: "A linguagem mãe da programação moderna.",
    gradient: {
      from: "from-gray-700",
      to: "to-gray-800",
    },
    textColor: "text-gray-200",
    image: "https://logodix.com/logo/32072.jpg"
  },

  introduction: [
    "C é uma linguagem de programação de propósito geral criada por Dennis Ritchie nos laboratórios Bell em 1972. É considerada a 'mãe' de muitas linguagens modernas como C++, Java, C# e JavaScript.",
    "C é uma linguagem de baixo nível que oferece controlo direto sobre o hardware do computador. Isto torna-a extremamente poderosa e eficiente, sendo usada para criar sistemas operativos, drivers, sistemas embarcados e software de alto desempenho.",
    "Apesar de ter mais de 50 anos, C continua extremamente relevante, sendo utilizada em educação, engenharia e software crítico.",
  ],

  usage: [
    {
      title: "Sistemas Operativos",
      desc: "Linux, Windows e muitos outros sistemas operativos são escritos em C.",
    },
    {
      title: "Sistemas Embarcados",
      desc: "Microcontroladores, robótica, IoT e dispositivos eletrónicos.",
    },
    {
      title: "Software de Sistema",
      desc: "Compiladores, drivers, kernels e sistemas de baixo nível.",
    },
    {
      title: "Aplicações de Alto Desempenho",
      desc: "Jogos, motores gráficos e simulações científicas.",
    },
  ],

  example: {
    code: `#include <stdio.h>

// Programa simples em C
int main() {
    char nome[50];
    int idade;
    
    printf("Qual é o teu nome? ");
    scanf("%s", nome);
    
    printf("Qual é a tua idade? ");
    scanf("%d", &idade);
    
    printf("Olá, %s! Tens %d anos.\\n", nome, idade);
    
    return 0;
}`,
    language: "c",
    compilerLink: {
      url: "https://www.onlinegdb.com/online_c_compiler",
      label: "Testar código online",
    },
    tip: [
      "Para compilar:",
      "<code>gcc programa.c -o programa</code>",
      "<code>./programa</code>",
    ],
  },

  benefits: [
    {
      title: "Fundamentos Sólidos",
      desc: "Aprender C ensina como os computadores realmente funcionam a baixo nível.",
    },
    {
      title: "Base para Outras Linguagens",
      desc: "Facilita aprender C++, Java, Rust e muitas outras linguagens modernas.",
    },
    {
      title: "Performance Máxima",
      desc: "Permite desenvolver software extremamente eficiente e rápido.",
    },
    {
      title: "Portabilidade",
      desc: "Código C compila em praticamente qualquer sistema operativo.",
    },
  ],

  recommended: [
    {
      title: "Estudantes de Ciências da Computação",
      desc: "Base essencial de programação.",
    },
    {
      title: "Programadores de Sistemas",
      desc: "Kernel, drivers e ferramentas de baixo nível.",
    },
    {
      title: "Engenheiros de Hardware",
      desc: "Microcontroladores, robótica, IoT.",
    },
    {
      title: "Quem busca performance",
      desc: "Aplicações críticas e otimização.",
    },
  ],

  references: [
    {
      label: "GNU C Manual",
      url: "https://www.gnu.org/software/gnu-c-manual/",
    },
    {
      label: "cppreference.com (Seção C)",
      url: "https://en.cppreference.com/w/c",
    },
  ],

  navigation: {
    previous: {
      label: "Todas as Linguagens",
      href: "/#languages",
    },
    next: {
      label: "C++",
      href: "/language/cpp",
    },
  },

  theme: {
    cardBg: "bg-gray-700",
    cardText: "text-gray-200",
    linkColor: "text-gray-400",
    recommendedBg: "bg-gray-800",
    recommendedText: "text-gray-100",
  },
};