import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ViewClassDetailsComponent } from "./view-class-details.component";

describe("ViewClassDetailsComponent", () => {
	let component: ViewClassDetailsComponent;
	let fixture: ComponentFixture<ViewClassDetailsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ViewClassDetailsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ViewClassDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
