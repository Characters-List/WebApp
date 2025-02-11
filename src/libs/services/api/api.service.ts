import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import {
	CharacterCreationModel,
	CharacterModel,
	CharacterUpdateModel,
} from "@models/character.model";
import {
	CharacterClassCreationModel,
	CharacterClassModel,
	CharacterClassUpdateModel,
} from "@models/characterClass.model";
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

	updateCharacter(character: CharacterUpdateModel) {
		return this.http.put<CharacterModel>(
			`${API_URL}/Characters/${character.id}`,
			character,
			{
				withCredentials: true,
			}
		);
	}

	getCharacterClasses() {
		return this.http.get<Array<CharacterClassModel>>(
			`${API_URL}/CharacterClasses`,
			{
				withCredentials: true,
			}
		);
	}

	getCharacterClass(id: string) {
		return this.http.get<CharacterClassModel>(
			`${API_URL}/CharacterClasses/${id}`,
			{
				withCredentials: true,
			}
		);
	}

	createCharacterClass(characterClass: CharacterClassCreationModel) {
		return this.http.post<CharacterClassModel>(
			`${API_URL}/CharacterClasses`,
			characterClass,
			{
				withCredentials: true,
			}
		);
	}

	updateCharacterClass(characterClass: CharacterClassUpdateModel) {
		return this.http.put<CharacterClassModel>(
			`${API_URL}/CharacterClasses/${characterClass.id}`,
			characterClass,
			{
				withCredentials: true,
			}
		);
	}

	deleteCharacterClass(id: string) {
		return this.http.delete(`${API_URL}/CharacterClasses/${id}`, {
			withCredentials: true,
		});
	}
}
