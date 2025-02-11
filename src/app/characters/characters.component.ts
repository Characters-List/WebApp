import { Component, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { CharacterModel } from "@models/character.model";
import { CharacterCardComponent } from "@components/character/character-card/character-card.component";
import { CharacterApiProxyService } from "@services/api/character-api-proxy.service";

@Component({
	selector: "app-characters",
	imports: [CharacterCardComponent, RouterLink],
	templateUrl: "./characters.component.html",
	styleUrl: "./characters.component.css",
})
export class CharactersComponent implements OnInit {
	userCharacters: Array<CharacterModel> | null = null;

	constructor(
		private characterApiService: CharacterApiProxyService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.characterApiService.get().subscribe((characters) => {
			this.userCharacters = characters;
		});
	}

	onCharacterClick(character: CharacterModel) {
		void this.router.navigate(["/characters", character.id]);
	}
}
