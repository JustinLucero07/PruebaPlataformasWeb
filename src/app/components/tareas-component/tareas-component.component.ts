import { Component, OnInit } from '@angular/core';
import { TareaServiceService } from '../../services/tarea-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetalleTareaComponentComponent } from '../detalle-tarea-component/detalle-tarea-component.component';

@Component({
  selector: 'app-tareas-component',
  standalone: true,
  imports: [CommonModule,FormsModule,DetalleTareaComponentComponent],
  templateUrl: './tareas-component.component.html',
  styleUrl: './tareas-component.component.scss'
})
export class TareasComponentComponent implements OnInit {

  nombre = ''
  docente = ''
  descripcion = ''
  tareaSeleccionada: any = null
    
  tareas:any = []
  ngOnInit(): void {
    this.cargarTareas(); 

  }
  constructor(private tareaS: TareaServiceService) { }

  cargarTareas() {
    this.tareas = this.tareaS.listarTareas();
  }

  agregar(){
    this.tareaS.agregar(this.nombre,this.docente,this.descripcion)
    this.cargarTareas(); 
    this.nombre = ''; 
    this.docente = ''; 
    this.descripcion = ''; 
  }

  eliminar(tarea: any) {
    this.tareaS.eliminar(tarea); 
    this.cargarTareas(); 
  }

  mostrarDetalles(tarea: any) {
    this.tareaSeleccionada = this.tareaS.mostrarDetalles(tarea); 
  }

  ocultarDetalles() {
    this.tareaSeleccionada = null; 
  }
  
}
