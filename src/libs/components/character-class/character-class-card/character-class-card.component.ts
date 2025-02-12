import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";

import { CharacterClassDto } from "@services/api/models/character-class-dto";

@Component({
	selector: "app-character-class-card",
	imports: [RouterLink],
	templateUrl: "./character-class-card.component.html",
	styleUrl: "./character-class-card.component.css",
	standalone: true,
})
export class CharacterClassCardComponent {
	@Input() characterClass!: CharacterClassDto;

	constructor() {}
}
