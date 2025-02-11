import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

import { ApiService } from "@services/api/api.service";
import { CharacterClassModel } from "@models/characterClass.model";
import { CharacterModel } from "@models/character.model";
import { ToastProviderService } from "@services/toast-provider/toast-provider.service";
import { DateValueAccessorDirective } from "@directives/date-value-accessor/date-value-accessor.directive";
import { DateValidators } from "@validators/date.validator";

@Component({
	selector: "app-character-form",
	imports: [ReactiveFormsModule, DateValueAccessorDirective],
	templateUrl: "./character-form.component.html",
	styleUrl: "./character-form.component.css",
})
export class CharacterFormComponent implements OnInit {
	formBuilder = new FormBuilder();
	characterForm = this.formBuilder.group({
		name: [
			"",
			[Validators.required, Validators.minLength(2), Validators.maxLength(50)],
		],
		classId: ["", Validators.required],
		dateOfBirth: [
			<Date>(<unknown>null),
			[
				Validators.required,
				DateValidators.validDate,
				DateValidators.notInFuture,
				DateValidators.notBefore(new Date(1900, 0, 1)),
			],
		],
	});
	classesAvailable: Array<CharacterClassModel> = [];

	@Input()
	currentCharacter?: CharacterModel;

	@Output()
	confirmed: EventEmitter<CharacterModel> = new EventEmitter<CharacterModel>();
	@Output()
	cancel = new EventEmitter<void>();

	constructor(
		private apiService: ApiService,
		private toastService: ToastProviderService
	) {}

	ngOnInit(): void {
		this.apiService.getClasses().subscribe((classes) => {
			this.classesAvailable = classes;
		});

		if (this.currentCharacter) {
			this.characterForm.setValue({
				name: this.currentCharacter.name,
				classId: this.currentCharacter.class.id,
				dateOfBirth: this.currentCharacter.dateOfBirth,
			});
		}
	}

	onSubmit() {
		const toastId = this.toastService.showToast(
			`${this.currentCharacter ? "Updating" : "Creating"} character...`,
			"info"
		);

		(this.currentCharacter
			? this.apiService.updateCharacter({
					id: this.currentCharacter.id,
					name: this.characterForm.value.name!,
					classId: this.characterForm.value.classId!,
					dateOfBirth: this.characterForm.value.dateOfBirth!,
				})
			: this.apiService.createCharacter({
					name: this.characterForm.value.name!,
					classId: this.characterForm.value.classId!,
					dateOfBirth: this.characterForm.value.dateOfBirth!,
				})
		).subscribe({
			next: (response) => {
				this.toastService.clearToast(toastId);

				this.toastService.showToast(
					`Character ${this.currentCharacter ? "updated" : "created"} successfully`,
					"success"
				);
				this.confirmed.emit(response);
			},
			error: (error) => {
				console.error(error);

				this.toastService.clearToast(toastId);
				this.toastService.showToast(
					`Error while ${this.currentCharacter ? "updating" : "creating"} character`,
					"error"
				);
			},
		});
	}

	onCancelClick() {
		this.cancel.emit();
	}
}
