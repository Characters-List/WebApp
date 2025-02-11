import { Component, Input } from "@angular/core";
import { CharacterClassModel } from "@models/characterClass.model";
import { Router } from "@angular/router";
import { ApiService } from "@services/api/api.service";
import { ToastProviderService } from "@services/toast-provider/toast-provider.service";

@Component({
	selector: "app-delete-character-class-button",
	imports: [],
	templateUrl: "./delete-character-class-button.component.html",
	styleUrl: "./delete-character-class-button.component.css",
})
export class DeleteCharacterClassButtonComponent {
	@Input() characterClass!: CharacterClassModel;

	isDeletionModalOpen = false;

	constructor(
		private router: Router,
		private apiService: ApiService,
		private toastService: ToastProviderService
	) {}

	toggleDeletionModal() {
		this.isDeletionModalOpen = !this.isDeletionModalOpen;
	}

	onDeleteClick() {
		const toastId = this.toastService.showToast("Deleting character class...");

		this.apiService.deleteCharacterClass(this.characterClass.id).subscribe({
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
