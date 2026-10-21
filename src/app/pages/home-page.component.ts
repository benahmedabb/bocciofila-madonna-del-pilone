import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { IconComponent } from '../shared/icon.component';
import { RESTAURANT } from '../core/restaurant.config';
import { ChefSectionComponent } from './chef-section.component';

interface Photo {
  src: string;
  srcset?: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  description: string;
  label: string;
  featured?: boolean;
  detail?: { src: string; alt: string };
}

interface Course {
  id: string;
  title: string;
  intro: string;
  dishes: Photo[];
}

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, IconComponent, ChefSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  readonly restaurant = RESTAURANT;
  readonly selectedPhoto = signal<Photo | null>(null);
  readonly courses: Course[] = [
    {
      id: 'antipasti',
      title: 'Il piacere comincia dal primo assaggio.',
      intro:
        'Dal vitello tonnato al roast beef, fino ai colori delle verdure. Piccoli piaceri per aprire l’appetito e mettersi comodi.',
      dishes: [
        {
          src: 'vitello-tonnato.webp',
          width: 1402,
          height: 1122,
          alt: 'Fette sottili di vitello con salsa tonnata al centro e frutti di cappero',
          caption: 'Vitello tonnato',
          description:
            'Fette sottili, salsa tonnata e il tocco dei capperi. Un incontro di sapori che racconta la tavola piemontese.',
          label: 'Un inizio tutto piemontese',
          featured: true,
        },
        {
          src: 'caponata.webp',
          width: 1122,
          height: 1402,
          alt: 'Caponata di verdure a dadini, servita con due foglie verdi su un piatto bianco',
          caption: 'Caponata di verdure',
          description:
            'Verdure, colori e una nota agrodolce. Un assaggio dal carattere mediterraneo, da accompagnare con un pezzo di pane.',
          label: 'Colore e carattere',
        },
        {
          src: 'Carpaccio di roast beef con microgreens.webp',
          width: 1086,
          height: 1448,
          alt: 'Fette sottili di roast beef disposte a raggiera, con condimento e foglioline verdi al centro',
          caption: 'Roast beef con germogli',
          description:
            'Fette sottili di roast beef, un filo di condimento e un tocco verde. Un antipasto dal gusto delicato, che lascia spazio al piacere del prossimo assaggio.',
          label: 'La bontà, senza fronzoli',
        },
      ],
    },
    {
      id: 'primi',
      title: 'Un buon primo, e il tempo si ferma.',
      intro:
        'Il sugo, la pasta ripiena, l’ultima forchettata. Piccoli piaceri da prendersi con calma.',
      dishes: [
        {
          src: 'Tagliatelle ai funghi e prezzemolo.webp',
          width: 1122,
          height: 1402,
          alt: 'Tagliatelle con funghi a pezzi e prezzemolo tritato su un piatto bianco',
          caption: 'Tagliatelle ai funghi',
          description:
            'Nastri di pasta che raccolgono il sapore dei funghi, con un tocco di prezzemolo. Un piatto avvolgente, da gustare una forchettata alla volta.',
          label: 'Il profumo delle cose buone',
          featured: true,
        },
        {
          src: 'ravioli-1200.webp',
          srcset:
            '/images/ristorante/ravioli-640.webp 640w, /images/ristorante/ravioli-1200.webp 1200w',
          width: 1200,
          height: 882,
          alt: 'Ravioli al sugo con una spolverata di formaggio su un piatto bianco',
          caption: 'Ravioli al sugo',
          description: 'Pasta ripiena, un sugo che avvolge e il piacere di un grande classico.',
          label: 'Il gusto della tradizione',
        },
        {
          src: 'Ravioli cremosi al pepe nero.webp',
          width: 1086,
          height: 1448,
          alt: 'Ravioli avvolti in una salsa cremosa con pepe nero',
          caption: 'Ravioli cremosi al pepe nero',
          description:
            'Una crema avvolgente incontra il carattere del pepe nero. Da assaporare fino all’ultimo raviolo.',
          label: 'Morbidezza e carattere',
        },
        {
          src: 'penne-al-ragu.webp',
          width: 1448,
          height: 1086,
          alt: 'Penne al ragù in un piatto bianco su una tovaglia rossa',
          caption: 'Penne al ragù',
          description:
            'Un piatto generoso, un sugo saporito. La voglia di fare la scarpetta viene da sé.',
          label: 'Sapore di casa',
        },
        {
          src: 'Spaghetti cremosi con noci tostate.webp',
          width: 1122,
          height: 1402,
          alt: 'Spaghetti con salsa cremosa e noci tostate spezzettate',
          caption: 'Spaghetti cremosi alle noci',
          description:
            'La cremosità della salsa, la nota croccante delle noci tostate. Una forchettata tira l’altra.',
          label: 'Il bello dei contrasti',
        },
      ],
    },
    {
      id: 'secondi',
      title: 'Il piacere delle cose sostanziose.',
      intro: 'I sapori della tavola d’osteria, quelli che invitano a fermarsi ancora un po’.',
      dishes: [
        {
          src: 'carne-patate-1200.webp',
          srcset:
            '/images/ristorante/carne-patate-640.webp 640w, /images/ristorante/carne-patate-1200.webp 1200w',
          width: 1200,
          height: 900,
          alt: 'Fette di carne con il loro fondo di cottura e un contorno di patate',
          caption: 'Carne con patate',
          description:
            'La carne, il suo fondo di cottura e le patate a fare compagnia. La semplicità di un piatto che sa di pranzo della domenica.',
          label: 'Un classico d’osteria',
        },
        {
          src: 'Cotoletta croccante con zucchine e uova.webp',
          width: 1086,
          height: 1448,
          alt: 'Cotoletta dalla panatura dorata con zucchine, uova sode tagliate a metà e insalata',
          caption: 'Cotoletta con zucchine e uova',
          description:
            'La panatura dorata e croccante, le zucchine e le uova sode. Un piatto generoso, con tutto il piacere di un pranzo in osteria.',
          label: 'Croccantezza e buonumore',
        },
      ],
    },
    {
      id: 'dolci',
      title: 'Per il dolce, un posto c’è sempre.',
      intro:
        'Dal bonet piemontese alla freschezza della frutta. Il modo più buono di restare a tavola.',
      dishes: [
        {
          src: 'bonet-ia.webp',
          width: 1448,
          height: 1086,
          alt: 'Fette di bonet con caramello e amaretti sbriciolati',
          caption: 'Bonet piemontese',
          description:
            'Il dolce che racconta il Piemonte: cacao, amaretti e caramello. Un ultimo assaggio di tradizione, da gustare senza fretta.',
          label: 'Il Piemonte, fino all’ultimo cucchiaio',
          detail: {
            src: 'bonet-ia-2.webp',
            alt: 'Un’altra porzione di bonet piemontese con caramello e granella di amaretti',
          },
        },
        {
          src: 'tiramisu-artigianale.webp',
          width: 1448,
          height: 1086,
          alt: 'Tiramisù in vasetti di vetro con coperchi a quadretti bianchi e rossi',
          caption: 'Tiramisù in vasetto',
          description:
            'Un piccolo vasetto, tutto il piacere del tiramisù. Il finale da tenersi vicino, cucchiaino dopo cucchiaino.',
          label: 'Una dolce pausa',
        },
        {
          src: 'Torta ai frutti di bosco e menta.webp',
          width: 1448,
          height: 1086,
          alt: 'Torta ricoperta di lamponi, more, mirtilli e foglie di menta',
          caption: 'Torta ai frutti di bosco',
          description:
            'Lamponi, more e mirtilli, con un tocco di menta. Colori e dolcezza da condividere, una fetta alla volta.',
          label: 'Una fetta da condividere',
        },
        {
          src: 'Coppette di frutta con menta e agrumi.webp',
          width: 1086,
          height: 1448,
          alt: 'Coppette di fragole con spicchi di agrumi e foglie di menta su vassoi',
          caption: 'Coppette di frutta, menta e agrumi',
          description:
            'Il colore delle fragole, il profumo degli agrumi e la freschezza della menta. Per chi ama finire con leggerezza.',
          label: 'Un finale fresco',
        },
      ],
    },
  ];
  private readonly viewer = viewChild<ElementRef<HTMLDialogElement>>('viewer');

  constructor() {
    inject(Meta).updateTag({
      name: 'description',
      content:
        'La cucina piemontese, il piacere di stare insieme e un circolo che vive dal 1922. Scopri Madonna del Pilone a Torino e richiedi il tuo tavolo.',
    });
  }

  openPhoto(photo: Photo): void {
    this.selectedPhoto.set(photo);
    this.viewer()?.nativeElement.showModal();
  }

  openDetail(photo: Photo): void {
    if (photo.detail) {
      this.openPhoto({ ...photo, ...photo.detail, srcset: undefined });
    }
  }

  closePhoto(): void {
    this.viewer()?.nativeElement.close();
  }
  onBackdrop(event: MouseEvent): void {
    if (event.target === this.viewer()?.nativeElement) this.closePhoto();
  }
}
