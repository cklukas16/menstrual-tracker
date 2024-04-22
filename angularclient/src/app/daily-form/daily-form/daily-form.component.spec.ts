import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyFormComponent } from './daily-form.component';

describe('DailyFormComponent', () => {
  let component: DailyFormComponent;
  let fixture: ComponentFixture<DailyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
