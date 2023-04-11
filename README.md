# Teste para Homologação
### Nestjs + Vue

## Dependencies: 
- nodejs && (yarn || npm|| pnpm) && bootstrap

## Como testar?
- Clonar repositorio
- instalar as dependencias com Yarn, NPM, PNPM

```ssh 
$ yarn # ou npm install
$ yarn start:dev # ou npm run start:dev
```
* Acessar: http://localhost:3000

## Caveats
- API Key está publicamente no .env
- Por ser um teste, o .env não está no .gitignore
- Existe um filtro para alterar a exibição das colunas
- Usei Handlebars (.hbs) para renderizar o html, mas poderia ser outros (e.g. Jade/PUG)
- Usei Vuejs clientside/dev
- Tentei ser o mais simples possível

