import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { handleHooks } from '@lucia-auth/sveltekit';
import { auth } from '$lib/server/lucia';
// import { startMongo } from '$db/mongo';

// startMongo().then(() => {
// 	console.log('Mongo started');
// });

export const customHandle: Handle = async ({ resolve, event }) => {
	return resolve(event);
};

export const handle = sequence(handleHooks(auth), customHandle);
