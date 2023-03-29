import { Prisma } from '@prisma/client';
import { redirect } from '@sveltejs/kit';
import { getOne } from '$lib/crud/getOne';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function ({ params, locals }) {
	const { stashitemId } = params;
	const session = await locals.validate();
	if (!session) throw redirect(302, '/login');
	const stashitem = await getOne(Prisma.ModelName.StashItems, stashitemId, session.userId);
	return {
		stashitem,
	};
};
