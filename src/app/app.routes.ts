import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from '../app/pages/nopagefound/nopagefound.component';
import { PrincipalComponent } from './principal/principal.component';



const appRoutes: Routes = [

    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    { path: 'principal', component: PrincipalComponent },
    { path: '**', component: NopagefoundComponent },

];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});