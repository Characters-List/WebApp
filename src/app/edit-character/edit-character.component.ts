import { Component, OnInit } from "@angular/core";

import { CharacterFormComponent } from "@components/character/character-form/character-form.component";
import { ActivatedRoute, Router } from "@angular/router";
import { CharacterDto } from "@services/api/models/character-dto";

@Component({
	selector: "app-edit-character-button",
	imports: [CharacterFormComponent],
	templateUrl: "./edit-character.component.html",
	styleUrl: "./edit-character.component.css",
})
export class EditCharacterComponent implements OnInit {
	character: CharacterDto | null = null;

	constructor(
		private router: Router,
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		this.route.data.subscribe((data) => {
			this.character = data["character"];
		});
	}

	redirectToCharacter() {
		void this.router.navigate(["/characters", this.character?.id]);
	}
}
