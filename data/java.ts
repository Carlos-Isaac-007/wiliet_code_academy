import { LanguagePageData } from "@/types/languages";

export const javaData: LanguagePageData = {
  slug: "java",
  name: "Java",

  seo: {
    title: "Java | Wiliet Code Academy",
    description:
      "Aprenda Java, uma linguagem de programação orientada a objetos robusta e portátil: conceitos, aplicações, vantagens, exemplos e como começar.",
  },

  hero: {
    icon: "Code2",
    description: "Escreve uma vez, executa em qualquer lugar",
    gradient: {
      from: "from-red-600",
      to: "to-orange-600",
    },
    textColor: "text-red-50",
    image: "https://logodix.com/logo/283001.png"
  },

  theme: {
    cardBg: "bg-red-50",
    cardText: "text-gray-600",
    linkColor: "text-red-600",
    recommendedBg: "bg-orange-50",
    recommendedText: "text-red-800",
  },

  introduction: [
    "Java é uma linguagem de programação orientada a objetos criada pela Sun Microsystems (agora Oracle) em 1995. Foi desenhada com o princípio 'Write Once, Run Anywhere' (WORA) - escreve uma vez, executa em qualquer lugar.",
    "Java funciona através da Java Virtual Machine (JVM), que permite que o mesmo código seja executado em Windows, Linux, macOS e muitas outras plataformas sem modificações. Esta portabilidade tornou Java uma das linguagens mais populares do mundo.",
    "Java é usado por milhões de programadores em todo o mundo para criar aplicações empresariais, aplicações Android, sistemas web de grande escala, e muito mais. É conhecida pela sua robustez, segurança e escalabilidade.",
  ],

  usage: [
    {
      title: "Aplicações Android",
      desc: "Java é a linguagem oficial para desenvolvimento de aplicações Android.",
    },
    {
      title: "Aplicações Empresariais",
      desc: "Sistemas bancários, seguradoras e grandes corporações usam Java extensivamente.",
    },
    {
      title: "Desenvolvimento Web",
      desc: "Frameworks como Spring e Jakarta EE permitem criar aplicações web robustas.",
    },
    {
      title: "Big Data e Cloud",
      desc: "Hadoop, Apache Spark e muitas ferramentas de big data são escritas em Java.",
    },
  ],

  example: {
    code: `// Classe simples em Java
public class OlaMundo {
    public static void main(String[] args) {
        // Criar um objeto estudante
        Estudante aluno = new Estudante("João", 17);
        aluno.apresentar();
    }
}

class Estudante {
    private String nome;
    private int idade;
    
    public Estudante(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    public void apresentar() {
        System.out.println("Olá! Sou " + nome);
        System.out.println("Tenho " + idade + " anos.");
    }
}`,
    language: "java",
    compilerLink: {
      url: "https://www.jdoodle.com/online-java-compiler",
      label: "Testar Java Online (JDoodle)",
    },
    tip: [
      "Compila com: javac OlaMundo.java. Depois executa com: java OlaMundo",
    ],
  },

  benefits: [
    { title: "Portabilidade Total", desc: "Escreve uma vez e executa em qualquer sistema operativo com JVM." },
    { title: "Desenvolvimento Android", desc: "A linguagem principal para criar aplicações móveis Android." },
    { title: "Forte Procura no Mercado", desc: "Empresas de todos os tamanhos procuram constantemente programadores Java." },
    { title: "POO Pura", desc: "Aprende programação orientada a objetos de forma sólida e estruturada." },
    { title: "Ecossistema Maduro", desc: "Décadas de desenvolvimento resultaram em bibliotecas, frameworks e ferramentas excelentes." },
  ],

  recommended: [
    { title: "Desenvolvedores Android", desc: "Se queres criar aplicações móveis para Android, Java é essencial (junto com Kotlin)." },
    { title: "Programadores Empresariais", desc: "Ideal para quem quer trabalhar em grandes empresas e sistemas corporativos." },
    { title: "Estudantes de Informática", desc: "Java é amplamente ensinado em universidades e fornece uma base sólida em POO." },
    { title: "Desenvolvedores Backend", desc: "Excelente para criar APIs, microserviços e aplicações do lado do servidor." },
    { title: "Iniciantes Sérios", desc: "Boa primeira linguagem para quem quer uma carreira sólida em programação." },
  ],

  references: [
    { label: "Documentação Java Oracle", url: "https://docs.oracle.com/en/java/" },
    { label: "Tutorial Java W3Schools", url: "https://www.w3schools.com/java/" },
    { label: "Testar Java Online (JDoodle)", url: "https://www.jdoodle.com/online-java-compiler" },
    { label: "Repl.it Java Playground", url: "https://replit.com/languages/java10" },
  ],

  navigation: {
    previous: {
      label: "C++",
      href: "/language/cpp",
    },
    next: {
      label: "JavaScript",
      href: "/language/javascript",
    },
  },
};
