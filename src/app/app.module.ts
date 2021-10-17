import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {UpperCasePipe} from './upper.pipe';
import { FilterTextPipe } from './search.pipe';
import { BackgroundColorChange } from './background.directive';
import { TestingDataComponent } from './testing-data/testing-data.component';
import { ErrorMetaDataService } from './error-meta-data.service';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [ 
{path: '', redirectTo: 'app', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'app', component: AppComponent},
{path: 'test', component: TestingDataComponent}];

@NgModule({
  declarations: [
    AppComponent,
    UpperCasePipe,
    FilterTextPipe,
    BackgroundColorChange,
    TestingDataComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{
    provide:ErrorHandler,useClass:ErrorMetaDataService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
