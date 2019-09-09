import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { PagesComponent, DashboardComponent, EntidadesComponent, NopagefoundComponent, ProfileComponent, SolicitudComponent, StatusComponent } from './pages.index';

// Modules
import { SharedModule } from '../shared/shared.module';

// Routes
import { PAGES_ROUTES } from './pages.routes';
import {  } from './entidades/entidades.component';

@NgModule({
    declarations: [PagesComponent, DashboardComponent, EntidadesComponent, NopagefoundComponent, ProfileComponent, SolicitudComponent, StatusComponent ],
    imports: [ CommonModule, SharedModule, PAGES_ROUTES ],
    exports: [ PagesComponent, DashboardComponent, EntidadesComponent, NopagefoundComponent, ProfileComponent, SolicitudComponent, StatusComponent ],
    providers: [],
})
export class PagesModule {}