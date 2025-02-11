import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "@auth0/auth0-angular";
import { CharacterClassFormComponent } from "@components/character-class/character-class-form/character-class-form.component";
import { CharacterClassModel } from "@models/characterClass.model";

@Component({
	selector: "app-new-character-class",
	imports: [CharacterClassFormComponent],
	templateUrl: "./new-character-class.component.html",
	styleUrl: "./new-character-class.component.css",
})
export class NewCharacterClassComponent implements OnInit {
	constructor(
		private router: Router,
		private authService: AuthService
	) {}

	ngOnInit() {
		this.authService.getAccessTokenSilently().subscribe((token) => {
			const parsedToken = JSON.parse(atob(token.split(".")[1])) as {
				permissions: string[];
			};

			if (!parsedToken.permissions.includes("admin")) {
				void this.router.navigate(["/characters"]);
				return;
			}
		});
	}

	onCancelCreation() {
		void this.router.navigate(["/classes"]);
	}

	onCharacterCreated($event: CharacterClassModel) {
		void this.router.navigate(["/classes", $event.id]);
	}
}
