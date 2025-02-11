import { Component, Input } from "@angular/core";
import { CharacterClassModel } from "@models/characterClass.model";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-character-class-card",
	imports: [RouterLink],
	templateUrl: "./character-class-card.component.html",
	styleUrl: "./character-class-card.component.css",
})
export class CharacterClassCardComponent {
	@Input() characterClass!: CharacterClassModel;

	constructor() {}
}
