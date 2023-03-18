import { prisma, crudCollections } from '$lib/server/prisma';

export const getList = async (collection: string, filter: any = {}, session: any = null) => {
	console.log('gl', filter);
	const collectionConfig = crudCollections[collection];
	if (!collectionConfig) {
		return null;
	}
	if (collectionConfig.ownedByUser) {
		filter.userId = session?.userId;
	}
	// @ts-expect-error  TODO: make TS happy about this
	return prisma[collection].findMany({ where: filter });
};
