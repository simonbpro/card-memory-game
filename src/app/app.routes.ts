import { Routes } from '@angular/router';
// Home and Setup Components 
import { Home } from './pages/home/home';
import { Setup } from './game/setup/setup';

//Define routes and specify path for the home and Setup components.
export const routes: Routes = [
    // Default route
    { path: '', component: Home },
    { path: 'play', component: Setup }

];
