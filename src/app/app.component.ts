import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareasComponentComponent } from './components/tareas-component/tareas-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TareasComponentComponent,HomeComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo';
}
