import {
	type ApplicationConfig,
	provideZoneChangeDetection,
} from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";

import { routes } from "./app.routes";
import { provideAuth0 } from "@auth0/auth0-angular";

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideHttpClient(),
		provideAuth0({
			domain: "dev-4wq76bzqc3gkp4qs.eu.auth0.com",
			clientId: "6xik54lleUOGZoFbQb1DeJMEv0VODPCy",

			authorizationParams: {
				redirect_uri: window.location.origin,
			},
		}),
	],
};
