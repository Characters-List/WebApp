import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Character } from "@models/character";

const API_URL = "https://localhost:7131/api";

@Injectable({
	providedIn: "root",
})
export class ApiService {
	constructor(private http: HttpClient) {}

	getMyCharacters() {
		return this.http.get<Array<Character>>(`${API_URL}/Characters`, {
			withCredentials: true,
		});
	}

	getCharacter(characterId: string) {
		return this.http.get<Character>(`${API_URL}/Characters/${characterId}`, {
			withCredentials: true,
		});
	}
}
