import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

import { ToastProviderService } from "@services/toast-provider/toast-provider.service";
import { CharacterClassDto } from "@services/api/models/character-class-dto";
import { CharacterClassesService } from "@services/api/services/character-classes.service";

@Component({
	selector: "app-character-class-form",
	imports: [ReactiveFormsModule],
	templateUrl: "./character-class-form.component.html",
	styleUrl: "./character-class-form.component.css",
})
export class CharacterClassFormComponent implements OnInit {
	formBuilder = new FormBuilder();
	characterClassForm = this.formBuilder.group({
		name: [
			"",
			[Validators.required, Validators.minLength(2), Validators.maxLength(50)],
		],
		description: [
			"",
			[
				Validators.required,
				Validators.minLength(10),
				Validators.maxLength(200),
			],
		],
		maxHealth: [
			5,
			[Validators.required, Validators.min(5), Validators.max(20)],
		],
	});

	@Input()
	currentClass: CharacterClassDto | null = null;

	@Output() confirmed = new EventEmitter<void>();
	@Output() canceled = new EventEmitter<void>();

	constructor(
		private classApiService: CharacterClassesService,
		private toastService: ToastProviderService
	) {}

	ngOnInit() {
		if (this.currentClass) {
			this.characterClassForm.setValue({
				name: this.currentClass.name,
				description: this.currentClass.description,
				maxHealth: this.currentClass.maxHealth,
			});
		}
	}

	onCancelClick() {
		this.canceled.emit();
	}

	onSubmit() {
		const toastId = this.toastService.showToast(
			`${this.currentClass ? "Updating" : "Creating"} character class...`,
			"info"
		);

		(this.currentClass
			? this.classApiService.apiV1CharacterClassesIdPut({
					id: this.currentClass.id,
					body: {
						name:
							this.characterClassForm.value.name &&
							this.characterClassForm.value.name !== this.currentClass.name
								? this.characterClassForm.value.name
								: undefined,
						description:
							this.characterClassForm.value.description &&
							this.characterClassForm.value.description !==
								this.currentClass.description
								? this.characterClassForm.value.description
								: undefined,
						maxHealth:
							this.characterClassForm.value.maxHealth &&
							this.characterClassForm.value.maxHealth !==
								this.currentClass.maxHealth
								? this.characterClassForm.value.maxHealth
								: undefined,
					},
				})
			: this.classApiService.apiV1CharacterClassesPost({
					body: {
						name: this.characterClassForm.value.name!,
						description: this.characterClassForm.value.description!,
						maxHealth: this.characterClassForm.value.maxHealth!,
					},
				})
		).subscribe({
			next: () => {
				this.toastService.clearToast(toastId);
				this.toastService.showToast(
					`Character class ${this.currentClass ? "updated" : "created"} successfully`,
					"success"
				);
				this.confirmed.emit();
			},
			error: () => {
				this.toastService.clearToast(toastId);
				this.toastService.showToast(
					`Failed to ${this.currentClass ? "update" : "create"} character class`,
					"error"
				);
			},
		});
	}
}
