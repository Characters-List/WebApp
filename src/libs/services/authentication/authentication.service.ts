import { Injectable, OnDestroy } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { Subscription } from "rxjs";

import {
	UserModel,
	UserPermissions,
} from "@services/authentication/models/user.model";

@Injectable({
	providedIn: "root",
})
export class AuthenticationService implements OnDestroy {
	user: UserModel | null = null;

	private userSubscription!: Subscription;

	constructor(private auth: AuthService) {
		this.init();
	}

	init(): void {
		this.userSubscription = this.auth.user$.subscribe((user) => {
			if (!user) {
				return;
			}

			this.userSubscription.unsubscribe();
			this.userSubscription = this.auth
				.getAccessTokenSilently()
				.subscribe((token) => {
					const parsedToken = JSON.parse(atob(token.split(".")[1])) as {
						permissions: UserPermissions[];
					};

					this.user = {
						data: user,
						permissions: parsedToken.permissions,
					};
				});
		});
	}

	ngOnDestroy(): void {
		this.userSubscription.unsubscribe();
	}
}
