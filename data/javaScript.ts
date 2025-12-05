import { LanguagePageData } from "@/types/languages";

export const javascriptData: LanguagePageData = {
  slug: "javascript",
  name: "JavaScript",

  seo: {
    title: "JavaScript | Wiliet Code Academy",
    description:
      "Aprenda JavaScript, a linguagem que dá vida à web, criando interatividade, aplicações web, mobile e muito mais.",
  },

  hero: {
    icon: "Code2",
    description: "A linguagem que dá vida e interatividade à web",
    gradient: { from: "from-yellow-500", to: "to-yellow-600" },
    textColor: "text-yellow-50",
    image: "https://logodix.com/logo/374728.png"
  },

  theme: {
    cardBg: "bg-yellow-50",
    cardText: "text-gray-600",
    linkColor: "text-yellow-600",
    recommendedBg: "bg-yellow-100",
    recommendedText: "text-yellow-800",
  },

  introduction: [
    "JavaScript é uma linguagem de programação dinâmica que permite criar websites interativos e aplicações web complexas. É a única linguagem de programação que funciona nativamente nos navegadores web.",
    "Juntamente com HTML e CSS, JavaScript forma o trio fundamental do desenvolvimento web. Enquanto HTML estrutura e CSS estiliza, JavaScript adiciona comportamento, interatividade e lógica às páginas web.",
    "Hoje, JavaScript não se limita apenas aos navegadores. Com tecnologias como Node.js, podes usar JavaScript para criar servidores, aplicações móveis, jogos e muito mais!",
  ],

  usage: [
    { title: "Interatividade Web", desc: "Cria elementos interativos como menus, modais, carrosséis e validação de formulários." },
    { title: "Aplicações Web", desc: "Desenvolve aplicações web complexas como redes sociais, plataformas de e-commerce e sistemas de gestão." },
    { title: "Desenvolvimento Backend", desc: "Com Node.js, cria servidores, APIs e aplicações do lado do servidor." },
    { title: "Aplicações Móveis", desc: "Usando frameworks como React Native, desenvolve apps móveis para iOS e Android." },
  ],

  example: {
    code: `// Função simples em JavaScript
function saudar(nome) {
    return "Olá, " + nome + "! Bem-vindo à programação!";
}

// Chamando a função
console.log(saudar("Maria"));

// Adicionando interatividade
document.querySelector('button').addEventListener('click', function() {
    alert('Botão clicado!');
});`,
    language: "javascript",
    compilerLink: {
      url: "https://www.jdoodle.com/start-coding",
      label: "Testar JavaScript Online (JDoodle)",
    },
    tip: ["Podes testar JavaScript imediatamente abrindo as ferramentas de desenvolvedor do navegador (F12) e usando a consola!"],
  },

  benefits: [
    { title: "Linguagem Versátil", desc: "Usa uma única linguagem para frontend, backend, mobile e muito mais." },
    { title: "Grande Procura no Mercado", desc: "Uma das linguagens mais procuradas por empresas em todo o mundo." },
    { title: "Comunidade Gigante", desc: "Milhões de programadores, infinitas bibliotecas e recursos de aprendizagem gratuitos." },
    { title: "Feedback Imediato", desc: "Vês os resultados do teu código instantaneamente no navegador." },
    { title: "Ecossistema Rico", desc: "Frameworks modernos como React, Vue e Angular facilitam o desenvolvimento." },
  ],

  recommended: [
    { title: "Desenvolvedores Web", desc: "Se já conheces HTML e CSS, JavaScript é o próximo passo natural para criar websites interativos e dinâmicos." },
    { title: "Programadores Iniciantes", desc: "JavaScript é uma excelente primeira linguagem de programação devido à sua sintaxe acessível e feedback visual." },
    { title: "Full-Stack Developers", desc: "Com JavaScript, podes trabalhar tanto no frontend quanto no backend com uma única linguagem." },
    { title: "Desenvolvedores Mobile", desc: "Se queres criar apps móveis, JavaScript com React Native é uma ótima escolha." },
    { title: "Empreendedores Tech", desc: "Permite-te criar protótipos e MVPs rapidamente sem precisar de várias linguagens." },
  ],

  references: [
    { label: "MDN JavaScript Guide", url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide" },
    { label: "W3Schools JavaScript Tutorial", url: "https://www.w3schools.com/js/" },
    { label: "JDoodle JS Editor", url: "https://www.jdoodle.com/online-javascript-editor" },
    { label: "Repl.it JavaScript Playground", url: "https://replit.com/languages/javascript" },
  ],

  navigation: {
    previous: { label: "Java", href: "/language/java" },
    next: { label: "Python", href: "/language/python" },
  },
};
