import { LanguagePageData } from "@/types/languages";

export const sqlData: LanguagePageData = {
  slug: "sql",
  name: "SQL",

  seo: {
    title: "SQL | Wiliet Code Academy",
    description: "Aprenda SQL, a linguagem padrão para gerir e manipular bases de dados relacionais de forma eficiente e estruturada.",
  },

  hero: {
    icon: "Code2",
    description: "Structured Query Language - A linguagem das bases de dados",
    gradient: { from: "from-cyan-600", to: "to-blue-600" },
    textColor: "text-cyan-50",
    image: "https://logodix.com/logo/541959.jpg"
  },

  theme: {
    cardBg: "bg-cyan-50",
    cardText: "text-gray-600",
    linkColor: "text-cyan-600",
    recommendedBg: "bg-blue-50",
    recommendedText: "text-cyan-800",
  },

  introduction: [
    "SQL (Structured Query Language) é a linguagem padrão para gerir e manipular bases de dados relacionais. Criada nos anos 70, SQL permite criar, ler, atualizar e eliminar dados de forma eficiente e estruturada.",
    "Ao contrário das linguagens de programação tradicionais, SQL é uma linguagem declarativa - dizes o que queres, não como fazer. SQL trabalha com tabelas de dados organizadas em linhas e colunas, permitindo consultas complexas e relações entre dados.",
    "SQL é universal e funciona com diversos sistemas de gestão de bases de dados como MySQL, PostgreSQL, SQL Server, Oracle e SQLite. Praticamente todas as aplicações web e empresariais usam SQL para gerir os seus dados.",
  ],

  usage: [
    { title: "Gestão de Dados", desc: "Armazenar, organizar e gerir grandes volumes de dados de forma estruturada." },
    { title: "Aplicações Web", desc: "Praticamente todos os websites dinâmicos usam SQL para gerir conteúdo e utilizadores." },
    { title: "Análise de Dados", desc: "Realizar consultas complexas, relatórios e análises de negócio." },
    { title: "Sistemas Empresariais", desc: "ERP, CRM e outros sistemas de gestão empresarial dependem fortemente de SQL." },
  ],

  example: {
    code: `-- Criar uma tabela de estudantes
CREATE TABLE Estudantes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    idade INT,
    curso VARCHAR(50)
);

-- Inserir dados
INSERT INTO Estudantes (nome, idade, curso)
VALUES ('Maria Silva', 16, 'Informática');

-- Consultar dados
SELECT nome, idade, curso
FROM Estudantes
WHERE idade >= 16
ORDER BY nome;

-- Atualizar dados
UPDATE Estudantes
SET curso = 'Programação'
WHERE id = 1;`,
    language: "sql",
    compilerLink: { url: "https://www.db-fiddle.com/", label: "Testar SQL Online" },
    tip: ["Podes praticar SQL usando ferramentas online como SQLite Online ou instalando MySQL/PostgreSQL localmente."],
  },

  benefits: [
    { title: "Universalmente Necessário", desc: "Quase todos os programadores precisam de SQL em algum momento da carreira." },
    { title: "Fácil de Aprender", desc: "SQL tem uma sintaxe intuitiva e semelhante ao inglês, facilitando o aprendizado." },
    { title: "Complementa Outras Linguagens", desc: "SQL trabalha em conjunto com Python, PHP, JavaScript e outras linguagens." },
    { title: "Análise de Dados", desc: "Essencial para trabalhar com dados, business intelligence e data science." },
    { title: "Padrão da Indústria", desc: "SQL é o padrão há décadas e continuará relevante no futuro previsível." },
  ],

  recommended: [
    { title: "Desenvolvedores Web", desc: "Essencial para qualquer pessoa que trabalhe com websites dinâmicos e aplicações web." },
    { title: "Analistas de Dados", desc: "Fundamental para quem quer trabalhar com análise de dados, business intelligence ou data science." },
    { title: "Desenvolvedores Backend", desc: "SQL é crucial para gerir os dados do lado do servidor em qualquer aplicação." },
    { title: "Administradores de Sistemas", desc: "Útil para gerir e manter sistemas de bases de dados empresariais." },
    { title: "Qualquer Programador", desc: "SQL é uma competência complementar valiosa independentemente da tua área de especialização." },
  ],

  references: [
    { label: "SQL Official", url: "https://www.iso.org/standard/63555.html" },
    { label: "W3Schools SQL Tutorial", url: "https://www.w3schools.com/sql/" },
    { label: "SQLite Online", url: "https://sqliteonline.com/" },
    { label: "DB-Fiddle", url: "https://www.db-fiddle.com/" },
  ],

  navigation: {
    previous: { label: "Python", href: "/language/python" },
    next: { label: "PHP", href: "/language/php" },
  },
};
