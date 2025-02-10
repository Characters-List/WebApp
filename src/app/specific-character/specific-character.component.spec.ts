import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificCharacterComponent } from './specific-character.component';

describe('SpecificCharacterComponent', () => {
  let component: SpecificCharacterComponent;
  let fixture: ComponentFixture<SpecificCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
