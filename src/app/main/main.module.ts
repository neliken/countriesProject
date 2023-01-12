import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/presentational/header/header.component';
import { MainPageComponent } from './components/containers/main-page/main-page.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import { ModeSwitcherComponent } from './components/containers/mode-switcher/mode-switcher.component';
import { TextContainerComponent } from './components/presentational/text-container/text-container.component';
import { LightModeIconComponent } from './components/presentational/light-mode-icon/light-mode-icon.component';
import { DarkModeIconComponent } from './components/presentational/dark-mode-icon/dark-mode-icon.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainPageComponent,
    ModeSwitcherComponent,
    TextContainerComponent,
    LightModeIconComponent,
    DarkModeIconComponent
  ],
  exports: [
    MainPageComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
