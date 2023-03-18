import { error, json, type RequestHandler } from '@sveltejs/kit';
import { getOne } from '$lib/crud/getOne';
import { crudCollections } from '$lib/server/prisma';

export const GET: RequestHandler = async ({ params, locals }) => {
	const { collection = '', id = '' } = params;
	const session = await locals.validate();
	if (!session) {
		throw error(401);
	}
	if (!crudCollections[collection]) {
		throw error(404, {
			message: 'Not found',
		});
	}
	const data = await getOne(collection, id);
	return json(data);
};
