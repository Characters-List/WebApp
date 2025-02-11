import { Component, OnInit } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { Observable } from "rxjs";
import { AsyncPipe } from "@angular/common";

@Component({
	selector: "app-home",
	imports: [AsyncPipe],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
	userLoggedIn$!: Observable<boolean>;

	constructor(private authService: AuthService) {}

	ngOnInit() {
		this.userLoggedIn$ = this.authService.isAuthenticated$;
	}

	login() {
		this.authService.loginWithRedirect();
	}
}
