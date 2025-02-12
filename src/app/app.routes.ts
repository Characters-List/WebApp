import type { Routes } from "@angular/router";
import { AuthGuard } from "@auth0/auth0-angular";

import { HomeComponent } from "./home/home.component";
import { CharactersComponent } from "./characters/characters.component";
import { ViewCharacterDetailsComponent } from "./view-character-details/view-character-details.component";
import { NewCharacterComponent } from "./new-character/new-character.component";
import { EditCharacterComponent } from "./edit-character/edit-character.component";
import { ViewClassDetailsComponent } from "./view-class-details/view-class-details.component";
import { CharacterClassesComponent } from "./character-classes/character-classes.component";
import { NewCharacterClassComponent } from "./new-character-class/new-character-class.component";
import { EditCharacterClassComponent } from "./edit-character-class/edit-character-class.component";

import { IsAdminGuard } from "@guards/is-admin/is-admin.guard";
import { CharacterClassResolver } from "@services/resolvers/character-class-resolver.service";
import { CharacterResolver } from "@services/resolvers/character-resolver.service";
import { AllCharacterClassesResolverService } from "@services/resolvers/all-character-classes-resolver.service";
import { AllCharactersResolverService } from "@services/resolvers/all-characters-resolver.service";

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
		resolve: {
			characters: AllCharactersResolverService,
		},
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
		resolve: {
			character: CharacterResolver,
		},
		title: "Character Details | Characters List",
	},
	{
		path: "characters/:id/edit",
		component: EditCharacterComponent,
		canActivate: [AuthGuard],
		resolve: {
			character: CharacterResolver,
		},
		title: "Edit Character | Characters List",
	},
	{
		path: "classes",
		pathMatch: "full",
		component: CharacterClassesComponent,
		canActivate: [AuthGuard],
		title: "Classes | Characters List",
		resolve: {
			classes: AllCharacterClassesResolverService,
		},
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
		resolve: {
			characterClass: CharacterClassResolver,
		},
		title: "Class Details | Characters List",
	},
	{
		path: "classes/:id/edit",
		component: EditCharacterClassComponent,
		canActivate: [AuthGuard, IsAdminGuard],
		resolve: {
			characterClass: CharacterClassResolver,
		},
		title: "Edit Class | Characters List",
	},
];
