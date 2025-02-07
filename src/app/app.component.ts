import { Component, OnInit } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { initFlowbite } from "flowbite";
import { AuthService, User } from "@auth0/auth0-angular";
import { LoginButtonComponent } from "@components/login-button/login-button.component";
import { NgClass } from "@angular/common";

@Component({
	selector: "app-root",
	imports: [RouterLink, LoginButtonComponent, NgClass, RouterLinkActive],
	standalone: true,
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
	loggedInUser: User | null = null;
	isUserDropdownOpen = false;

	constructor(private authService: AuthService) {}

	get auth() {
		return this.authService;
	}

	ngOnInit() {
		initFlowbite();

		this.authService.user$.subscribe((user) => {
			console.log("Got user", user);

			if (user) {
				this.loggedInUser = user;
			}
		});
	}

	toggleUserDropdown() {
		this.isUserDropdownOpen = !this.isUserDropdownOpen;
	}
}
