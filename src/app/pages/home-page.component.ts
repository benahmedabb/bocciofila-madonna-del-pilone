import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { IconComponent } from '../shared/icon.component';
import { RESTAURANT } from '../core/restaurant.config';

interface Photo {
  src: string;
  alt: string;
  caption: string;
}

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, IconComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  readonly restaurant = RESTAURANT;
  readonly selectedPhoto = signal<Photo | null>(null);
  readonly dishes: Photo[] = [
    {
      src: 'ravioli',
      alt: 'Ravioli al sugo su un piatto bianco dell’osteria, fotografia rielaborata',
      caption: 'I sapori che ci somigliano.',
    },
    {
      src: 'carne-patate',
      alt: 'Piatto di carne con patate dell’osteria, fotografia rielaborata',
      caption: 'La semplicità, fatta bene.',
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

  closePhoto(): void {
    this.viewer()?.nativeElement.close();
  }
  onBackdrop(event: MouseEvent): void {
    if (event.target === this.viewer()?.nativeElement) this.closePhoto();
  }
}
