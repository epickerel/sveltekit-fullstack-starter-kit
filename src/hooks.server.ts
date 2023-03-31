import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { auth } from '$lib/server/lucia';

export const customHandle: Handle = async ({ resolve, event }) => {
	return resolve(event);
};

export const defaultHandle: Handle = async ({ resolve, event }) => {
	event.locals.auth = auth.handleRequest(event);
	return await resolve(event);
};

export const handle: Handle = sequence(defaultHandle, customHandle);
