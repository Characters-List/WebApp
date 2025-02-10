import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ApiService } from "@services/api/api.service";
import { CharacterModel } from "@models/character.model";
import { CharacterCardComponent } from "@components/character/character-card/character-card.component";
import { NewCharacterButtonComponent } from "@components/character/new-character-button/new-character-button.component";

@Component({
	selector: "app-characters",
	imports: [CharacterCardComponent, NewCharacterButtonComponent],
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

	onCharacterCreated(character: CharacterModel) {
		if (!this.userCharacters) {
			this.userCharacters = [];
		}
		this.userCharacters.push(character);
	}
}
