import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { CounterComponent } from './counter/counter.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { authReducer } from './state/auth.reducer';
import { usersReducer } from './state/user.reducer';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { UserCountComponent } from './user-count/user-count.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    UserListComponent,
    UserCountComponent,
    PipesDemoComponent,
    CapitalizePipe,
    FilterPipe,
    TemplateDrivenFormComponent,
    ModelDrivenFormComponent,
    ReactiveFormComponent,
    UserDetailsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ users: usersReducer, isLoggedIn: authReducer }),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
