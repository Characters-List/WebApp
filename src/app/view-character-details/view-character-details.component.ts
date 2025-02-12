import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { DatePipe } from "@angular/common";

import { DeleteCharacterButtonComponent } from "@components/character/delete-character-button/delete-character-button.component";
import { CharacterDto } from "@services/api/models/character-dto";

@Component({
	selector: "app-view-character-details",
	imports: [DeleteCharacterButtonComponent, RouterLink, DatePipe],
	templateUrl: "./view-character-details.component.html",
	styleUrl: "./view-character-details.component.css",
})
export class ViewCharacterDetailsComponent implements OnInit {
	character: CharacterDto | null = null;

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.data.subscribe((data) => {
			this.character = data["character"];
		});
	}
}
