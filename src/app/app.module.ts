import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeOnboardingComponent } from './employee-onboarding/employee-onboarding.component';
import { PersonalDetailsComponent } from './employee-onboarding/personal-details/personal-details.component';
import { DocumentDetailsComponent } from './employee-onboarding/document-details/document-details.component';
import { PreviewComponent } from './employee-onboarding/preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeOnboardingComponent,
    PersonalDetailsComponent,
    DocumentDetailsComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
