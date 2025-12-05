export interface LanguagePageData {
  slug: string;
  name: string;

  seo: {
    title: string;
    description: string;
  };

  hero: {
    icon: string;
    description: string;
    gradient: {
      from: string;
      to: string;
    };
    textColor: string;
    image?: string;
  };

  introduction: string[];

  usage: {
    title: string;
    desc: string;
  }[];

  example: {
    code: string;
    language: string;
    compilerLink: {
      url: string;
      label: string;
    };
    tip: string[];
  };

  benefits: {
    title: string;
    desc: string;
  }[];

  recommended: {
    title: string;
    desc: string;
  }[];

  references: {
    label: string;
    url: string;
  }[];

  navigation: {
    previous: {
      label: string;
      href: string;
    };
    next: {
      label: string;
      href: string;
    };
  };

  // ==================== Tema Customizável ====================
  theme?: {
    cardBg?: string;          // fundo dos cards (usage, benefits, recommended)
    cardText?: string;        // cor do texto dentro dos cards
    linkColor?: string;       // cor dos links (ex: referências, compilerLink)
    recommendedBg?: string;   // fundo da seção "Para Quem é Recomendado"
    recommendedText?: string; // cor do texto da seção "Para Quem é Recomendado"
  };
}
