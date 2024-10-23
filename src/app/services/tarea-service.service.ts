import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareaServiceService {

  tareas: any = []

  constructor() { }

  agregar(nombre: string, docente: string, descripcion: string) {

    this.tareas.push({ nombre, docente, descripcion })
    localStorage.setItem('tareas', JSON.stringify(this.tareas))
  }

  /*eliminar(tarea:any){
    this.tareas = this.tareas.find(tarea => this.tareas.descripcion)
  }*/

  listarTareas() {
    return this.tareas
  }

  mostrarD(){
  }
  
}
