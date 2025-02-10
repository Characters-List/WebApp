import { Component } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";

@Component({
	selector: "app-home",
	imports: [],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.css",
})
export class HomeComponent {
	constructor(private authService: AuthService) {}

	login() {
		this.authService.loginWithRedirect();
	}
}
