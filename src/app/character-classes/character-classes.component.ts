import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data, RouterLink } from "@angular/router";

import { CharacterClassCardComponent } from "@components/character-class/character-class-card/character-class-card.component";
import { CharacterClassDto } from "@services/api/models/character-class-dto";
import { AuthenticationService } from "@services/authentication/authentication.service";

@Component({
	selector: "app-character-classes",
	imports: [RouterLink, CharacterClassCardComponent],
	templateUrl: "./character-classes.component.html",
	styleUrl: "./character-classes.component.css",
})
export class CharacterClassesComponent implements OnInit {
	classes: Array<CharacterClassDto> | null = null;

	constructor(
		private activatedRoute: ActivatedRoute,
		protected authService: AuthenticationService
	) {}

	ngOnInit() {
		this.activatedRoute.data.subscribe((data: Data) => {
			this.classes = data["classes"];
		});
	}
}
