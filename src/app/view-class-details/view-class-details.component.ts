import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { CharacterClassModel } from "@models/characterClass.model";
import { CharacterModel } from "@models/character.model";
import { DeleteCharacterClassButtonComponent } from "@components/character-class/delete-character-class-button/delete-character-class-button.component";
import { AuthService } from "@auth0/auth0-angular";
import { CharacterClassApiProxyService } from "@services/api/character-class-api-proxy.service";

type UserType = "admin" | "user";

@Component({
	selector: "app-view-class-details",
	imports: [RouterLink, DeleteCharacterClassButtonComponent],
	templateUrl: "./view-class-details.component.html",
	styleUrl: "./view-class-details.component.css",
})
export class ViewClassDetailsComponent implements OnInit {
	characterClass: CharacterClassModel | null = null;
	characters: Array<CharacterModel> = [];
	userType: UserType = "user";

	constructor(
		private classApiService: CharacterClassApiProxyService,
		private authService: AuthService,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get("id");

		if (!id) {
			void this.router.navigate(["/"]);
			return;
		}

		this.authService.getAccessTokenSilently().subscribe((token) => {
			const parsedToken = JSON.parse(atob(token.split(".")[1])) as {
				permissions: Array<string>;
			};

			if (parsedToken.permissions.includes("admin")) {
				this.userType = "admin";
			}
		});

		this.classApiService.getById(id).subscribe((characterClass) => {
			if (!characterClass) {
				void this.router.navigate(["/"]);
				return;
			}

			this.characterClass = characterClass;

			this.classApiService.getCharactersForClass(id).subscribe((characters) => {
				this.characters = characters;
			});
		});
	}
}
