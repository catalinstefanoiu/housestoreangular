import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    
    {
        path: '',
        component: HomeComponent,
        title: 'HomePage'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Detailis Page'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About Page'
    }
        
];