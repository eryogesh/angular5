import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: 'users/:username', component: UserDetailsComponent },
    { path: 'users', component: UserListComponent },
    { path: 'registertempate', component: TemplateDrivenFormComponent },
    { path: 'registermodel', component: ModelDrivenFormComponent },
    { path: 'registerreactive', component: ReactiveFormComponent },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];
