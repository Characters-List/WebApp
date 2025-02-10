import {
	type ApplicationConfig,
	provideZoneChangeDetection,
} from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { authHttpInterceptorFn, provideAuth0 } from "@auth0/auth0-angular";

import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideHttpClient(withInterceptors([authHttpInterceptorFn])),
		provideAuth0({
			domain: "dev-4wq76bzqc3gkp4qs.eu.auth0.com",
			clientId: "6xik54lleUOGZoFbQb1DeJMEv0VODPCy",

			authorizationParams: {
				redirect_uri: window.location.origin,
				audience: "https://characterslist/api",
			},

			httpInterceptor: {
				allowedList: [
					{
						uri: "https://localhost:7131/*",
						tokenOptions: {
							authorizationParams: {
								audience: "https://characterslist/api",
							},
						},
					},
				],
			},
		}),
	],
};
