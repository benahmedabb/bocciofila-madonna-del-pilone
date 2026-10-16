import { Component, ElementRef, inject, PLATFORM_ID, signal, viewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IconComponent } from './shared/icon.component';
import { RESTAURANT } from './core/restaurant.config';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, IconComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly restaurant = RESTAURANT;
  readonly menuOpen = signal(false);
  readonly bookingPage = signal(false);
  private readonly router = inject(Router);
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly content = viewChild<ElementRef<HTMLElement>>('content');
  private firstNavigation = true;

  skipToContent(event: MouseEvent): void {
    event.preventDefault();
    this.content()?.nativeElement.focus();
  }

  constructor() {
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
      if (!(event instanceof NavigationEnd)) return;
      this.menuOpen.set(false);
      this.bookingPage.set(event.urlAfterRedirects.split(/[?#]/)[0] === '/prenotazioni');
      if (this.browser && !this.firstNavigation && !event.urlAfterRedirects.includes('#')) {
        this.content()?.nativeElement.focus({ preventScroll: true });
      }
      this.firstNavigation = false;
    });
  }
}
