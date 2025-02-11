import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { map, Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class IsAdminGuard implements CanActivate {
	constructor(
		private authService: AuthService,
		private router: Router
	) {}

	canActivate(): Observable<boolean> {
		return this.authService.getAccessTokenSilently().pipe(
			map((token) => {
				const parsedToken = JSON.parse(atob(token.split(".")[1])) as {
					permissions: string[];
				};

				if (!parsedToken.permissions.includes("admin")) {
					void this.router.navigate(["/classes"]);
				}

				return parsedToken.permissions.includes("admin");
			})
		);
	}
}
