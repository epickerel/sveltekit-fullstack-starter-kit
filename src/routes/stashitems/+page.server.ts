import { getList } from '$lib/crud/getList';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function ({ locals }) {
	const session = await locals.validate();
	if (!session) throw redirect(302, '/login');
	// const res = await fetch(`http://localhost:5173/api/crud/stashItems`);
	// const stashitems = await res.json();
	const stashitems = getList('stashItems', undefined, session);
	return {
		stashitems,
	};
};
