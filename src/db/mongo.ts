import { MongoClient } from 'mongodb';
import { MONGODB_URI } from '$env/static/private';

const client = new MongoClient(MONGODB_URI);

export function startMongo(): Promise<MongoClient> {
	return client.connect();
}

export const AllowedCollections = ['StashItems'];

export default client.db();
