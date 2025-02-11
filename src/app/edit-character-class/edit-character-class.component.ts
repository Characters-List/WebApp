import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CharacterClassModel } from "@models/characterClass.model";
import { CharacterClassFormComponent } from "@components/character-class/character-class-form/character-class-form.component";
import { CharacterClassApiProxyService } from "@services/api/character-class-api-proxy.service";

@Component({
	selector: "app-edit-character-class",
	imports: [CharacterClassFormComponent],
	templateUrl: "./edit-character-class.component.html",
	styleUrl: "./edit-character-class.component.css",
})
export class EditCharacterClassComponent implements OnInit {
	characterClass: CharacterClassModel | null = null;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private classApiService: CharacterClassApiProxyService
	) {}

	ngOnInit() {
		const id = this.route.snapshot.paramMap.get("id");

		if (!id) {
			void this.router.navigate(["/classes"]);
			return;
		}

		this.classApiService.getById(id).subscribe((characterClass) => {
			if (!characterClass) {
				void this.router.navigate(["/classes"]);
				return;
			}

			this.characterClass = characterClass;
		});
	}

	onCharacterUpdated() {
		void this.router.navigate(["/classes", this.characterClass?.id]);
	}

	onCancel() {
		void this.router.navigate(["/classes"]);
	}
}
