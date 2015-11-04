# Prime ITCSS SCSS 

[![NPM version][npm-image]][npm-url] [![Dependency Status][depstat-image]][depstat-url]

Com a intenção de se ter um núcleo de CSS de vários projetos em um só lugar. Foi criado esse projeto para servir como base em um projeto front-end. Utilizando a metodologia do [ITCSS](http://itcss.io/) e a sintaxe do [SCSS](http://sass-lang.com/).

A ideia de se utilizar o núcleo, se dá quando é necessário ter mais de um projeto no mesmo domínio. Digamos que no seu domínio, terá que haver os arquivos para o site e uma área de admin. Assim, a estrutura com o núcleo ficaria como no exemplo, abaixo:

```
>source
 > prime
 > admin
  > style.scss 
 > site
  > style.scss 
```

Com isso, no `prime` ficaram as ferramentas que serão utilizados em ambos os projetos (ícones, mixins, functions e etc). 

Em cada pasta de projeto, não será necessário ter algumas pastas (***00-settings, 01-tools, 03-generic, 03-base, 04-vendor e 09-trumps***), mas isso não é uma regra, você saberá o melhor para o seu projeto. 

Ao escrever, estou considerando que os projetos de exemplo (site, admin), são diferentes e por terem essa distinção, as pastas (***05-objetcs, 06-components, 07-pages e 08-theme***), serão personalizadas para cada projeto.

Lembrando mais uma vez, a intenção é mostrar o conceito de que é preciso se ter um `prime`, para evitar código repetido e que dificulte a manutenção. A organização das pastas nos projetos, fica ao critério da necessidade do mesmo.

## Exemplo de uso

***style.scss*** (site)
```
@import "../prime/00-settings/_variables";
@import "../prime/01-tools/_mixins";

@import "05-objects/_alerts";

```

## License

The code is available under the [MIT license](LICENSE).

[![NPM downloads][npm-downloads]][npm-url]