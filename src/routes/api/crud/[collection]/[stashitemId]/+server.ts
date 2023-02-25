import { error, json, type RequestHandler } from '@sveltejs/kit';
import db, { AllowedCollections } from '$db/mongo';
import { ObjectId } from 'mongodb';

export const GET: RequestHandler = async ({ params }) => {
	const { collection = '', stashitemId } = params;
	if (AllowedCollections.indexOf(collection) === -1) {
		throw error(404, {
			message: 'Not found'
		});
	}
	const data = await db.collection(collection).findOne({ _id: new ObjectId(stashitemId) });
	return json(data);
};
