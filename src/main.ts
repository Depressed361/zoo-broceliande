import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CarouselModule } from '@coreui/angular';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


  providers: [
    provideAnimations(),
    CarouselModule,
  ]
