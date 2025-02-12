import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

import { ToastProviderService } from "@services/toast-provider/toast-provider.service";
import { CharacterClassDto } from "@services/api/models/character-class-dto";
import { CharacterClassesService } from "@services/api/services/character-classes.service";

@Component({
	selector: "app-delete-character-class-button",
	imports: [],
	templateUrl: "./delete-character-class-button.component.html",
	styleUrl: "./delete-character-class-button.component.css",
})
export class DeleteCharacterClassButtonComponent {
	@Input() characterClass!: CharacterClassDto;

	isDeletionModalOpen = false;

	constructor(
		private router: Router,
		private classApiService: CharacterClassesService,
		private toastService: ToastProviderService
	) {}

	toggleDeletionModal() {
		this.isDeletionModalOpen = !this.isDeletionModalOpen;
	}

	onDeleteClick() {
		const toastId = this.toastService.showToast("Deleting character class...");

		this.classApiService
			.apiV1CharacterClassesIdDelete({ id: this.characterClass.id })
			.subscribe({
				next: () => {
					this.toastService.clearToast(toastId);
					this.toastService.showToast(
						"Character class deleted successfully",
						"success"
					);
					void this.router.navigate(["/classes"]);
				},
				error: () => {
					this.toastService.clearToast(toastId);
					this.toastService.showToast(
						"Failed to delete character class",
						"error"
					);
				},
			});
	}
}
