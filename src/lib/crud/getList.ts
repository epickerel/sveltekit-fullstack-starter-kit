import { MetaStatus, Prisma } from '@prisma/client';
import { crudModels } from '$lib/server/prisma';

export const getList = async (modelName: Prisma.ModelName, filter: any = {}, userId = '') => {
	const collectionConfig = crudModels[modelName];
	if (!collectionConfig) {
		return null;
	}
	if (collectionConfig.ownedByUser) {
		filter.userId = userId;
	}
	filter.meta = {
		status: MetaStatus.ACTIVE,
	};
	const prismaCollection = collectionConfig.getCollection();
	return prismaCollection.findMany({ where: filter });
};
