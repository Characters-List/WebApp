import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";

import { AuthenticationService } from "@services/authentication/authentication.service";

@Injectable({
	providedIn: "root",
})
export class IsAdminGuard implements CanActivate {
	constructor(private authService: AuthenticationService) {}

	canActivate(): boolean {
		return this.authService.user?.permissions?.includes("admin") ?? false;
	}
}
