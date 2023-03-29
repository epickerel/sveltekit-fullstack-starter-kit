import type { Prisma } from '@prisma/client';
import { createMetaData } from '$lib/db/helpers/createMetaData';
import { crudModels } from '$lib/server/prisma';

export const createOne = async (modelName: Prisma.ModelName, data: any, userId = '') => {
	const collectionConfig = crudModels[modelName];
	if (!collectionConfig) {
		return null;
	}
	if (collectionConfig.ownedByUser) {
		data.userId = userId;
	}
	const prismaCollection = collectionConfig.getCollection();
	return prismaCollection.create({ ...data, meta: createMetaData(userId) });
};
