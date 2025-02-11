import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterClassFormComponent } from './character-class-form.component';

describe('CharacterClassFormComponent', () => {
  let component: CharacterClassFormComponent;
  let fixture: ComponentFixture<CharacterClassFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterClassFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterClassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
