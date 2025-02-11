import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterClassCardComponent } from './character-class-card.component';

describe('CharacterClassCardComponent', () => {
  let component: CharacterClassCardComponent;
  let fixture: ComponentFixture<CharacterClassCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterClassCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterClassCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
