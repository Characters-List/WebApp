import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";

import { CharacterCardComponent } from "@components/character/character-card/character-card.component";
import { CharacterDto } from "@services/api/models/character-dto";

@Component({
	selector: "app-characters",
	imports: [CharacterCardComponent, RouterLink],
	templateUrl: "./characters.component.html",
	styleUrl: "./characters.component.css",
})
export class CharactersComponent implements OnInit {
	userCharacters: Array<CharacterDto> | null = null;

	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			this.userCharacters = data["characters"];
		});
	}
}
