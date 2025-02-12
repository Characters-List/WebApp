import { User } from "@auth0/auth0-angular";

export type UserPermissions = "user" | "admin";

export type UserModel = {
	data: User;
	permissions: UserPermissions[];
};
