import { TestBed } from "@angular/core/testing";

import { ToastProviderService } from "./toast-provider.service";

describe("ToastService", () => {
	let service: ToastProviderService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ToastProviderService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
