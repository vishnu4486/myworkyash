import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { ReactiveFormsModule , FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FirstcompComponent } from './firstcomp/firstcomp.component';
import { LoiginComponent } from './loigin/loigin.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpPipePipe } from './emp-pipe.pipe';
import { UsersComponent } from './users/users.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { CategoryComponent } from './category/category.component';
import { EmpdataService } from './empdata.service';


const appRotes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoiginComponent},
  {path:'register',component:RegisterComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'users',component:UsersComponent},
  {path:'expenses',component:ExpensesComponent},
  {path:'category',component:CategoryComponent},
  {path:'',redirectTo: '/home', pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    FirstcompComponent,
    LoiginComponent,
    HomeComponent,
    PagenotfoundComponent,
    RegisterComponent,
    EmployeeComponent,
    EmpPipePipe,
    UsersComponent,
    ExpensesComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRotes
    )
  ],
  providers: [EmpdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
