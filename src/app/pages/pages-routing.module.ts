import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AcademicsComponent } from './academics/academics.component';
import { AdmissionComponent } from './admission/admission.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { OurFacultyComponent } from './our-faculty/our-faculty.component';
import { PagesComponent } from './pages.component';
import { MethodologyComponent } from './methodology/methodology.component';
import { MontessoriComponent } from './montessori/montessori.component';
import { PrimarySectionComponent } from './primary-section/primary-section.component';
import { SecondarySectionComponent } from './secondary-section/secondary-section.component';
import { SeniorPrimarySectionComponent } from './senior-primary-section/senior-primary-section.component';
import { SeniorSecondarySectionComponent } from './senior-secondary-section/senior-secondary-section.component';
import { MpdComponent } from './mpd/mpd.component';
import { AdministrativeStaffComponent } from './administrative-staff/administrative-staff.component';
import { TeachingStaffComponent } from './teaching-staff/teaching-staff.component';
import { NonTeachingStaffComponent } from './non-teaching-staff/non-teaching-staff.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { StreamsComponent } from './streams/streams.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutUsComponent,
      },
      {
        path: 'academics',
        component: AcademicsComponent,
      },
      {
        path: 'admissions',
        component: AdmissionComponent,
      },
      {
        path: 'our-faculty',
        component: OurFacultyComponent,
      },
      {
        path: 'infrastructures',
        component: InfrastructureComponent,
      },
      {
        path: 'blogs',
        component: BlogsComponent,
      },
      {
        path: 'contact',
        component: ContactUsComponent,
      },
      {
        path: 'methodology',
        component: MethodologyComponent,
      },
      {
        path: 'montessori',
        component: MontessoriComponent,
      },
      {
        path: 'primary-section',
        component: PrimarySectionComponent,
      },
      {
        path: 'senior-primary-section',
        component: SeniorPrimarySectionComponent,
      },
      {
        path: 'secondary-section',
        component: SecondarySectionComponent,
      },
      {
        path: 'senior-secondary-section',
        component: SeniorSecondarySectionComponent,
      },
      {
        path: 'mpd',
        component: MpdComponent,
      },
      {
        path:'administrative-staff',
        component: AdministrativeStaffComponent,
      },
      {
        path:'teaching-staff',
        component: TeachingStaffComponent,

      },
      {
        path:'non-teaching-staff',
        component: NonTeachingStaffComponent,
      },
      {
        path:'admission-form',
        component:AdmissionFormComponent,
      },
      {
        path:'streams',
        component:StreamsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
