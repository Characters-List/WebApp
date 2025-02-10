import { AbstractControl } from "@angular/forms";

export const DateValidators = {
	validDate(control: AbstractControl) {
		if (control.value && isNaN(Date.parse(control.value))) {
			return {
				validDate: {
					actual: control.value,
				},
			};
		}
		return null;
	},
	notAfter: (date: Date) => (control: AbstractControl) => {
		if (control.value && control.value > date) {
			return {
				notAfter: {
					expected: date,
					actual: control.value,
				},
			};
		}
		return null;
	},
	notBefore: (date: Date) => (control: AbstractControl) => {
		if (control.value && control.value < date) {
			return {
				notBefore: {
					expected: date,
					actual: control.value,
				},
			};
		}
		return null;
	},
	notInFuture: (control: AbstractControl) => {
		if (control.value && control.value > new Date()) {
			return {
				notAfter: {
					expected: new Date(),
					actual: control.value,
				},
			};
		}
		return null;
	},
	notInPast: (control: AbstractControl) => {
		if (control.value && control.value < new Date()) {
			return {
				notInPast: {
					expected: new Date(),
					actual: control.value,
				},
			};
		}
		return null;
	},
};
