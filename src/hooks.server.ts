import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import Discord from '@auth/core/providers/discord';
import {
	DISCORD_CLIENT_ID,
	DISCORD_CLIENT_SECRET,
	GITHUB_CLIENT_ID,
	GITHUB_CLIENT_SECRET
} from '$env/static/private';
import { startMongo } from '$db/mongo';
import type { Handle } from '@sveltejs/kit';

startMongo().then(() => {
	console.log('Mongo started');
});

const discordProfile = Discord({
	clientId: DISCORD_CLIENT_ID,
	clientSecret: DISCORD_CLIENT_SECRET
});

const githubProfile = GitHub({
	clientId: GITHUB_CLIENT_ID,
	clientSecret: GITHUB_CLIENT_SECRET
});

// TODO: replace with Lucia?
export const handle: Handle = SvelteKitAuth({
	//@ts-ignore TODO remove this when a fix, not a TS-fooler, becomes available https://github.com/nextauthjs/next-auth/issues/6174
	providers: [discordProfile, githubProfile]
});
