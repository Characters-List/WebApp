import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCharacterClassButtonComponent } from './delete-character-class-button.component';

describe('DeleteCharacterClassButtonComponent', () => {
  let component: DeleteCharacterClassButtonComponent;
  let fixture: ComponentFixture<DeleteCharacterClassButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCharacterClassButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCharacterClassButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
