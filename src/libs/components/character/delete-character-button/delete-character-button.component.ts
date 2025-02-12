import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

import { ToastProviderService } from "@services/toast-provider/toast-provider.service";
import { CharacterDto } from "@services/api/models/character-dto";
import { CharactersService } from "@services/api/services/characters.service";

@Component({
	selector: "app-delete-character-button",
	imports: [],
	templateUrl: "./delete-character-button.component.html",
	styleUrl: "./delete-character-button.component.css",
})
export class DeleteCharacterButtonComponent {
	@Input()
	character!: CharacterDto;

	isDeletionModalOpen = false;

	constructor(
		private toastService: ToastProviderService,
		private apiService: CharactersService,
		private router: Router
	) {}

	toggleDeletionModal() {
		this.isDeletionModalOpen = !this.isDeletionModalOpen;
	}

	onDeleteClick() {
		const toastId = this.toastService.showToast(
			`Deleting character ${this.character.id}`,
			"info"
		);

		this.apiService
			.apiV1CharactersIdDelete({ id: this.character.id })
			.subscribe({
				next: () => {
					this.toastService.clearToast(toastId);
					this.toastService.showToast(
						`Character ${this.character.name} deleted`,
						"success"
					);
					void this.router.navigate(["/characters"]);
				},
				error: (error) => {
					this.toastService.clearToast(toastId);
					this.toastService.showToast(
						`Error deleting character ${this.character.name}: ${error}`,
						"error"
					);
				},
			});
	}
}
