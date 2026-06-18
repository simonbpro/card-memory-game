import { Routes } from '@angular/router';
// Task 1: Import the Home and the Setup Components in the file.
import { Home } from './pages/home/home';
import { Setup } from './game/setup/setup';

//Define routes and specify path for the home and Setup components.
export const routes: Routes = [
    // Task 1: Add your solution here
    { path: '', component: Home },
    { path: 'play', component: Setup }

];
