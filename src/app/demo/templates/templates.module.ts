import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';
import {SlidesRoutes} from '../../presentation/slide-routes';
import {TemplatesComponent} from './templates.component';
import {ExerciseModule} from '../../exercise/exercise.module';
import {PresentationModule} from '../../presentation/presentation.module';
import {FeedbackModule} from '../../feedback/feedback.module';
import {BrowserWindowModule} from '../../browser-window/browser-window.module';
import {TrackingModule} from '../../tracking/tracking.module';

const routes = RouterModule.forChild(
  SlidesRoutes.get(TemplatesComponent)
);

@NgModule({
  imports: [routes, PresentationModule, ExerciseModule, FeedbackModule, BrowserWindowModule, TrackingModule],
  declarations: [TemplatesComponent],
  exports: [TemplatesComponent]
})
export class TemplatesModule {

}
