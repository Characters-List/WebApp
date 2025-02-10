import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import {
	CharacterCreationModel,
	CharacterModel,
} from "@models/character.model";
import { CharacterClassModel } from "@models/characterClass.model";
import { map } from "rxjs";

const API_URL = "https://localhost:7131/api";

@Injectable({
	providedIn: "root",
})
export class ApiService {
	constructor(private http: HttpClient) {}

	getClasses() {
		return this.http.get<Array<CharacterClassModel>>(
			`${API_URL}/CharacterClasses`,
			{
				withCredentials: true,
			}
		);
	}

	getClass(classId: string) {
		return this.http.get<CharacterClassModel>(
			`${API_URL}/CharacterClasses/${classId}`,
			{
				withCredentials: true,
			}
		);
	}

	getMyCharacters() {
		return this.http.get<Array<CharacterModel>>(`${API_URL}/Characters`, {
			withCredentials: true,
		});
	}

	getCharacter(characterId: string) {
		return this.http
			.get<CharacterModel>(`${API_URL}/Characters/${characterId}`, {
				withCredentials: true,
			})
			.pipe(
				map((character) => {
					character.dateOfBirth = new Date(character.dateOfBirth);
					return character;
				})
			);
	}

	getCharactersByClass(classId: string) {
		return this.http.get<Array<CharacterModel>>(
			`${API_URL}/CharacterClasses/${classId}/Characters`,
			{
				withCredentials: true,
			}
		);
	}

	createCharacter(character: CharacterCreationModel) {
		return this.http.post<CharacterModel>(`${API_URL}/Characters`, character, {
			withCredentials: true,
		});
	}

	deleteCharacter(characterId: string) {
		return this.http.delete(`${API_URL}/Characters/${characterId}`, {
			withCredentials: true,
		});
	}
}
