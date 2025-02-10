import { AbstractControl } from "@angular/forms";

export const DateValidators = {
	validDate(control: AbstractControl) {
		if (control.value && isNaN(Date.parse(control.value))) {
			return {
				validDate: {
					actual: new Date(control.value).toLocaleDateString(),
				},
			};
		}
		return null;
	},
	notAfter: (date: Date) => (control: AbstractControl) => {
		if (control.value && new Date(control.value) > date) {
			return {
				notAfter: {
					expected: date.toLocaleDateString(),
					actual: new Date(control.value).toLocaleDateString(),
				},
			};
		}
		return null;
	},
	notBefore: (date: Date) => (control: AbstractControl) => {
		if (control.value && new Date(control.value) < date) {
			return {
				notBefore: {
					expected: date.toLocaleDateString(),
					actual: new Date(control.value).toLocaleDateString(),
				},
			};
		}
		return null;
	},
	notInFuture: (control: AbstractControl) => {
		if (control.value && new Date(control.value) > new Date()) {
			return {
				notAfter: {
					expected: new Date().toLocaleDateString(),
					actual: new Date(control.value).toLocaleDateString(),
				},
			};
		}
		return null;
	},
	notInPast: (control: AbstractControl) => {
		if (control.value && new Date(control.value) < new Date()) {
			return {
				notInPast: {
					expected: new Date().toLocaleDateString(),
					actual: new Date(control.value).toLocaleDateString(),
				},
			};
		}
		return null;
	},
};
