import { error, json, type RequestHandler } from '@sveltejs/kit';
import { crudModelsByCollectionPath } from '$lib/server/prisma';
import { getList } from '$lib/crud/getList';

export const GET: RequestHandler = async ({ params, locals }) => {
	const { collection = '' } = params;
	const session = await locals.validate();
	if (!session) {
		throw error(401);
	}
	if (!crudModelsByCollectionPath[collection]) {
		throw error(404, {
			message: 'Not found',
		});
	}
	const list = await getList(crudModelsByCollectionPath[collection], {}, session.userId);
	return json(list);
};
