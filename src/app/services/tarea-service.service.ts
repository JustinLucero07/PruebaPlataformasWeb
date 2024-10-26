import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareaServiceService {

  tareas: any = []
  

  constructor() { 
    
  }

  agregar(nombre: string, docente: string, descripcion: string) {

    this.tareas.push({ nombre, docente, descripcion })
    localStorage.setItem('tareas', JSON.stringify(this.tareas))
  }

  eliminar(tarea: any) {
    const index = this.tareas.indexOf(tarea); 
    if (index > -1) { 
        this.tareas.splice(index, 1); 
    }
    localStorage.setItem('tareas', JSON.stringify(this.tareas)); 
}


  listarTareas() {
    return this.tareas
  }

  mostrarDetalles(tarea: any) {
    let tareaEncontrada = null; 
  
    for (let i = 0; i < this.tareas.length; i++) {
      if (this.tareas[i].nombre === tarea.nombre) {
        tareaEncontrada = this.tareas[i];
        break; 
      }
    }
  
    if (tareaEncontrada) {
      return tareaEncontrada; 
    } else {
      throw new Error('Tarea no encontrada'); 
    }
  } 

}
