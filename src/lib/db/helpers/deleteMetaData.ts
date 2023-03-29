import { type MetaData, MetaStatus } from '@prisma/client';

export const deleteMetaData = (deletedBy = ''): Partial<MetaData> => ({
	deletedBy,
	deletedAt: new Date(),
	status: MetaStatus.DELETED,
});
