import { error, json, type RequestHandler } from '@sveltejs/kit';
import { getOne } from '$lib/crud/getOne';
import { crudModelsByCollectionPath } from '$lib/server/prisma';

export const GET: RequestHandler = async ({ params, locals }) => {
	const { collection = '', id = '' } = params;
	const session = await locals.auth.validate();
	if (!session) {
		throw error(401);
	}
	if (!crudModelsByCollectionPath[collection]) {
		throw error(404, {
			message: 'Not found',
		});
	}
	const data = await getOne(crudModelsByCollectionPath[collection], id);
	return json(data);
};
