import { MetaStatus, Prisma } from '@prisma/client';
import { crudModels } from '$lib/server/prisma';
import { updateMetaData } from '$lib/db/helpers/updateMetaData';

export const updateOne = async (
	modelName: Prisma.ModelName,
	id: string,
	data: any,
	userId = ''
) => {
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
	return prismaCollection.update({
		where: filter,
		data: {
			...data,
			meta: {
				...data?.meta,
				...updateMetaData(userId),
			},
		},
	});
};
