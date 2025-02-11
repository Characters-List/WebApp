import { Component, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { ApiService } from "@services/api/api.service";
import { CharacterClassModel } from "@models/characterClass.model";
import { AuthService } from "@auth0/auth0-angular";
import { CharacterClassCardComponent } from "@components/character-class/character-class-card/character-class-card.component";

type UserType = "admin" | "user";

@Component({
	selector: "app-character-classes",
	imports: [RouterLink, CharacterClassCardComponent],
	templateUrl: "./character-classes.component.html",
	styleUrl: "./character-classes.component.css",
})
export class CharacterClassesComponent implements OnInit {
	classes: Array<CharacterClassModel> | null = null;
	userType: UserType = "user";

	constructor(
		private router: Router,
		private authService: AuthService,
		private apiService: ApiService
	) {}

	ngOnInit() {
		this.authService.getAccessTokenSilently().subscribe((token) => {
			const parsed = JSON.parse(atob(token.split(".")[1])) as {
				permissions: Array<string>;
			};

			if (parsed.permissions.includes("admin")) {
				this.userType = "admin";
			}
		});

		this.apiService.getCharacterClasses().subscribe((classes) => {
			if (!classes) {
				void this.router.navigate(["/"]);
				return;
			}

			this.classes = classes;
		});
	}

	onCharacterClassClick(characterClass: CharacterClassModel) {
		void this.router.navigate(["/classes", characterClass.id]);
	}
}
