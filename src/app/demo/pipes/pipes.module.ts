import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SlidesRoutes} from '../../presentation/slide-routes';

import {ExerciseModule} from '../../exercise/exercise.module';
import {PresentationModule} from '../../presentation/presentation.module';
import {FeedbackModule} from '../../feedback/feedback.module';
import {BrowserWindowModule} from '../../browser-window/browser-window.module';
import {TrackingModule} from '../../tracking/tracking.module';
import {PipesComponent} from './pipes.component';


const routes = RouterModule.forChild(
  SlidesRoutes.get(PipesComponent)
);

@NgModule({
  imports: [routes, PresentationModule, ExerciseModule, BrowserWindowModule, FeedbackModule, TrackingModule],
  declarations: [PipesComponent],
  exports: [PipesComponent]
})
export class PipesModule {

}