import { error, json, type RequestHandler } from '@sveltejs/kit';
import { crudCollections } from '$lib/server/prisma';
import { getList } from '$lib/crud/getList';

// List
export const GET: RequestHandler = async ({ params, locals }) => {
	const { collection = '' } = params;
	const session = await locals.validate();
	if (!session) {
		throw error(401);
	}
	if (!crudCollections[collection]) {
		throw error(404, {
			message: 'Not found',
		});
	}
	const list = await getList(collection, {});
	return json(list);
};
