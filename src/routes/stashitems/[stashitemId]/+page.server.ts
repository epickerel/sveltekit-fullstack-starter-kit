import { redirect } from '@sveltejs/kit';
import { getOne } from '$lib/crud/getOne';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function ({ params, locals }) {
	const { stashitemId } = params;
	const session = await locals.validate();
	if (!session) throw redirect(302, '/login');
	// const res = await fetch(`http://localhost:5173/api/crud/stashItems/${stashitemId}`);
	// const stashitem = await res.json();
	const stashitem = await getOne('stashItems', stashitemId, session);
	return {
		stashitem,
	};
};
