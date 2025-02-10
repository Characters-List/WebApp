import type { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { CharactersComponent } from "./characters/characters.component";
import { SpecificCharacterComponent } from "./specific-character/specific-character.component";
import { SpecificClassComponent } from "./specific-class/specific-class.component";

export const routes: Routes = [
	{
		path: "",
		pathMatch: "full",
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
	{
		path: "classes/:id",
		component: SpecificClassComponent,
	},
];
