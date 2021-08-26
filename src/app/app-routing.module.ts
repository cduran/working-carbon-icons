import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllIconsComponent } from './all-icons/all-icons.component';
import { HomeComponent } from './home/home.component';
import { IncludedIconsComponent } from './included-icons/included-icons.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'included-icons', component: IncludedIconsComponent },
  { path: 'all-icons', component: AllIconsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
