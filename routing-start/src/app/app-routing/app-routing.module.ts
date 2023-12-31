import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { UsersComponent } from '../users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { EditServerComponent } from '../servers/edit-server/edit-server.component';
import { ServerComponent } from '../servers/server/server.component';
import { ServersComponent } from '../servers/servers.component';
import { UserComponent } from '../users/user/user.component';
import { AuthGuard } from '../auth-guard.service';


const appRoutes : Routes = [
  {path:'', component: HomeComponent},
  {path:'users', component: UsersComponent, children:[
    {path:':anyId/:anyName', component: UserComponent},
  ]},

  {path:'servers', canActivate:[AuthGuard] , component: ServersComponent, children:[
    {path:':id', component: ServerComponent},
    {path:':id/edit-server', component: EditServerComponent},
  ]},
  {path:'not-found', component:PageNotFoundComponent},
  {path:'**', redirectTo: '/not-found'}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
