import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { AuthService } from "@auth0/auth0-angular";

import { CharacterModel } from "@models/character.model";
import { ApiService } from "@services/api/api.service";
import { DeleteCharacterButtonComponent } from "@components/character/delete-character-button/delete-character-button.component";

@Component({
	selector: "app-view-character-details",
	imports: [DeleteCharacterButtonComponent, RouterLink],
	templateUrl: "./view-character-details.component.html",
	styleUrl: "./view-character-details.component.css",
})
export class ViewCharacterDetailsComponent implements OnInit {
	character: CharacterModel | null = null;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private authService: AuthService,
		private apiService: ApiService
	) {}

	ngOnInit() {
		const id = this.route.snapshot.paramMap.get("id");

		if (!id) {
			void this.router.navigate(["/characters"]);
			return;
		}

		this.authService.user$.subscribe((user) => {
			if (!user) {
				void this.router.navigate(["/"]);
				return;
			}

			this.apiService.getCharacter(id).subscribe((character) => {
				if (!character) {
					void this.router.navigate(["/characters"]);
					return;
				}

				this.character = character;
			});
		});
	}
}
