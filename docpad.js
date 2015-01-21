module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Meetup PythonRio",
      description: "Conference description",
      date: "31 de janeiro",
      // If your event is free, just comment this line
      // price: "$100",
      venue: "Nitis Office",
      address: "Praça Mahatma Gandhi, 2 (sala 882) - Centro",
      city: "Rio de Janeiro",
      state: "RJ"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Registre-se",
        link: "http://www.eventick.com.br/meetup-python-rio"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    // forkButton: {
    //     repository: "https://github.com/braziljs/conf-boilerplate"
    // },

    // Site info
    site: {
      theme: "blue-is-the-warmest-color",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      // 'schedule',
      // 'sponsors',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Localização",
      speakers: "Convidados",
      schedule: "Schedule",
      sponsors: "Patrocinadores",
      partners: "Parceiros",
      contact: "Contact"
    },

    // The entire schedule
    schedule: [
      // {
      //   name: "Check-in / Breakfast",
      //   time: "9h00"
      // },
      {
        name: "André Fonseca",
        photo: "themes/blue-is-the-warmest-color/custom/aoqfonseca.png",
        bio: "Desenvolvedor com mais de 10 anos de experiência e apaixonado pelo que faz. Acredito que TI é um caminho para facilitar e permitir mais. Tecnologia é o meio e não fim. Por isso procuro a melhor ferramenta para o trabalho. Embora tenha predileção por mais produtivas. Ruby, Java, Python, Javascript, Groovy, etc.",
        // company: "Linux Foundation",
        link: {
          href: "https://github.com/aoqfonseca",
          text: "@aoqfonseca"
        },
        presentation: {
          title: "Escrevendo API's em Python",
          description: "Muito se fala sobre a arquitetura orientada a serviços, onde temos pequenos sistemas distribuídos com responsabilidades únicas. Tudo isso é muito legal, mas gerar um desafio de fazer as APIs. Python é um grande opção e ferramenta para ajuda o desenvolvedor pois é uma linguagem produtiva c/ frameworks que tornam a tarefa simples. A idéia da palestra é mostrar esses frameworks, principios, etc.",
          // time: "10h00"
        }
      },
      {
        name: "Hugo Leonardo",
        photo: "themes/blue-is-the-warmest-color/custom/hugoleodev.jpg",
        bio: "Desenvolvedor de software com experiência em soluções Web e integrações entre sistemas. Além de grande interesse em ferramentas de provisionamento de servidores como Chef, Puppet e Ansible.",
        // company: "Microsoft",
        link: {
          href: "https://github.com/hugoleodev",
          text: "@hugoleodev"
        },
        presentation: {
          title: "Deploy de aplicações Django com Ansible",
          description: "Ansible é uma ferramenta de gerenciamento de configuração baseada em python que ajuda a automatizar e repetir processos de deployments. Nessa talk estaremos mostrando formas existentes de configurar o ambiente de deploy de forma automatizada, escrever seus ansible playbooks e compartilhar as melhores práticas para a implantação de aplicatições Django.",
          // time: "11h00"
        }
      },
      // {
      //   name: "Lunch",
      //   time: "12h00"
      // },
      // {
      //   name: "Chuck Norris",
      //   photo: "themes/yellow-swan/img/speaker.jpg",
      //   bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //   company: "Delta Command",
      //   link: {
      //     href: "http://twitter.com/littlechuck",
      //     text: "@littlechuck"
      //   },
      //   presentation: {
      //     title: "How to kill a elephant with one finger",
      //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //     time: "13h00"
      //   }
      // },
      // {
      //   name: "Steve Jobs",
      //   photo: "themes/yellow-swan/img/speaker.jpg",
      //   bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //   company: "Apple, Inc.",
      //   link: {
      //     href: "http://github.com/stevie",
      //     text: "@stevie"
      //   },
      //   presentation: {
      //     title: "Presenting iPad",
      //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //     time: "14h00"
      //   }
      // },
      // {
      //   name: "Coffee-break",
      //   time: "15h00"
      // },
      // {
      //   name: "Mark Zuckerberg",
      //   photo: "themes/yellow-swan/img/speaker.jpg",
      //   bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //   company: "Facebook",
      //   link: {
      //     href: "http://twitter.com/zuck",
      //     text: "@zuck"
      //   },
      //   presentation: {
      //     title: "Revealing Facebook Secrets",
      //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //     time: "16h00"
      //   }
      // },
      // {
      //   name: "Steve Wozniak",
      //   photo: "themes/yellow-swan/img/speaker.jpg",
      //   bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //   company: "Apple, Inc.",
      //   link: {
      //     href: "http://twitter.com/woz",
      //     text: "@woz"
      //   },
      //   presentation: {
      //     title: "Why do I prefer Android over iPhone",
      //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //     time: "17h00"
      //   }
      // }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Eventick",
        logo: "themes/yellow-swan/img/sponsor.png",
        url: "http://eventick.com.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "Nitis Office",
        logo: "themes/blue-is-the-warmest-color/custom/nitis_logo.png",
        url: "http://www.nitisoffice.com.br/"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};