export type CharacterModel = {
	id: string;
	name: string;
	experience: number;
	health: {
		current: number;
		max: number;
	};
	gold: number;
	class: {
		id: string;
		name: string;
	};
	userId: string;
	dateOfBirth: Date;
};

export type CharacterCreationModel = Omit<
	CharacterModel,
	"id" | "experience" | "health" | "gold" | "userId" | "class"
> & {
	classId: string;
};

export type CharacterUpdateModel = Partial<CharacterCreationModel>;
