import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCharacterButtonComponent } from './edit-character-button.component';

describe('EditCharacterButtonComponent', () => {
  let component: EditCharacterButtonComponent;
  let fixture: ComponentFixture<EditCharacterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCharacterButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCharacterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
