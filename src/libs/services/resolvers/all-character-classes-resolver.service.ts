import { Resolve } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CharacterClassesService } from "@services/api/services/character-classes.service";
import { CharacterClassDto } from "@services/api/models";

@Injectable({
	providedIn: "root",
})
export class AllCharacterClassesResolverService
	implements Resolve<Array<CharacterClassDto>>
{
	constructor(private api: CharacterClassesService) {}

	resolve(): Observable<Array<CharacterClassDto>> {
		return this.api.apiV1CharacterClassesGet$Json();
	}
}
