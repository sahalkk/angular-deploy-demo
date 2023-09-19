import {HttpClientModule} from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { TitleCasePipe } from './title-case.pipe';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TestComponent } from './test/test.component';
import { ContactFormExerciseComponent } from './contact-form-exercise/contact-form-exercise.component';
import { NewReactiveFormComponent } from './new-reactive-form/new-reactive-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ReactiveFormsExerciseComponent } from './reactive-forms-exercise/reactive-forms-exercise.component';
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { PostService } from './services/post.service';
import { DataService } from './services/data.service';
import { GithubFollowersService } from './services/github-followers.service';
import { AppErrorHandler } from './common/app-error-handler';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    TitleCasePipe,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    TestComponent,
    ContactFormExerciseComponent,
    NewReactiveFormComponent,
    NewCourseFormComponent,
    ReactiveFormsExerciseComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    GithubProfileComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'', 
        component:HomeComponent
      },
      {
        path:'followers/:id/:username', 
        component:GithubProfileComponent
      },
      {
        path:'followers', 
        component:GithubFollowersComponent
      },
      {
        path:'posts',
        component:PostsComponent
      },
      {
        path:'**',
        component:NotFoundComponent
      }
    ])
  ],
  providers: [
    CoursesService,
    PostService,
    DataService,
    GithubFollowersService,
    {provide: ErrorHandler, useClass:AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
