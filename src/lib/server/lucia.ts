import lucia from 'lucia-auth';
import { sveltekit } from 'lucia-auth/middleware';
import { github, discord } from '@lucia-auth/oauth/providers';
import prismaAdapter from '@lucia-auth/adapter-prisma';
import { dev } from '$app/environment';
import { prisma } from '$lib/server/prisma';
import {
	DISCORD_CLIENT_ID,
	DISCORD_CLIENT_SECRET,
	GITHUB_CLIENT_ID,
	GITHUB_CLIENT_SECRET,
} from '$env/static/private';

export const auth = lucia({
	adapter: prismaAdapter(prisma),
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	transformUserData: (userData) => {
		return {
			userId: userData.id,
			username: userData.username,
			name: userData.name,
		};
	},
});

export const githubAuth = github(auth, {
	clientId: GITHUB_CLIENT_ID,
	clientSecret: GITHUB_CLIENT_SECRET,
});

export const discordAuth = discord(auth, {
	clientId: DISCORD_CLIENT_ID,
	clientSecret: DISCORD_CLIENT_SECRET,
	redirectUri: 'http://localhost:5173/api/oauth/discord',
});

export type Auth = typeof auth;
