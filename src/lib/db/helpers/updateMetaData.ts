import type { MetaData } from '@prisma/client';

export const updateMetaData = (updatedBy = ''): Partial<MetaData> => ({
	updatedBy,
	updatedAt: new Date(),
});
