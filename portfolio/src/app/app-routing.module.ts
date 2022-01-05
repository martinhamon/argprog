import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { CanaccesGuard } from './guards/canacces.guard';
const routes: Routes = [
  { path: 'portfolio',component: PortfolioComponent , canActivate: [CanaccesGuard]},
  { path: 'login',  component: LoginComponent  },
  { path: '',  component: LoginComponent, pathMatch: 'full'  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
