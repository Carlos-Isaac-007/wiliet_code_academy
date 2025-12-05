import { LanguagePageData } from "@/types/languages";

export const kotlinData: LanguagePageData = {
  slug: "kotlin",
  name: "Kotlin",

  seo: {
    title: "Kotlin | Wiliet Code Academy",
    description: "Aprenda Kotlin, a linguagem moderna para desenvolvimento Android, multiplataforma e backend.",
  },

  hero: {
    icon: "Code2",
    description: "A linguagem moderna para desenvolvimento Android e muito mais",
    gradient: { from: "from-purple-600", to: "to-purple-700" },
    textColor: "text-purple-50",
  },

  theme: {
    cardBg: "bg-purple-50",
    cardText: "text-gray-600",
    linkColor: "text-purple-600",
    recommendedBg: "bg-purple-100",
    recommendedText: "text-purple-800",
  },

  introduction: [
    "Kotlin é uma linguagem de programação moderna, concisa e segura, criada pela JetBrains em 2011. Em 2017, o Google anunciou Kotlin como linguagem oficial para desenvolvimento Android, ao lado de Java.",
    "Kotlin foi desenhada para ser totalmente interoperável com Java, permitindo que uses bibliotecas Java existentes enquanto escreves código mais conciso e seguro. É executada na JVM (Java Virtual Machine) e também pode ser compilada para JavaScript ou código nativo.",
    "Hoje, Kotlin é a linguagem preferida para desenvolvimento Android, com empresas como Google, Netflix, Uber e muitas outras a adotá-la. É conhecida por eliminar bugs comuns, reduzir código repetitivo e aumentar a produtividade dos programadores.",
  ],

  usage: [
    { title: "Desenvolvimento Android", desc: "A linguagem oficial e preferida do Google para criar aplicações Android modernas." },
    { title: "Aplicações Multiplataforma", desc: "Kotlin Multiplatform permite partilhar código entre Android, iOS e web." },
    { title: "Backend com Spring", desc: "Desenvolvimento de servidores e APIs usando frameworks como Spring Boot." },
    { title: "Aplicações Desktop", desc: "Com frameworks modernos, cria aplicações desktop multiplataforma." },
  ],

  example: {
    code: `// Programa simples em Kotlin
fun main() {
    val nome = "Pedro"
    val idade = 17
    
    println(saudar(nome, idade))
    
    // Usando uma classe de dados
    val estudante = Estudante("Maria", 16, "Programação")
    estudante.apresentar()
}

fun saudar(nome: String, idade: Int): String {
    return "Olá, $nome! Tens $idade anos."
}

// Classe de dados
data class Estudante(
    val nome: String,
    val idade: Int,
    val curso: String
) {
    fun apresentar() {
        println("Sou $nome, tenho $idade anos e estudo $curso")
    }
}`,
    language: "kotlin",
    compilerLink: { url: "https://play.kotlinlang.org/", label: "Testar Kotlin Online" },
    tip: ["Podes experimentar Kotlin online em play.kotlinlang.org ou usar Android Studio para desenvolvimento móvel!"],
  },

  benefits: [
    { title: "Linguagem Oficial do Android", desc: "Google recomenda Kotlin como primeira escolha para desenvolvimento Android." },
    { title: "Código Mais Conciso", desc: "Escreve menos código para fazer o mesmo, aumentando a produtividade." },
    { title: "Segurança contra Null", desc: "Sistema de tipos que previne erros comuns de null pointer exceptions." },
    { title: "Interoperabilidade com Java", desc: "Usa todas as bibliotecas Java existentes sem problemas." },
    { title: "Linguagem Moderna", desc: "Recursos modernos como coroutines, lambdas e extensões de função." },
  ],

  recommended: [
    { title: "Desenvolvedores Android", desc: "Se queres criar aplicações móveis Android, Kotlin é a escolha moderna e recomendada pelo Google." },
    { title: "Programadores Java", desc: "Kotlin é uma evolução natural de Java com sintaxe mais moderna e recursos avançados." },
    { title: "Iniciantes em Mobile", desc: "Mais fácil de aprender que Java, com menos código repetitivo e mais segurança." },
    { title: "Desenvolvedores Multiplataforma", desc: "Kotlin Multiplatform permite partilhar código entre diferentes plataformas." },
    { title: "Profissionais Modernos", desc: "Para quem quer trabalhar com tecnologias atuais e em alta procura no mercado." },
  ],

  references: [
    { label: "Kotlin Official", url: "https://kotlinlang.org/" },
    { label: "Kotlin Playground", url: "https://play.kotlinlang.org/" },
    { label: "Kotlin Docs", url: "https://kotlinlang.org/docs/home.html" },
    { label: "JetBrains Kotlin Blog", url: "https://blog.jetbrains.com/kotlin/" },
  ],

  navigation: {
    previous: { label: "Java", href: "/language/java" },
    next: { label: "JavaScript", href: "/language/javascript" },
  },
};
