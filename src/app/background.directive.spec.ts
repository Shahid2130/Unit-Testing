import { UpperCasePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { BackgroundColorChange } from './background.directive';



describe('Directive testing', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement:DebugElement;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent,BackgroundColorChange],
      imports:[HttpClientTestingModule,FormsModule],
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement=fixture.debugElement;
  });

  it('should change background color on hover', () => {
   let btn= debugElement.query(By.css('#directiveBtn'));
    btn.triggerEventHandler('mouseover',null);
    fixture.detectChanges();
   expect(btn.nativeElement.innerText).toContain('Get')
   expect(btn.nativeElement.style.backgroundColor).toBe('red');

   btn.triggerEventHandler('mouseout',null);
   fixture.detectChanges();
   expect(btn.nativeElement.style.backgroundColor).toBe('rgb(72, 72, 202)');
  });

  
    
   
});
