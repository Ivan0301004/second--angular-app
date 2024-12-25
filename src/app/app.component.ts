import { Component } from '@angular/core';
import { MainPageDbzComponent } from './dbz/pages/main-page.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainPageDbzComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'bases-angular';
}
