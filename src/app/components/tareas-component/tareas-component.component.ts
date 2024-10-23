import { Component, OnInit } from '@angular/core';
import { TareaServiceService } from '../../services/tarea-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tareas-component',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './tareas-component.component.html',
  styleUrl: './tareas-component.component.scss'
})
export class TareasComponentComponent implements OnInit {

  nombre = ''
  docente = ''
  descripcion = ''
  
  tareas:any = []
  ngOnInit(): void {
    this.tareaS.listarTareas() 

  }
  constructor(private tareaS: TareaServiceService) { }

  agregar(){
    this.tareaS.agregar(this.nombre,this.docente,this.descripcion)
  }
}
