import { UpperCasePipe,Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { BackgroundColorChange } from './background.directive';
import { FilterTextPipe } from './search.pipe';
import { WebStorageService } from './web-storage.service';
import {RouterTestingModule} from "@angular/router/testing";
import {routes} from './app.module';
import { FormsModule } from '@angular/forms';



describe('AppDataComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let webService:WebStorageService;
  let filter:FilterTextPipe;
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent,BackgroundColorChange],
      imports:[HttpClientTestingModule,RouterTestingModule.withRoutes(routes),FormsModule],
      providers:[WebStorageService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    webService=TestBed.inject(WebStorageService);
    location = TestBed.inject(Location);
    router = TestBed.inject(Router);
    fixture.detectChanges();
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


 it('get all emplyee details ',(done:DoneFn)=>{
    let mockResponse:any=[{
        "id": 1,
        "first_name": "Sebastian",
        "last_name": "Eschweiler",
        "email": "sebastian@codingthesmartway.com"
      },
      {
        "id": 2,
        "first_name": "Steve",
        "last_name": "Palmer",
        "email": "steve@codingthesmartway.com"
      }];
     let employeeSpy=spyOn(webService,'getAllDetails').and.returnValue(of(mockResponse));
     let subSpy=spyOn(webService.getAllDetails(),'subscribe');
     component.ngOnInit()
     expect(employeeSpy).toHaveBeenCalledBefore(subSpy);
     expect(subSpy).toHaveBeenCalled()
     done();
 })
  
    it('navigate to " " redirects you to AppComponent',fakeAsync(()=>{
      router.navigate(['']);
      tick();
      expect(location.path()).toBe('/app');
    }))

    it('navigate to "test Data" takes you to /test',fakeAsync(() => {
      router.navigate(['test']);
      tick();
      expect(location.path()).toBe('/test');
    }));
   
});
