import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

import { ToastProviderService } from "@services/toast-provider/toast-provider.service";
import { DateValueAccessorDirective } from "@directives/date-value-accessor/date-value-accessor.directive";
import { DateValidators } from "@validators/date.validator";
import { CharacterClassDto } from "@services/api/models/character-class-dto";
import { CharacterDto } from "@services/api/models/character-dto";
import { CharactersService } from "@services/api/services/characters.service";
import { CharacterClassesService } from "@services/api/services/character-classes.service";

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
	classesAvailable: Array<CharacterClassDto> = [];

	@Input()
	currentCharacter?: CharacterDto;

	@Output()
	confirmed = new EventEmitter<void>();
	@Output()
	canceled = new EventEmitter<void>();

	constructor(
		private characterApiProxyService: CharactersService,
		private characterClassApiProxyService: CharacterClassesService,
		private toastService: ToastProviderService
	) {}

	ngOnInit(): void {
		this.characterClassApiProxyService
			.apiV1CharacterClassesGet$Json()
			.subscribe((classes) => {
				this.classesAvailable = classes;
			});

		if (this.currentCharacter) {
			this.characterForm.setValue({
				name: this.currentCharacter.name,
				classId: this.currentCharacter.class.id,
				dateOfBirth: new Date(this.currentCharacter.dateOfBirth),
			});
		}
	}

	onSubmit() {
		const toastId = this.toastService.showToast(
			`${this.currentCharacter ? "Updating" : "Creating"} character...`,
			"info"
		);

		(this.currentCharacter
			? this.characterApiProxyService.apiV1CharactersIdPut({
					id: this.currentCharacter.id,
					body: {
						name: this.characterForm.value.name!,
						classId: this.characterForm.value.classId!,
						dateOfBirth: this.characterForm.value.dateOfBirth!.toISOString(),
					},
				})
			: this.characterApiProxyService.apiV1CharactersPost({
					body: {
						name: this.characterForm.value.name!,
						classId: this.characterForm.value.classId!,
						dateOfBirth: this.characterForm.value.dateOfBirth!.toISOString(),
					},
				})
		).subscribe({
			next: (response) => {
				this.toastService.clearToast(toastId);

				this.toastService.showToast(
					`Character ${this.currentCharacter ? "updated" : "created"} successfully`,
					"success"
				);
				this.confirmed.emit();
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
		this.canceled.emit();
	}
}
