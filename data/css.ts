import { LanguagePageData } from "@/types/languages";

export const cssData: LanguagePageData = {
  slug: "css",
  name: "CSS",

  seo: {
    title: "CSS | Wiliet Code Academy",
    description:
      "Aprenda CSS, a linguagem que dá vida e estilo aos websites: conceitos, aplicações, vantagens, exemplos e como começar.",
  },

  hero: {
    icon: "Code2",
    description: "Cascading Style Sheets - Dá vida e estilo aos teus websites",
    gradient: {
      from: "from-blue-500",
      to: "to-blue-600",
    },
    textColor: "text-blue-50",
    image: "https://logodix.com/logo/1169364.png"
  },

  theme: {
    cardBg: "bg-blue-50",
    cardText: "text-gray-600",
    linkColor: "text-blue-600",
    recommendedBg: "bg-blue-100",
    recommendedText: "text-blue-800",
  },

  introduction: [
    "CSS (Cascading Style Sheets) é a linguagem que define o visual e o layout de páginas web. Enquanto HTML cria a estrutura, CSS adiciona cores, fontes, espaçamentos e tudo que torna um website bonito.",
    "Com CSS, podes controlar todos os aspectos visuais do teu website: cores, tamanhos, posicionamento, animações e até criar designs responsivos que funcionam perfeitamente em dispositivos móveis.",
    "CSS3, a versão mais recente, trouxe recursos incríveis como gradientes, sombras, transformações e animações, permitindo criar websites modernos e interativos sem precisar de imagens complexas.",
  ],

  usage: [
    {
      title: "Estilização Visual",
      desc: "Define cores, fontes, tamanhos e todos os aspectos visuais dos elementos HTML.",
    },
    {
      title: "Layout e Posicionamento",
      desc: "Controla como os elementos são posicionados e organizados na página.",
    },
    {
      title: "Design Responsivo",
      desc: "Adapta o website a diferentes tamanhos de ecrã, desde telemóveis a computadores.",
    },
    {
      title: "Animações e Efeitos",
      desc: "Cria animações suaves, transições e efeitos visuais impressionantes.",
    },
  ],

  example: {
    code: `/* Estilização básica */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 20px;
}

h1 {
    color: #2563eb;
    text-align: center;
}

p {
    color: #374151;
    line-height: 1.6;
}`,
    language: "css",
    compilerLink: {
      url: "https://codepen.io/pen/",
      label: "Testar CSS Online (CodePen)",
    },
    tip: [
      "Podes adicionar este CSS no teu HTML usando a tag <style> dentro do <head> ou criar um ficheiro .css separado!",
    ],
  },

  benefits: [
    { title: "Controlo Total do Design", desc: "Podes criar exatamente o visual que imaginas para o teu website." },
    { title: "Complementa o HTML", desc: "Trabalha perfeitamente com HTML para criar páginas web completas e profissionais." },
    { title: "Websites Responsivos", desc: "Aprende a criar sites que funcionam perfeitamente em qualquer dispositivo." },
    { title: "Criatividade Visual", desc: "Expressa a tua criatividade através de cores, layouts e animações." },
    { title: "Essencial para Web Development", desc: "É uma competência fundamental para qualquer desenvolvedor web." },
  ],

  recommended: [
    { title: "Quem já sabe HTML", desc: "CSS é o próximo passo natural depois de aprenderes HTML." },
    { title: "Web Designers", desc: "Permite dar vida às ideias criativas em páginas web." },
    { title: "Desenvolvedores Front-end", desc: "Essencial para quem trabalha com a parte visual de websites e apps." },
    { title: "Criativos Visuais", desc: "Designers e artistas que querem expandir suas competências para o digital." },
    { title: "Profissionais de Marketing", desc: "Útil para personalizar páginas de destino e conteúdo digital." },
  ],

  references: [
    { label: "Documentação CSS MDN", url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS" },
    { label: "Tutorial CSS W3Schools", url: "https://www.w3schools.com/css/" },
    { label: "Testar CSS Online (CodePen)", url: "https://codepen.io/pen/" },
    { label: "JSFiddle CSS Playground", url: "https://jsfiddle.net/" },
  ],

  navigation: {
    previous: {
      label: "HTML",
      href: "/language/html",
    },
    next: {
      label: "JavaScript",
      href: "/language/javascript",
    },
  },
};
