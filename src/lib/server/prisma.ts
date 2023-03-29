import { PrismaClient, Prisma } from '@prisma/client';
import { env } from '$env/dynamic/private';

const prisma = new PrismaClient();

if (env.NODE_ENV === 'development') {
	global.__prisma = prisma;
}

// TODO: Work out if there's a way to make this a generic type. At the moment, it's the only way I know to
// correctly get the collection type from the PrismaClient instance.
type PrismaCollectionType = Prisma.StashItemsDelegate<
	Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
>;

interface CrudCollection {
	getCollection: () => PrismaCollectionType;
	ownedByUser?: boolean;
}

type CrudModels = Partial<Record<Prisma.ModelName, CrudCollection>>;

const crudModels: CrudModels = {
	[Prisma.ModelName.StashItems]: {
		getCollection: () => prisma.stashItems,
		ownedByUser: true,
	},
};

interface CrudModelsByCollectionPath {
	[key: string]: Prisma.ModelName;
}

const crudModelsByCollectionPath = (
	Object.keys(crudModels) as Array<Prisma.ModelName>
).reduce<CrudModelsByCollectionPath>((acc, modelName) => {
	const collectionPath = modelName.toLowerCase();
	acc[collectionPath] = modelName;
	return acc;
}, {});

export { crudModelsByCollectionPath, crudModels, prisma };
