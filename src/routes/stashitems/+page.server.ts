import { getList } from '$lib/crud/getList';
import { Prisma } from '@prisma/client';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function ({ locals }) {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');
	const stashitems = getList(Prisma.ModelName.StashItems, undefined, session?.userId);
	return {
		stashitems,
	};
};
