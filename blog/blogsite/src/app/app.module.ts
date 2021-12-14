import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { FormGroup, FormGroupName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { AddBlogComponent } from './blog/add-blog/add-blog.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { CKEditorModule } from 'node_modules/@ckeditor/ckeditor5-angular';
import { AuthService } from './shared/auth.service';
import { MyblogComponent } from './blog/myblog/myblog.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatNativeDateModule } from '@angular/material/core';
import { EditblogsComponent } from './blog/editblogs/editblogs.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    BlogComponent,
    LoginComponent,
    AddBlogComponent,
    BlogDetailComponent,
    BlogListComponent,
    MyblogComponent,
    EditblogsComponent,
  ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    CKEditorModule,
    NgMultiSelectDropDownModule.forRoot(),
    InfiniteScrollModule,
    NgbModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    MatNativeDateModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }