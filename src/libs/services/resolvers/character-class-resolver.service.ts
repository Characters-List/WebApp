import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CharacterClassesService } from "@services/api/services/character-classes.service";
import { CharacterClassDto } from "@services/api/models";

@Injectable({
	providedIn: "root",
})
export class CharacterClassResolver implements Resolve<CharacterClassDto> {
	constructor(private api: CharacterClassesService) {}

	resolve(route: ActivatedRouteSnapshot): Observable<CharacterClassDto> {
		return this.api.apiV1CharacterClassesIdGet$Json({ id: route.params["id"] });
	}
}
