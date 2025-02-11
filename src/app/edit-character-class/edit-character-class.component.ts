import { Component, OnInit } from "@angular/core";
import { ApiService } from "@services/api/api.service";
import { AuthService } from "@auth0/auth0-angular";
import { ActivatedRoute, Router } from "@angular/router";
import { CharacterClassModel } from "@models/characterClass.model";
import { CharacterClassFormComponent } from "@components/character-class/character-class-form/character-class-form.component";

@Component({
	selector: "app-edit-character-class",
	imports: [CharacterClassFormComponent],
	templateUrl: "./edit-character-class.component.html",
	styleUrl: "./edit-character-class.component.css",
})
export class EditCharacterClassComponent implements OnInit {
	characterClass: CharacterClassModel | null = null;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private authService: AuthService,
		private apiService: ApiService
	) {}

	ngOnInit() {
		const id = this.route.snapshot.paramMap.get("id");

		if (!id) {
			void this.router.navigate(["/classes"]);
			return;
		}

		this.authService.getAccessTokenSilently().subscribe((token) => {
			const parsedToken = JSON.parse(atob(token.split(".")[1])) as {
				permissions: Array<string>;
			};

			if (!parsedToken.permissions.includes("admin")) {
				void this.router.navigate(["/classes"]);
			}
		});
		this.authService.user$.subscribe((user) => {
			if (!user) {
				void this.router.navigate(["/"]);
				return;
			}

			this.apiService.getCharacterClass(id).subscribe((characterClass) => {
				if (!characterClass) {
					void this.router.navigate(["/classes"]);
					return;
				}

				this.characterClass = characterClass;
			});
		});
	}

	onCharacterUpdated() {
		void this.router.navigate(["/classes", this.characterClass?.id]);
	}

	onCancel() {
		void this.router.navigate(["/classes"]);
	}
}
