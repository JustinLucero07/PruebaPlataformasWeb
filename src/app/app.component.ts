import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareasComponentComponent } from './components/tareas-component/tareas-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TareasComponentComponent,HomeComponentComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo';
}
