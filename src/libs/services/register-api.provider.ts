import { Provider } from "@angular/core";

import { ApiConfiguration } from "@services/api/api-configuration";
import { environment } from "@environment/environment";

export function registerApiProvider(): Provider {
	return {
		provide: ApiConfiguration,
		useValue: {
			rootUrl: environment.apiUrl,
		},
	};
}
