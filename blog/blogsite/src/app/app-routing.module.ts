import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './blog/add-blog/add-blog.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogComponent } from './blog/blog.component';
import { EditblogsComponent } from './blog/editblogs/editblogs.component';
import { MyblogComponent } from './blog/myblog/myblog.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  {
    path: 'blog', component: BlogComponent,
    children: [
      { path: '', component: BlogListComponent },
      { path: 'new', component: AddBlogComponent, canActivate: [AuthGuard] },
      { path: ':id/edit', component: EditblogsComponent, canActivate: [AuthGuard] },
      { path: ':id', component: BlogDetailComponent },
    ]
  },
  { path: 'myblog', component: MyblogComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];
const routerOption: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOption), CommonModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
