import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { DatePipe } from "@angular/common";
import { AuthService } from "@auth0/auth0-angular";

import { CharacterModel } from "@models/character.model";
import { DeleteCharacterButtonComponent } from "@components/character/delete-character-button/delete-character-button.component";
import { CharacterApiProxyService } from "@services/api/character-api-proxy.service";

@Component({
	selector: "app-view-character-details",
	imports: [DeleteCharacterButtonComponent, RouterLink, DatePipe],
	templateUrl: "./view-character-details.component.html",
	styleUrl: "./view-character-details.component.css",
})
export class ViewCharacterDetailsComponent implements OnInit {
	character: CharacterModel | null = null;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private authService: AuthService,
		private characterApiService: CharacterApiProxyService
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

			this.characterApiService.getById(id).subscribe((character) => {
				if (!character) {
					void this.router.navigate(["/characters"]);
					return;
				}

				this.character = character;
			});
		});
	}
}
