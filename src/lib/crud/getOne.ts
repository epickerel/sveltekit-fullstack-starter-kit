import { MetaStatus, Prisma } from '@prisma/client';
import { crudModels } from '$lib/server/prisma';

export const getOne = async (modelName: Prisma.ModelName, id: string, userId = '') => {
	const collectionConfig = crudModels[modelName];
	if (!collectionConfig) {
		return null;
	}
	const filter: any = {
		id,
		meta: {
			status: MetaStatus.ACTIVE,
		},
	};
	if (collectionConfig.ownedByUser) {
		filter.userId = userId;
	}
	const prismaCollection = collectionConfig.getCollection();
	return prismaCollection.findFirst({ where: filter });
};
