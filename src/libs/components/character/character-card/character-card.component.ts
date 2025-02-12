import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CharacterDto } from "@services/api/models/character-dto";

@Component({
	selector: "app-character-card",
	imports: [RouterLink],
	templateUrl: "./character-card.component.html",
	styleUrl: "./character-card.component.css",
	standalone: true,
})
export class CharacterCardComponent {
	@Input()
	character!: CharacterDto;

	constructor() {}
}
