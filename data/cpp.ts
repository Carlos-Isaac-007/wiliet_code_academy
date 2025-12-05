import { LanguagePageData } from "@/types/languages";

export const cppData: LanguagePageData = {
  slug: "cpp",
  name: "C++",

  seo: {
    title: "Linguagem C++ | Wiliet Code Academy",
    description:
      "Aprenda C++, a evolução de C com programação orientada a objetos: história, aplicações, vantagens, exemplos e como começar.",
  },

  hero: {
    icon: "Code2",
    description: "A evolução de C com programação orientada a objetos",
    gradient: {
      from: "from-blue-700",
      to: "to-blue-800",
    },
    textColor: "text-blue-100",
  },

  theme: {
    cardBg: "bg-blue-50",
    cardText: "text-gray-600",
    linkColor: "text-blue-600",
    recommendedBg: "bg-blue-100",
    recommendedText: "text-blue-800",
  },

  introduction: [
    "C++ é uma extensão da linguagem C, criada por Bjarne Stroustrup em 1985. Adiciona ao C recursos de programação orientada a objetos (POO), mantendo a eficiência e o controlo de baixo nível que tornam C tão poderoso.",
    "C++ combina o melhor dos dois mundos: a velocidade e eficiência de C com paradigmas modernos de programação como classes, herança, polimorfismo e encapsulamento.",
    "Hoje, C++ é usado em inúmeras aplicações críticas: motores de jogos, navegadores web, aplicações de desktop, sistemas em tempo real e muito mais.",
  ],

  usage: [
    {
      title: "Desenvolvimento de Jogos",
      desc: "Motores como Unreal Engine e muitos jogos AAA são desenvolvidos em C++.",
    },
    {
      title: "Aplicações de Desktop",
      desc: "Software como Adobe Photoshop, Autodesk Maya e Microsoft Office usam C++.",
    },
    {
      title: "Sistemas em Tempo Real",
      desc: "Aplicações médicas, sistemas de controlo de tráfego aéreo e automação industrial.",
    },
    {
      title: "Gráficos e Simulação",
      desc: "Renderização 3D, simulações físicas e aplicações científicas de alto desempenho.",
    },
  ],

  example: {
    code: `#include <iostream>
#include <string>
using namespace std;

// Classe simples em C++
class Estudante {
private:
    string nome;
    int idade;
    
public:
    Estudante(string n, int i) {
        nome = n;
        idade = i;
    }
    
    void apresentar() {
        cout << "Olá! Sou " << nome;
        cout << " e tenho " << idade << " anos." << endl;
    }
};

int main() {
    Estudante aluno("Maria", 16);
    aluno.apresentar();
    return 0;
}`,
    language: "cpp",
    compilerLink: {
      url: "https://www.onlinegdb.com/online_c++_compiler",
      label: "Testar C++ Online",
    },
    tip: [
      "Compila com: <code>g++ programa.cpp -o programa</code>",
      "Depois executa com: <code>./programa</code>",
    ],
  },

  benefits: [
    { title: "Performance e Controlo", desc: "Combina a eficiência de C com abstrações modernas de programação." },
    { title: "Programação Orientada a Objetos", desc: "Aprende conceitos essenciais de POO que são usados em muitas linguagens modernas." },
    { title: "Indústria de Jogos", desc: "A linguagem preferida para desenvolvimento de jogos de alto desempenho." },
    { title: "Biblioteca Padrão Rica", desc: "STL oferece estruturas de dados e algoritmos poderosos." },
    { title: "Multiplataforma", desc: "Código pode ser compilado para Windows, Linux, macOS e outras plataformas." },
  ],

  recommended: [
    { title: "Desenvolvedores de Jogos", desc: "Se sonhas em criar jogos, C++ é a linguagem da indústria para motores e jogos de alto desempenho." },
    { title: "Quem já conhece C", desc: "C++ é a evolução natural de C, adicionando recursos modernos sem perder a eficiência." },
    { title: "Programadores de Sistemas", desc: "Ideal para quem quer criar software de sistema complexo com abstrações modernas." },
    { title: "Engenheiros de Software", desc: "Perfeito para aplicações empresariais que exigem desempenho e organização de código." },
    { title: "Estudantes Avançados", desc: "Para quem quer dominar conceitos avançados de programação e estruturas de dados." },
  ],

  references: [
    { label: "Documentação C++ CPPReference", url: "https://en.cppreference.com/w/" },
    { label: "Tutorial C++ W3Schools", url: "https://www.w3schools.com/cpp/" },
  ],

  navigation: {
    previous: {
      label: "C",
      href: "/language/c",
    },
    next: {
      label: "Java",
      href: "/language/java",
    },
  },
};
