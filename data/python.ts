import { LanguagePageData } from "@/types/languages";

export const pythonData: LanguagePageData = {
  slug: "python",
  name: "Python",

  seo: {
    title: "Python | Wiliet Code Academy",
    description: "Aprenda Python, a linguagem versátil e popular usada em web, ciência de dados, automação e muito mais.",
  },

  hero: {
    icon: "Code2",
    description: "A linguagem mais versátil e popular do mundo",
    gradient: { from: "from-blue-600", to: "to-blue-700" },
    textColor: "text-blue-50",
    image: "https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=862&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  theme: {
    cardBg: "bg-blue-50",
    cardText: "text-gray-600",
    linkColor: "text-blue-600",
    recommendedBg: "bg-blue-100",
    recommendedText: "text-blue-800",
  },

  introduction: [
    "Python é uma linguagem de programação de alto nível, conhecida pela sua sintaxe simples e legível. Foi criada por Guido van Rossum em 1991 com o objetivo de ser fácil de aprender e usar.",
    "Python destaca-se pela sua filosofia de código limpo e legível, resumida no 'Zen of Python': 'Simples é melhor que complexo'. Esta abordagem torna Python ideal tanto para iniciantes quanto para programadores experientes.",
    "Hoje, Python é uma das linguagens mais populares do mundo, usada em áreas diversas como desenvolvimento web, ciência de dados, inteligência artificial, automação, jogos e muito mais.",
  ],

  usage: [
    { title: "Ciência de Dados e IA", desc: "Análise de dados, machine learning, deep learning e inteligência artificial." },
    { title: "Desenvolvimento Web", desc: "Frameworks como Django e Flask permitem criar websites e APIs robustos." },
    { title: "Automação de Tarefas", desc: "Scripts para automatizar tarefas repetitivas e processos do dia-a-dia." },
    { title: "Computação Científica", desc: "Pesquisa científica, visualização de dados e cálculos complexos." },
  ],

  example: {
    code: `# Programa simples em Python
def saudar(nome):
    return f"Olá, {nome}! Bem-vindo ao Python!"

# Chamando a função
print(saudar("João"))

# Estruturas de controlo
numeros = [1, 2, 3, 4, 5]
for numero in numeros:
    print(f"Número: {numero * 2}")`,
    language: "python",
    compilerLink: { url: "https://www.online-python.com/", label: "Testar Python Online" },
    tip: ["Instala Python a partir de python.org e usa IDLE ou VS Code para programar localmente."],
  },

  benefits: [
    { title: "Fácil de Aprender", desc: "Sintaxe simples e intuitiva, perfeita para quem está a começar a programar." },
    { title: "Extremamente Versátil", desc: "Uma linguagem para quase tudo: web, dados, automação, IA e muito mais." },
    { title: "Alta Procura no Mercado", desc: "Programadores Python estão entre os mais procurados e bem pagos." },
    { title: "Bibliotecas Poderosas", desc: "Milhares de bibliotecas gratuitas para qualquer tarefa que imagines." },
    { title: "Comunidade Enorme", desc: "Suporte massivo, tutoriais em português e recursos de aprendizagem abundantes." },
  ],

  recommended: [
    { title: "Iniciantes Absolutos", desc: "Python é excelente para a primeira linguagem devido à sua sintaxe clara e legível." },
    { title: "Futuros Cientistas de Dados", desc: "Python domina análise de dados, estatística e inteligência artificial." },
    { title: "Desenvolvedores Web", desc: "Frameworks como Django permitem criar aplicações web completas e escaláveis." },
    { title: "Automadores", desc: "Perfeito para automatizar tarefas repetitivas e aumentar a produtividade." },
    { title: "Estudantes e Pesquisadores", desc: "Usado extensivamente em universidades e centros de pesquisa." },
  ],

  references: [
    { label: "Python Official", url: "https://www.python.org/" },
    { label: "Python Docs", url: "https://docs.python.org/3/" },
    { label: "W3Schools Python Tutorial", url: "https://www.w3schools.com/python/" },
    { label: "Online Python Compiler", url: "https://www.online-python.com/" },
  ],

  navigation: {
    previous: { label: "PHP", href: "/language/php" },
    next: { label: "JavaScript", href: "/language/javascript" },
  },
};
