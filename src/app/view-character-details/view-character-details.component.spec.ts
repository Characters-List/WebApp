import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ViewCharacterDetailsComponent } from "./view-character-details.component";

describe("SpecificCharacterComponent", () => {
	let component: ViewCharacterDetailsComponent;
	let fixture: ComponentFixture<ViewCharacterDetailsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ViewCharacterDetailsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ViewCharacterDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
