import type { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { CharactersComponent } from "./characters/characters.component";
import { SpecificCharacterComponent } from "./specific-character/specific-character.component";

export const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
	},
	{
		path: "characters",
		component: CharactersComponent,
	},
	{
		path: "characters/:id",
		component: SpecificCharacterComponent,
	},
];
