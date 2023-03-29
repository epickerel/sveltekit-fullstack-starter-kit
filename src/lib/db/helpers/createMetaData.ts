import { type MetaData, MetaStatus } from '@prisma/client';

export const createMetaData = (createdBy = ''): Partial<MetaData> => ({
	createdBy,
	createdAt: new Date(),
	status: MetaStatus.ACTIVE,
});
