import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { CharacterClassFormComponent } from "@components/character-class/character-class-form/character-class-form.component";
import { CharacterClassDto } from "@services/api/models/character-class-dto";

@Component({
	selector: "app-edit-character-class",
	imports: [CharacterClassFormComponent],
	templateUrl: "./edit-character-class.component.html",
	styleUrl: "./edit-character-class.component.css",
})
export class EditCharacterClassComponent implements OnInit {
	characterClass: CharacterClassDto | null = null;

	constructor(
		private router: Router,
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		this.route.data.subscribe((data) => {
			this.characterClass = data["characterClass"];
		});
	}

	onCharacterUpdated() {
		void this.router.navigate(["/classes", this.characterClass?.id]);
	}

	onCancel() {
		void this.router.navigate(["/classes"]);
	}
}
