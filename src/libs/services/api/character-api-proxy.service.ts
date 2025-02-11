import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import {
	CharacterCreationModel,
	CharacterModel,
	CharacterUpdateModel,
} from "@models/character.model";
import { V1ApiProxyService } from "@services/api/v1-api-proxy.service";

@Injectable({
	providedIn: "root",
})
export class CharacterApiProxyService extends V1ApiProxyService<
	CharacterModel,
	CharacterCreationModel,
	CharacterUpdateModel
> {
	constructor(http: HttpClient) {
		super(http);
	}

	get path() {
		return "Characters";
	}
}
