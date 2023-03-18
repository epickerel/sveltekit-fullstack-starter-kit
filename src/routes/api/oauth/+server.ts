import type { RequestHandler } from './$types';
import { discordAuth, githubAuth } from '$lib/server/lucia';

export const GET: RequestHandler = async ({ url, cookies }) => {
	console.log('oauth GET');
	const provider = url.searchParams.get('provider');
	if (provider === 'github') {
		const [url, state] = await githubAuth.getAuthorizationUrl();
		console.log(url, state);
		cookies.set('oauth_state', state, {
			path: '/',
			maxAge: 60 * 60,
		});
		return new Response(null, {
			status: 302,
			headers: {
				location: url.toString(),
			},
		});
	} else if (provider === 'discord') {
		const [url, state] = await discordAuth.getAuthorizationUrl();
		console.log(url, state);
		cookies.set('oauth_state', state, {
			path: '/',
			maxAge: 60 * 60,
		});
		return new Response(null, {
			status: 302,
			headers: {
				location: url.toString(),
			},
		});
	}
	return new Response(null, {
		status: 400,
	});
};
