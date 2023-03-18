import { PrismaClient } from '@prisma/client';
import { env } from '$env/dynamic/private';

const prisma = global.__prisma || new PrismaClient();

if (env.NODE_ENV === 'development') {
	global.__prisma = prisma;
}

interface CrudCollections {
	[key: string]: {
		ownedByUser?: boolean;
	};
}

const crudCollections: CrudCollections = {
	stashItems: {
		ownedByUser: true,
	},
};

export { crudCollections, prisma };
