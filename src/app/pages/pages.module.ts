import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurFacultyComponent } from './our-faculty/our-faculty.component';
import { FeeStructureComponent } from './fee-structure/fee-structure.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DocumentsComponent } from './documents/documents.component';
import { TcComponent } from './tc/tc.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ToppersComponent } from './toppers/toppers.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { AdmissionComponent } from './admission/admission.component';
import { AdmissionProcedureComponent } from './admission-procedure/admission-procedure.component';
import { AdmissionFeesStructureComponent } from './admission-fees-structure/admission-fees-structure.component';
import { AdmissionFaqsComponent } from './admission-faqs/admission-faqs.component';
import { AdmissionNoticeComponent } from './admission-notice/admission-notice.component';
import { AcademicsComponent } from './academics/academics.component';
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

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    OurFacultyComponent,
    FeeStructureComponent,
    GalleryComponent,
    DocumentsComponent,
    TcComponent,
    ContactUsComponent,
    ToppersComponent,
    BlogsComponent,
    FacilitiesComponent,
    InfrastructureComponent,
    AdmissionComponent,
    AdmissionProcedureComponent,
    AdmissionFeesStructureComponent,
    AdmissionFaqsComponent,
    AdmissionNoticeComponent,
    AcademicsComponent,
    MethodologyComponent,
    MontessoriComponent,
    PrimarySectionComponent,
    SecondarySectionComponent,
    SeniorSecondarySectionComponent,
    SeniorPrimarySectionComponent,
    MpdComponent,
    AdministrativeStaffComponent,
    TeachingStaffComponent,
    NonTeachingStaffComponent,
    AdmissionFormComponent,
    StreamsComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
  ],
})
export class PagesModule {}
