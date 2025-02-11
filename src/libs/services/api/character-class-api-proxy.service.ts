import { V1ApiProxyService } from "@services/api/v1-api-proxy.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

import {
	CharacterClassCreationModel,
	CharacterClassModel,
	CharacterClassUpdateModel,
} from "@models/characterClass.model";
import { HttpClient } from "@angular/common/http";
import { CharacterModel } from "@models/character.model";

@Injectable({
	providedIn: "root",
})
export class CharacterClassApiProxyService extends V1ApiProxyService<
	CharacterClassModel,
	CharacterClassCreationModel,
	CharacterClassUpdateModel
> {
	constructor(http: HttpClient) {
		super(http);
	}

	get path(): string {
		return "CharacterClasses";
	}

	getCharactersForClass(id: string): Observable<Array<CharacterModel>> {
		return this.http.get<Array<CharacterModel>>(
			`${this.baseUrl}/${this.version}/${this.path}/${id}/Characters`
		);
	}
}
