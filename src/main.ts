import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { CardService } from './app/core/services/card.service';
// Provide routes with provideRouter() (use withHashLocation() for sandboxes).
import { provideRouter, withHashLocation } from '@angular/router'
import { routes } from './app/app.routes';


bootstrapApplication(App,
  {
    providers: [
      CardService,
      provideRouter(routes, withHashLocation())
    ],
    
  },
)
  .catch((err) => console.error(err));
