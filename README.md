# Angular 6 Download/Upload de Arquivos
 
Gerado com [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Development server

## Install/Update de dependencias

Run `npm install` 

## Build

Run `npm start` ou `ng build` 


Para desenvolvimento `http://localhost:4200/`. a aplicação carregarar normalmente

## Running unit tests

Run `ng test` para unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## BUILD IMAGE Docker
docker build --rm -f "Dockerfile" -t edivaldo100/angular6uploadfileclient:1.0.0 .

## RUN Container Docker
docker run -it -p 4200:80 --name angular6upload edivaldo100/angular6uploadfileclient:1.0.0

