import { Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { TareasComponentComponent } from './components/tareas-component/tareas-component.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'components/tareas',
        component: TareasComponentComponent
    },
    {
        path: 'home-component',
        component: HomeComponentComponent
    }

];
