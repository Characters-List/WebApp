import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { CharacterClassFormComponent } from "@components/character-class/character-class-form/character-class-form.component";

@Component({
	selector: "app-new-character-class",
	imports: [CharacterClassFormComponent],
	templateUrl: "./new-character-class.component.html",
	styleUrl: "./new-character-class.component.css",
})
export class NewCharacterClassComponent {
	constructor(private router: Router) {}

	redirectToClasses() {
		void this.router.navigate(["/classes"]);
	}
}
