import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";

import { DeleteCharacterClassButtonComponent } from "@components/character-class/delete-character-class-button/delete-character-class-button.component";
import { CharacterClassDto, CharacterDto } from "@services/api/models";
import { AuthenticationService } from "@services/authentication/authentication.service";
import { CharacterClassesService } from "@services/api/services/character-classes.service";

type UserType = "admin" | "user";

@Component({
	selector: "app-view-class-details",
	imports: [RouterLink, DeleteCharacterClassButtonComponent],
	templateUrl: "./view-class-details.component.html",
	styleUrl: "./view-class-details.component.css",
})
export class ViewClassDetailsComponent implements OnInit {
	characterClass: CharacterClassDto | null = null;
	characters: Array<CharacterDto> = [];

	constructor(
		private route: ActivatedRoute,
		protected authService: AuthenticationService,
		private characterClassesService: CharacterClassesService
	) {}

	ngOnInit(): void {
		this.route.data.subscribe((data) => {
			this.characterClass = data["characterClass"] as CharacterClassDto;

			this.characterClassesService
				.apiV1CharacterClassesIdCharactersGet$Json({
					id: this.characterClass.id,
				})
				.subscribe((data) => {
					this.characters = data;
				});
		});
	}
}
