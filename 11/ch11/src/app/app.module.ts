import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { JobsComponent } from './jobs/jobs.component';
import { PostJobComponent } from './jobs/post-job/post-job.component';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';
import { EditJobComponent } from './jobs/edit-job/edit-job.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './auth.service';
import { jobService } from './jobs/jobs.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes=[
  { path:'',component:LoginComponent},
  { path:'',component:HeaderComponent},
  { path:'jobs',component:JobsComponent,children:[
    {path: 'newpost', component: PostJobComponent},
    // { path:'',component:JobListComponent},
    { path:':id',component:JobDetailsComponent},
    { path:':id/edit',component:EditJobComponent},
    // { path:':id/edit', canActivate: [AuthGuard],component:EditJobComponent},
    // { path:':id/:title/:company/:place/:time',component:JobDetailsComponent}
  ]},
  // { path:'jobdetail/:id/:title/:company/:place/:time',component:JobDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JobsComponent,
    PostJobComponent,
    JobListComponent,
    JobDetailsComponent,
    EditJobComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService,jobService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
