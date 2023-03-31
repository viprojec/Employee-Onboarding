import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentDetailsComponent } from './employee-onboarding/document-details/document-details.component';
import { EmployeeOnboardingComponent } from './employee-onboarding/employee-onboarding.component';
import { PersonalDetailsComponent } from './employee-onboarding/personal-details/personal-details.component';
import { PreviewComponent } from './employee-onboarding/preview/preview.component';

const routes: Routes = [
  {path: 'employee-onboarding', component : EmployeeOnboardingComponent ,
      children:[
        {path:'' , redirectTo :'personal-detail',pathMatch: 'full'},
        {path:'personal-detail',component:PersonalDetailsComponent},
        {path:'document-details', component: DocumentDetailsComponent},
        {path:'preview', component: PreviewComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
