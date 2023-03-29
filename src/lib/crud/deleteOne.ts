import type { Prisma } from '@prisma/client';
import { deleteMetaData } from '$lib/db/helpers/deleteMetaData';
import { updateOne } from './updateOne';

export const deleteOne = async (modelName: Prisma.ModelName, id: string, userId = '') => {
	return updateOne(modelName, id, { meta: deleteMetaData(userId || '') }, userId);
};
