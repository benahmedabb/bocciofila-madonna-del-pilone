import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  imports: [RouterLink],
  template:
    '<section class="wrap py-24 text-center"><p class="eyebrow mb-8">404 · UN PICCOLO FUORI MENÙ</p><h1>Qui non c’è<br /><em>un tavolo.</em></h1><p class="my-8">La pagina che cerchi non esiste. Ti accompagniamo all’ingresso?</p><a class="button" routerLink="/">Torna alla home</a></section>',
})
export class NotFoundPageComponent {}
