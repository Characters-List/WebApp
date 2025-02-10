import { Component, Input } from "@angular/core";
import { CharacterModel } from "@models/character.model";
import { CharacterFormComponent } from "@components/character/character-form/character-form.component";

@Component({
	selector: "app-edit-character-button",
	imports: [CharacterFormComponent],
	templateUrl: "./edit-character-button.component.html",
	styleUrl: "./edit-character-button.component.css",
})
export class EditCharacterButtonComponent {
	@Input()
	character!: CharacterModel;
	isEditionModalOpen = false;

	constructor() {}

	toggleEditCharacterModal() {
		this.isEditionModalOpen = !this.isEditionModalOpen;
	}

	onCharacterUpdated($event: CharacterModel) {
		this.character = $event;
		this.toggleEditCharacterModal();
	}
}
