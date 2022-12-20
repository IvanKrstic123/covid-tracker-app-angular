import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumaryPageComponent } from './sumary-page.component';

describe('SumaryPageComponent', () => {
  let component: SumaryPageComponent;
  let fixture: ComponentFixture<SumaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumaryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
