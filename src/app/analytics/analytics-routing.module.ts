import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from 'app/analytics/analytics.component';

const routes: Routes = [{ path: '', redirectTo: '/analytics', pathMatch: 'full' }, { path: 'analytics', component: AnalyticsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AnalyticsRoutingModule { }
