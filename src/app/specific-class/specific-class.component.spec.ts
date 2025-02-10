import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificClassComponent } from './specific-class.component';

describe('SpecificClassComponent', () => {
  let component: SpecificClassComponent;
  let fixture: ComponentFixture<SpecificClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
