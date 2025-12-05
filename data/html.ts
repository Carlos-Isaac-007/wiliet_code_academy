import { LanguagePageData } from "@/types/languages"; // ajuste o caminho conforme sua estrutura

export const htmlData: LanguagePageData = {
  slug: "html",
  name: "HTML",

  seo: {
    title: "HTML | Wiliet Code Academy",
    description:
      "Aprenda HTML, a linguagem fundamental da web: conceitos, estrutura, exemplos e como começar.",
  },

  hero: {
    icon: "Code2",
    description: "HyperText Markup Language — a linguagem fundamental da web",
    gradient: {
      from: "from-orange-500",
      to: "to-orange-600",
    },
    textColor: "text-orange-100",
    image: "https://logodix.com/logo/470257.jpg"
  },

  theme: {
    cardBg: "bg-orange-50",
    cardText: "text-orange-700",
    linkColor: "text-orange-600",
    recommendedBg: "bg-orange-100",
    recommendedText: "text-orange-800",
  },

  introduction: [
    "HTML (HyperText Markup Language) é a linguagem de marcação padrão para criar páginas web. É a base de todo o conteúdo que vês na internet.",
    "HTML não é uma linguagem de programação, mas sim uma linguagem de marcação que estrutura o conteúdo usando elementos como cabeçalhos, parágrafos, links e imagens.",
    "Criado em 1991 por Tim Berners-Lee, HTML evoluiu até a versão HTML5, incluindo suporte para vídeos, áudio e gráficos avançados.",
  ],

  usage: [
    {
      title: "Estruturação de Páginas Web",
      desc: "Define a estrutura e o conteúdo de websites, desde blogs pessoais até grandes portais.",
    },
    {
      title: "Criação de Formulários",
      desc: "Permite criar formulários de contacto, registos e interações com utilizadores.",
    },
    {
      title: "Organização de Conteúdo",
      desc: "Organiza texto, imagens, vídeos e outros elementos de forma lógica e acessível.",
    },
    {
      title: "Base para outras Tecnologias",
      desc: "Fundação para CSS (estilização) e JavaScript (interatividade).",
    },
  ],

  example: {
    code: `<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>A Minha Primeira Página</title>
</head>
<body>
    <h1>Olá, Mundo!</h1>
    <p>Esta é a minha primeira página HTML.</p>
</body>
</html>`,
    language: "html",
    compilerLink: {
      url: "https://codepen.io/pen/",
      label: "Testar HTML Online (CodePen)",
    },
    tip: [
      "Copia este código, guarda-o num ficheiro .html e abre-o no navegador para ver o resultado.",
    ],
  },

  benefits: [
    { title: "Fácil de Aprender", desc: "Sintaxe simples e direta para iniciantes." },
    { title: "Base para o Desenvolvimento Web", desc: "Necessário antes de aprender CSS e JavaScript." },
    { title: "Resultados Imediatos", desc: "Visualiza mudanças rapidamente no navegador." },
    { title: "Amplamente Utilizado", desc: "Usado em praticamente todos os sites da web." },
    { title: "Gratuito e Acessível", desc: "Não requer software caro ou instalação complexa." },
  ],

  recommended: [
    { title: "Iniciantes Absolutos", desc: "Sintaxe clara e conceitos fáceis de entender." },
    { title: "Aspirantes a Web Designers", desc: "Base essencial antes de CSS e JS." },
    { title: "Criadores de Conteúdo", desc: "Controle sobre seu conteúdo online." },
    { title: "Futuros Programadores", desc: "Porta de entrada para o desenvolvimento web." },
    { title: "Estudantes Curiosos", desc: "Para compreender como a internet funciona." },
  ],

  references: [
    { label: "Documentação Oficial MDN", url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML" },
    { label: "Tutorial HTML W3Schools", url: "https://www.w3schools.com/html/" },
    { label: "Testar HTML Online (CodePen)", url: "https://codepen.io/pen/" },
    { label: "JSFiddle HTML Playground", url: "https://jsfiddle.net/" },
  ],

  navigation: {
    previous: {
      label: "Todas as Linguagens",
      href: "/#languages",
    },
    next: {
      label: "CSS",
      href: "/language/css",
    },
  },
};
