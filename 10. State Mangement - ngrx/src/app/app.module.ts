import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { usersReducer } from './state/user.reducer';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { UserCountComponent } from './user-count/user-count.component';
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
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({users: usersReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
