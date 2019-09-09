import { Routes, RouterModule} from '@angular/router';
import { DashboardComponent, EntidadesComponent, PagesComponent, ProfileComponent, SolicitudComponent, StatusComponent } from './pages.index';

const pagesRoutes: Routes = [

    {
        path: "",
        component: PagesComponent,
        children: [
            { path:"dashboard", component: DashboardComponent, data:{titulo: "Dashboard"}},
            { path:"solicitud", component: SolicitudComponent, data:{titulo: "Solicitud"}},
            { path:"estado", component: StatusComponent, data:{titulo: "Seguimiento"}},
            { path:"entidades", component: EntidadesComponent, data:{titulo: "Entidades"}},
            { path:"profile", component: ProfileComponent, data:{titulo: "Perfil"}},
            { path: "", redirectTo: "/dashboard", pathMatch: "full" }
        ]
    },

];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);