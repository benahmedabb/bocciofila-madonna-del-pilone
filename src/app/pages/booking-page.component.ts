import {
  afterNextRender,
  Component,
  computed,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { IconComponent } from '../shared/icon.component';
import { RESTAURANT } from '../core/restaurant.config';

function romeNow(): { date: string; time: string } {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Rome',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date());
  const part = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
  return {
    date: `${part('year')}-${part('month')}-${part('day')}`,
    time: `${part('hour')}:${part('minute')}`,
  };
}

@Component({
  selector: 'app-booking-page',
  imports: [RouterLink, IconComponent],
  templateUrl: './booking-page.component.html',
  styleUrl: './booking-page.component.scss',
})
export class BookingPageComponent {
  readonly restaurant = RESTAURANT;
  readonly ready = signal(false);
  readonly today = signal('');
  readonly date = signal('');
  readonly time = signal('');
  readonly guests = signal<number | null>(2);
  readonly name = signal('');
  readonly notes = signal('');
  readonly review = signal(false);
  readonly error = signal('');
  private readonly reviewPanel = viewChild<ElementRef<HTMLElement>>('reviewPanel');
  private readonly formHeading = viewChild<ElementRef<HTMLElement>>('formHeading');

  readonly formattedDate = computed(() => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(this.date())) return 'Scegli il giorno';
    const date = new Date(`${this.date()}T12:00:00Z`);
    return Number.isNaN(date.getTime())
      ? 'Scegli il giorno'
      : new Intl.DateTimeFormat('it-IT', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          timeZone: 'UTC',
        }).format(date);
  });
  readonly message = computed(() =>
    [
      ...(this.restaurant.bookingPreview ? ['PROVA SITO — NON È UNA PRENOTAZIONE REALE', ''] : []),
      'Ciao! Vorrei richiedere un tavolo alla Madonna del Pilone.',
      `Nome: ${this.name().trim()}`,
      `Giorno: ${this.formattedDate()}`,
      `Persone: ${this.guests()}`,
      `Orario desiderato: ${this.time()} (ora di Torino)`,
      ...(this.notes().trim() ? [`Note: ${this.notes().trim()}`] : []),
      '',
      'Attendo la vostra conferma di disponibilità. Grazie!',
    ].join('\n'),
  );
  readonly whatsappUrl = computed(
    () => `https://wa.me/${this.restaurant.whatsapp}?text=${encodeURIComponent(this.message())}`,
  );

  constructor() {
    inject(Meta).updateTag({
      name: 'description',
      content:
        'Scegli giorno, numero di persone e orario e prepara la tua richiesta di prenotazione alla Madonna del Pilone. Conferma direttamente con l’osteria su WhatsApp.',
    });
    afterNextRender(() => {
      this.refreshToday();
      this.ready.set(true);
    });
  }

  refreshToday(): void {
    this.today.set(romeNow().date);
  }
  value(event: Event): string {
    return (event.target as HTMLInputElement | HTMLTextAreaElement).value;
  }
  updateGuests(event: Event): void {
    const value = (event.target as HTMLInputElement).valueAsNumber;
    this.guests.set(Number.isFinite(value) ? value : null);
  }
  changeGuests(delta: number): void {
    this.guests.set(Math.max(1, Math.min(50, (this.guests() ?? 2) + delta)));
  }
  chooseDay(offset: number): void {
    this.refreshToday();
    const day = new Date(`${this.today()}T12:00:00Z`);
    day.setUTCDate(day.getUTCDate() + offset);
    this.date.set(day.toISOString().slice(0, 10));
  }

  private validateSelection(): boolean {
    const now = romeNow();
    this.today.set(now.date);
    if (this.date() < now.date || (this.date() === now.date && this.time() <= now.time)) {
      this.error.set(
        'Questo orario è già passato. Scegli un giorno e un orario futuri (ora di Torino).',
      );
      return false;
    }
    if (!this.name().trim()) {
      this.error.set('Inserisci il nome con cui vuoi richiedere il tavolo.');
      return false;
    }
    const guests = this.guests();
    if (guests === null || !Number.isInteger(guests) || guests < 1 || guests > 50) {
      this.error.set(
        'Indica un numero di persone tra 1 e 50. Per gruppi più numerosi, contatta l’osteria.',
      );
      return false;
    }
    this.error.set('');
    return true;
  }

  prepare(event: Event, form: HTMLFormElement): void {
    event.preventDefault();
    if (!form.reportValidity() || !this.validateSelection()) return;
    this.review.set(true);
    // Wait for Angular to display the review before focusing its heading.
    setTimeout(() => this.reviewPanel()?.nativeElement.focus(), 0);
  }

  edit(): void {
    this.review.set(false);
    setTimeout(() => this.formHeading()?.nativeElement.focus(), 0);
  }

  openWhatsapp(event: MouseEvent): void {
    // The guest may have left the review open for hours. Validate again at handoff.
    if (!this.validateSelection()) {
      event.preventDefault();
      this.edit();
    }
    // Opening WhatsApp never marks a request as sent or a table as confirmed.
  }
}
