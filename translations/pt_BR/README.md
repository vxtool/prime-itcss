# Prime ITCSS

[![licence mit](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://hemersonvianna.mit-license.org/)
[![GitHub issues](https://img.shields.io/github/issues/vxtool/prime-itcss.svg)](https://github.com/vxtool/prime-itcss/issues)
![GitHub package.json version](https://img.shields.io/github/package-json/v/vxtool/prime-itcss.svg)
![GitHub Release Date](https://img.shields.io/github/release-date/vxtool/prime-itcss.svg)
![GitHub top language](https://img.shields.io/github/languages/top/vxtool/prime-itcss.svg)
![GitHub repo size](https://img.shields.io/github/repo-size/vxtool/prime-itcss.svg)
![GitHub All Releases](https://img.shields.io/github/downloads/vxtool/prime-itcss/total.svg)

## Traduções

* [ORIGINAL](https://github.com/vxtool/prime-itcss/)

## Introdução

Com a intenção de se ter um núcleo de CSS de vários projetos em um só lugar. Foi criado esse projeto para servir como base em um projeto front-end. Utilizando a metodologia do [ITCSS](http://itcss.io/) e a sintaxes [SCSS](http://sass-lang.com/), [STYLUS](https://learnboost.github.io/stylus/) e [LESS](http://lesscss.org/).

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

## Instalação

`$ npm install @vxtool/prime-itcss`

ou adicione este pacote no seu arquivo `package.json`:

```
"dependencies": {
    "@vxtool/prime-itcss": "1.1.3"
  }
```

E com as dependências instaladas, o comando `default` do automatizador.

## Uso

Em cada pasta de projeto, não será necessário ter algumas pastas (`00-settings, 01-tools, 03-generic, 03-base, 04-vendor e 09-trumps`), mas isso não é uma regra, você saberá o melhor para o seu projeto. 

Ao escrever, estou considerando que os projetos de exemplo (site, admin), são diferentes e por terem essa distinção, as pastas (`05-objetcs, 06-components, 07-pages e 08-theme`), serão personalizadas para cada projeto.

Lembrando mais uma vez, a intenção é mostrar o conceito de que é preciso se ter um `prime`, para evitar código repetido e que dificulte a manutenção. A organização das pastas nos projetos, fica ao critério da necessidade do mesmo.

`style.scss` (site)

```
@import "../prime/00-settings/_variables";
@import "../prime/01-tools/_mixins";

@import "05-objects/_alerts";

```

## Contribuindo

- Faça o fork!
- Crie a sua branch feature: `git checkout -b my-new-feature`
- Faça o commit das suas alterações: `git commit -m 'Add some feature'`
- Faça o push para o servidor: `git push origin my-new-feature`
- E realize o pull request

## Log

Verifique os [Releases](https://github.com/vxtool/prime-itcss/releases) ver detalhado o log de alterações.

## Licença

[MIT license](http://hemersonvianna.mit-license.org/) © Hemerson Vianna
