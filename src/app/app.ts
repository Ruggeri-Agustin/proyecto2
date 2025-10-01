import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navegacion } from './componentes/navegacion/navegacion';
import { Aside } from './componentes/aside/aside';
import { Footer } from './componentes/footer/footer';
import { Main } from './componentes/main/main';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto');
}
