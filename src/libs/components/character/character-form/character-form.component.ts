import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

import { ApiService } from "@services/api/api.service";
import { CharacterClassModel } from "@models/characterClass.model";
import { CharacterModel } from "@models/character.model";
import { DateValidators } from "@validators/date.validator";
import { ToastProviderService } from "@services/toast-provider/toast-provider.service";

@Component({
	selector: "app-character-form",
	imports: [ReactiveFormsModule],
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
		dateOfBirth: <Date>(<unknown>null),
	});
	classesAvailable: Array<CharacterClassModel> = [];

	@Input()
	currentCharacter?: CharacterModel;

	@Output()
	characterCreated: EventEmitter<CharacterModel> =
		new EventEmitter<CharacterModel>();
	@Output() characterUpdated = new EventEmitter<CharacterModel>();

	constructor(
		private apiService: ApiService,
		private toastService: ToastProviderService
	) {}

	ngOnInit(): void {
		this.characterForm.controls.dateOfBirth.addValidators([
			Validators.required,
			DateValidators.validDate,
			DateValidators.notInFuture,
			DateValidators.notBefore(new Date(1900, 0, 1)),
		]);

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
			"Creating character...",
			"info"
		);

		this.apiService
			.createCharacter({
				name: this.characterForm.value.name as string,
				classId: this.characterForm.value.classId as string,
				dateOfBirth: new Date(
					this.characterForm.value.dateOfBirth as unknown as string
				),
			})
			.subscribe((response) => {
				console.log(response);
				this.toastService.clearToast(toastId);

				this.toastService.showToast(
					"Character created successfully",
					"success"
				);
				this.characterCreated.emit(response);
			});
	}
}
