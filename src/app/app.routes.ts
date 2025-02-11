import type { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { CharactersComponent } from "./characters/characters.component";
import { ViewCharacterDetailsComponent } from "./view-character-details/view-character-details.component";
import { NewCharacterComponent } from "./new-character/new-character.component";
import { EditCharacterComponent } from "./edit-character/edit-character.component";
import { ViewClassDetailsComponent } from "./view-class-details/view-class-details.component";
import { CharacterClassesComponent } from "./character-classes/character-classes.component";
import { NewCharacterClassComponent } from "./new-character-class/new-character-class.component";
import { EditCharacterClassComponent } from "./edit-character-class/edit-character-class.component";
import { AuthGuard } from "@auth0/auth0-angular";
import { IsAdminGuard } from "../libs/guards/is-admin/is-admin.guard";

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
		canActivate: [AuthGuard],
		title: "My Characters | Characters List",
	},
	{
		path: "characters/new",
		pathMatch: "full",
		component: NewCharacterComponent,
		canActivate: [AuthGuard],
		title: "New Character | Characters List",
	},
	{
		path: "characters/:id",
		component: ViewCharacterDetailsComponent,
		canActivate: [AuthGuard],
		title: "Character Details | Characters List",
	},
	{
		path: "characters/:id/edit",
		component: EditCharacterComponent,
		canActivate: [AuthGuard],
		title: "Edit Character | Characters List",
	},
	{
		path: "classes",
		pathMatch: "full",
		component: CharacterClassesComponent,
		canActivate: [AuthGuard],
		title: "Classes | Characters List",
	},
	{
		path: "classes/new",
		pathMatch: "full",
		component: NewCharacterClassComponent,
		canActivate: [AuthGuard, IsAdminGuard],
		title: "New Class | Characters List",
	},
	{
		path: "classes/:id",
		component: ViewClassDetailsComponent,
		canActivate: [AuthGuard],
		title: "Class Details | Characters List",
	},
	{
		path: "classes/:id/edit",
		component: EditCharacterClassComponent,
		canActivate: [AuthGuard, IsAdminGuard],
		title: "Edit Class | Characters List",
	},
];
