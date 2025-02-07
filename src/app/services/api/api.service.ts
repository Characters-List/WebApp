import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Character } from "@models/character";
import { AuthService } from "@auth0/auth0-angular";

const API_URL = "https://localhost:7131/api";

@Injectable({
	providedIn: "root",
})
export class ApiService implements OnInit {
	constructor(
		private http: HttpClient,
		private authService: AuthService
	) {}

	ngOnInit(): void {
		this.authService.getAccessTokenSilently().subscribe((token) => {
			console.log("Got token", token);
			localStorage.setItem("token", token);
		});
	}

	preparedHeaders() {
		const token = localStorage.getItem("token");

		return {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
	}

	getMyCharacters() {
		return this.http.get<Array<Character>>(
			`${API_URL}/Characters`,
			this.preparedHeaders()
		);
	}

	getCharacter(characterId: string) {
		return this.http.get<Character>(
			`${API_URL}/Characters/${characterId}`,
			this.preparedHeaders()
		);
	}
}
