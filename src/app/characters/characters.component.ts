import { Component, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

import { ApiService } from "@services/api/api.service";
import { CharacterModel } from "@models/character.model";
import { CharacterCardComponent } from "@components/character/character-card/character-card.component";

@Component({
	selector: "app-characters",
	imports: [CharacterCardComponent, RouterLink],
	templateUrl: "./characters.component.html",
	styleUrl: "./characters.component.css",
})
export class CharactersComponent implements OnInit {
	userCharacters: Array<CharacterModel> | null = null;

	constructor(
		private apiService: ApiService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.apiService.getMyCharacters().subscribe((characters) => {
			this.userCharacters = characters;
		});
	}

	onCharacterClick(character: CharacterModel) {
		void this.router.navigate(["/characters", character.id]);
	}
}
