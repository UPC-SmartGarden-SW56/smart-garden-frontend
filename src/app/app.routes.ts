import { Routes } from '@angular/router';
import { AgregadoComponent } from './public/pages/agregado/agregado.component';
import { DetallesCursoComponent } from './public/pages/detalles-curso/detalles-curso.component';
import { DescriptionCourseComponent } from './description-course/description-course.component';
export const routes: Routes = [
    
    { path: 'agregado', component: AgregadoComponent },
    { path: 'detalles', component: DetallesCursoComponent },
    { path: 'description', component: DescriptionCourseComponent }

];
