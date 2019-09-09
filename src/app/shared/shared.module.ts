import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// Components
import {
  BreadcrumsComponent,
  FooterComponent,
  HearderComponent,
  SidebarComponent
} from "./shared.index";

@NgModule({
  declarations: [
    BreadcrumsComponent,
    FooterComponent,
    HearderComponent,
    SidebarComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    BreadcrumsComponent,
    FooterComponent,
    HearderComponent,
    SidebarComponent
  ],
  providers: []
})
export class SharedModule {}
