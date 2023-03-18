import { prisma, crudCollections } from '$lib/server/prisma';

export const getOne = async (collection: string, id: string, session: any = null) => {
	const collectionConfig = crudCollections[collection];
	if (!collectionConfig) {
		return null;
	}
	const filter: any = {
		id,
	};
	if (collectionConfig.ownedByUser) {
		filter.userId = session?.userId;
	}
	console.log(filter);
	// @ts-expect-error  TODO: make TS happy about this
	return prisma[collection].findFirst({ where: filter });
};
