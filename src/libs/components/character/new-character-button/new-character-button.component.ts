import { Component, EventEmitter, Output } from "@angular/core";

import { CharacterModel } from "@models/character.model";
import { CharacterFormComponent } from "../character-form/character-form.component";

@Component({
	selector: "app-new-character-button",
	imports: [CharacterFormComponent],
	templateUrl: "./new-character-button.component.html",
	styleUrl: "./new-character-button.component.css",
})
export class NewCharacterButtonComponent {
	@Output()
	characterCreated: EventEmitter<CharacterModel> =
		new EventEmitter<CharacterModel>();

	isCreationModalOpen = false;

	constructor() {}

	onCharacterCreated(character: CharacterModel) {
		this.characterCreated.emit(character);
		this.toggleCreationModal();
	}

	toggleCreationModal() {
		this.isCreationModalOpen = !this.isCreationModalOpen;
	}
}
