import type { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { CharactersComponent } from "./characters/characters.component";
import { ViewCharacterDetailsComponent } from "./view-character-details/view-character-details.component";
import { NewCharacterComponent } from "./new-character/new-character.component";
import { EditCharacterComponent } from "./edit-character/edit-character.component";
import { ViewClassDetailsComponent } from "./view-class-details/view-class-details.component";

export const routes: Routes = [
	{
		path: "",
		pathMatch: "full",
		component: HomeComponent,
		title: "Home | Characters List",
	},
	{
		path: "characters",
		pathMatch: "full",
		component: CharactersComponent,
		title: "My Characters | Characters List",
	},
	{
		path: "characters/new",
		pathMatch: "full",
		component: NewCharacterComponent,
		title: "New Character | Characters List",
	},
	{
		path: "characters/:id",
		component: ViewCharacterDetailsComponent,
		title: "Character Details | Characters List",
	},
	{
		path: "characters/:id/edit",
		component: EditCharacterComponent,
		title: "Edit Character | Characters List",
	},
	{
		path: "classes/:id",
		component: ViewClassDetailsComponent,
		title: "Class Details | Characters List",
	},
];
