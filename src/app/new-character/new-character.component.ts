import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { CharacterFormComponent } from "@components/character/character-form/character-form.component";

@Component({
	selector: "app-new-character",
	imports: [CharacterFormComponent],
	templateUrl: "./new-character.component.html",
	styleUrl: "./new-character.component.css",
})
export class NewCharacterComponent {
	constructor(private router: Router) {}

	onCharacterCreated() {
		void this.router.navigate(["/characters"]);
	}

	onCancelCreation() {
		void this.router.navigate(["/characters"]);
	}
}
