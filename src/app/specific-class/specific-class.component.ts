import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";

import { ApiService } from "@services/api/api.service";
import { CharacterClassModel } from "@models/characterClass.model";
import { CharacterModel } from "@models/character.model";

@Component({
	selector: "app-specific-class",
	imports: [RouterLink],
	templateUrl: "./specific-class.component.html",
	styleUrl: "./specific-class.component.css",
})
export class SpecificClassComponent implements OnInit {
	characterClass: CharacterClassModel | null = null;
	characters: Array<CharacterModel> = [];

	constructor(
		private apiService: ApiService,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get("id");

		if (!id) {
			void this.router.navigate(["/"]);
			return;
		}

		this.apiService.getClass(id).subscribe((characterClass) => {
			if (!characterClass) {
				void this.router.navigate(["/"]);
				return;
			}

			this.characterClass = characterClass;

			this.apiService.getCharactersByClass(id).subscribe((characters) => {
				this.characters = characters;
			});
		});
	}
}
