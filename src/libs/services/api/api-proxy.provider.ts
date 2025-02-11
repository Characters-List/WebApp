import { Provider } from "@angular/core";
import { CharacterApiProxyService } from "@services/api/character-api-proxy.service";
import { CharacterClassApiProxyService } from "@services/api/character-class-api-proxy.service";
import { HttpClient } from "@angular/common/http";

export function provideApiProxy(): Provider[] {
	return [
		{
			provide: CharacterApiProxyService,
			useFactory: (http: HttpClient) => new CharacterApiProxyService(http),
			deps: [HttpClient],
		},
		{
			provide: CharacterClassApiProxyService,
			useFactory: (http: HttpClient) => new CharacterClassApiProxyService(http),
			deps: [HttpClient],
		},
	];
}
