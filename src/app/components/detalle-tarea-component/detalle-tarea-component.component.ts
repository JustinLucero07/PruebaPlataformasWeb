import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalle-tarea-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detalle-tarea-component.component.html',
  styleUrl: './detalle-tarea-component.component.scss'
})
export class DetalleTareaComponentComponent {

  @Input() tarea:any
}
