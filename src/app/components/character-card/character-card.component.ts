import { Component, computed, Input, signal } from "@angular/core";
import { RouterLink } from "@angular/router";

import { Character } from "@models/character";

@Component({
	selector: "app-character-card",
	imports: [RouterLink],
	templateUrl: "./character-card.component.html",
	styleUrl: "./character-card.component.css",
})
export class CharacterCardComponent {
	@Input()
	character!: Character;
	characterChangeSignal = signal(this.character);
	redirectionLink = computed(() => {
		return `/characters/${this.characterChangeSignal().id}`;
	});

	constructor() {}
}
