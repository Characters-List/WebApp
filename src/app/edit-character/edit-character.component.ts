import { Component, OnInit } from "@angular/core";

import { CharacterModel } from "@models/character.model";
import { CharacterFormComponent } from "@components/character/character-form/character-form.component";
import { ActivatedRoute, Router } from "@angular/router";
import { CharacterApiProxyService } from "@services/api/character-api-proxy.service";

@Component({
	selector: "app-edit-character-button",
	imports: [CharacterFormComponent],
	templateUrl: "./edit-character.component.html",
	styleUrl: "./edit-character.component.css",
})
export class EditCharacterComponent implements OnInit {
	character: CharacterModel | null = null;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private characterApiService: CharacterApiProxyService
	) {}

	ngOnInit() {
		const id = this.route.snapshot.paramMap.get("id");

		if (!id) {
			void this.router.navigate(["/characters"]);
			return;
		}

		this.characterApiService.getById(id).subscribe((character) => {
			if (!character) {
				void this.router.navigate(["/characters"]);
				return;
			}

			this.character = character;
		});
	}

	onCharacterUpdated() {
		void this.router.navigate(["/characters", this.character?.id]);
	}

	onCancel() {
		this.router.navigate(["/characters", this.character?.id]);
	}
}
