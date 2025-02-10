import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";

import { CharacterModel } from "@models/character.model";

@Component({
	selector: "app-character-card",
	imports: [RouterLink],
	templateUrl: "./character-card.component.html",
	styleUrl: "./character-card.component.css",
})
export class CharacterCardComponent {
	@Input()
	character!: CharacterModel;

	constructor() {}
}
