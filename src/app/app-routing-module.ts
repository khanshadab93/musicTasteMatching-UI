import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Register } from './register/register'
import { Matches } from './matches/matches'
import { Preferences } from './preferences/preferences'

const routes: Routes = [
  { path:'register', component: Register },
  { path:'preferences', component: Preferences },
  { path:'matches', component: Matches },
  { path:'**', redirectTo: 'register' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
