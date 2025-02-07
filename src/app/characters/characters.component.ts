import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ApiService } from "@services/api/api.service";
import { Character } from "@models/character";
import { CharacterCardComponent } from "@components/character-card/character-card.component";

@Component({
	selector: "app-characters",
	imports: [CharacterCardComponent],
	templateUrl: "./characters.component.html",
	styleUrl: "./characters.component.css",
})
export class CharactersComponent implements OnInit {
	userCharacters: Array<Character> = [];

	constructor(
		private apiService: ApiService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.apiService.getMyCharacters().subscribe((characters) => {
			this.userCharacters = characters;
		});
	}

	onCharacterClick(character: Character) {
		void this.router.navigate(["/characters", character.id]);
	}
}
