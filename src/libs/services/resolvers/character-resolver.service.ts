import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { CharactersService } from "@services/api/services/characters.service";
import { CharacterDto } from "@services/api/models/character-dto";

@Injectable({
	providedIn: "root",
})
export class CharacterResolver implements Resolve<CharacterDto> {
	constructor(private charactersService: CharactersService) {}

	resolve(route: ActivatedRouteSnapshot): Observable<CharacterDto> {
		return this.charactersService.apiV1CharactersIdGet$Json({
			id: route.params["id"],
		});
	}
}
