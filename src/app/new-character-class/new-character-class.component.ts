import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { CharacterClassFormComponent } from "@components/character-class/character-class-form/character-class-form.component";
import { CharacterClassModel } from "@models/characterClass.model";

@Component({
	selector: "app-new-character-class",
	imports: [CharacterClassFormComponent],
	templateUrl: "./new-character-class.component.html",
	styleUrl: "./new-character-class.component.css",
})
export class NewCharacterClassComponent {
	constructor(private router: Router) {}

	onCancelCreation() {
		void this.router.navigate(["/classes"]);
	}

	onCharacterCreated($event: CharacterClassModel) {
		void this.router.navigate(["/classes", $event.id]);
	}
}
