import { error, json, type RequestHandler } from '@sveltejs/kit';
import db, { AllowedCollections } from '$db/mongo';

// List
export const GET: RequestHandler = async ({ params }) => {
	const { collection = '' } = params;
	if (AllowedCollections.indexOf(collection) === -1) {
		throw error(404, {
			message: 'Not found'
		});
	}
	const data = await db.collection(collection).find({}).toArray();
	return json(data);
};
