import { Component } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";

@Component({
	selector: "app-login-button",
	imports: [],
	templateUrl: "./login-button.component.html",
	styleUrl: "./login-button.component.css",
})
export class LoginButtonComponent {
	constructor(private authService: AuthService) {}

	login() {
		this.authService.loginWithRedirect();
	}
}
