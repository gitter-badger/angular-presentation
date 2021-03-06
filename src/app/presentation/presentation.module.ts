import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PresentationComponent} from './presentation/presentation.component';
import {SlideComponent} from './slide/slide.component';
import {FooterComponent} from './footer/footer.component';
import {ResizeDirective} from './resize/resize.directive';
import {ShortcutsDirective} from './shortcuts/shortcuts.directive';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {SlidesRoutingDirective} from './slides-routing/slides-routing.directive';
import {ArrowsComponent} from './arrows/arrows.component';
import {MenuShortcutComponent} from './menu-shortcut/menu-shortcut.component';
import {TitleSlideComponent} from './title-slide/title-slide.component';
import { RippleAnimationComponent } from './ripple-animation/ripple-animation.component';
import { ModeOverviewComponent } from 'app/presentation/mode-overview/mode-overview.component';
import { ModeRoutingDirective } from 'app/presentation/mode-routing/mode-routing.directive';
import { ClosingSlideComponent } from './closing-slide/closing-slide.component';


@NgModule({
  declarations: [
    PresentationComponent,
    SlideComponent,
    FooterComponent,
    ResizeDirective,
    ShortcutsDirective,
    ProgressBarComponent,
    SlidesRoutingDirective,
    ArrowsComponent,
    MenuShortcutComponent,
    TitleSlideComponent,
    RippleAnimationComponent,
    ModeOverviewComponent,
    ModeRoutingDirective,
    ClosingSlideComponent
  ],

  exports: [
    PresentationComponent,
    SlideComponent,
    FooterComponent,
    ProgressBarComponent,
    ArrowsComponent,
    SlidesRoutingDirective,
    TitleSlideComponent,
    ModeOverviewComponent,
    MenuShortcutComponent,
    ModeRoutingDirective,
    ClosingSlideComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class PresentationModule {

}
