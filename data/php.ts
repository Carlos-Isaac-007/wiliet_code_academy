import { LanguagePageData } from "@/types/languages";

export const phpData: LanguagePageData = {
  slug: "php",
  name: "PHP",

  seo: {
    title: "PHP | Wiliet Code Academy",
    description: "Aprenda PHP, a linguagem de script do lado do servidor que alimenta a web dinâmica.",
  },

  hero: {
    icon: "Code2",
    description: "Hypertext Preprocessor - A força por trás da web dinâmica",
    gradient: { from: "from-purple-600", to: "to-purple-700" },
    textColor: "text-purple-50",
    image: "https://logodix.com/logo/1625948.png"
  },

  theme: {
    cardBg: "bg-purple-50",
    cardText: "text-gray-600",
    linkColor: "text-purple-600",
    recommendedBg: "bg-purple-100",
    recommendedText: "text-purple-800",
  },

  introduction: [
    "PHP (Hypertext Preprocessor) é uma linguagem de script do lado do servidor, especialmente adequada para desenvolvimento web. Foi criada em 1994 e rapidamente se tornou uma das linguagens mais usadas na internet.",
    "PHP é executado no servidor, gerando HTML que é depois enviado para o navegador do utilizador. Isto permite criar páginas web dinâmicas, interagir com bases de dados e processar formulários de forma segura.",
    "Hoje, PHP alimenta mais de 75% da web, incluindo plataformas massivas como WordPress, Facebook, Wikipedia e muitos sistemas de comércio eletrónico. A versão atual, PHP 8, trouxe melhorias significativas de performance e recursos modernos.",
  ],

  usage: [
    { title: "Websites Dinâmicos", desc: "Cria páginas web que mudam baseadas em ações do utilizador ou dados da base de dados." },
    { title: "Sistemas de Gestão de Conteúdo", desc: "Plataformas como WordPress, Joomla e Drupal são construídas em PHP." },
    { title: "E-commerce", desc: "Plataformas de loja online como WooCommerce, Magento e OpenCart usam PHP." },
    { title: "APIs e Web Services", desc: "Desenvolvimento de APIs RESTful para comunicação entre sistemas." },
  ],

  example: {
    code: `<?php
// Programa simples em PHP
function saudar($nome) {
    return "Olá, " . $nome . "! Bem-vindo ao PHP!";
}

// Chamando a função
echo saudar("Ana");

// Trabalhando com arrays
$linguagens = ["HTML", "CSS", "JavaScript", "PHP"];
foreach ($linguagens as $linguagem) {
    echo "<p>Aprende: $linguagem</p>";
}
?>`,
    language: "php",
    compilerLink: { url: "https://www.onlinephp.io/", label: "Testar PHP Online" },
    tip: ["Para executar PHP localmente, usa um servidor como XAMPP, WAMP ou MAMP e acede aos ficheiros via navegador!"],
  },

  benefits: [
    { title: "Amplamente Usado", desc: "Mais de 75% dos websites usam PHP, garantindo muitas oportunidades de trabalho." },
    { title: "Fácil Integração com Bases de Dados", desc: "PHP trabalha perfeitamente com MySQL e outras bases de dados." },
    { title: "Frameworks Poderosos", desc: "Laravel, Symfony e CodeIgniter facilitam o desenvolvimento profissional." },
    { title: "Hospedagem Acessível", desc: "A maioria dos serviços de hospedagem suporta PHP de forma nativa e económica." },
    { title: "Comunidade Madura", desc: "Décadas de desenvolvimento resultaram em recursos, bibliotecas e suporte abundantes." },
  ],

  recommended: [
    { title: "Desenvolvedores Web Backend", desc: "Se queres criar a lógica do servidor e trabalhar com bases de dados, PHP é uma escolha sólida." },
    { title: "Criadores de Websites", desc: "Ideal para quem quer criar websites dinâmicos, blogs ou sistemas de gestão de conteúdo." },
    { title: "Empreendedores Online", desc: "Perfeito para criar lojas online e plataformas de negócios na web." },
    { title: "Programadores Freelance", desc: "Há grande procura por desenvolvedores PHP para projetos de WordPress e outras plataformas." },
    { title: "Quem já conhece HTML", desc: "PHP integra-se naturalmente com HTML, tornando a transição suave e intuitiva." },
  ],

  references: [
    { label: "PHP Official", url: "https://www.php.net/" },
    { label: "PHP Manual", url: "https://www.php.net/manual/pt_BR/" },
    { label: "W3Schools PHP Tutorial", url: "https://www.w3schools.com/php/" },
    { label: "Online PHP Compiler", url: "https://www.onlinephp.io/" },
  ],

  navigation: {
    previous: { label: "Kotlin", href: "/language/kotlin" },
    next: { label: "JavaScript", href: "/language/javascript" },
  },
};
