import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { MensajesComponent } from './components/pages/mensajes/mensajes.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'mensaje', component: MensajesComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
