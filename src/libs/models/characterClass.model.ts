export type CharacterClassModel = {
	id: string;
	name: string;
	description: string;
	maxHealth: number;
};

export type CharacterClassCreationModel = Omit<CharacterClassModel, "id">;

export type CharacterClassUpdateModel = Partial<CharacterClassCreationModel>;
