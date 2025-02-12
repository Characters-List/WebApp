import { Resolve } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CharactersService } from "@services/api/services/characters.service";
import { CharacterDto } from "@services/api/models";

@Injectable({
	providedIn: "root",
})
export class AllCharactersResolverService
	implements Resolve<Array<CharacterDto>>
{
	constructor(private api: CharactersService) {}

	resolve(): Observable<Array<CharacterDto>> {
		return this.api.apiV1CharactersGet$Json();
	}
}
