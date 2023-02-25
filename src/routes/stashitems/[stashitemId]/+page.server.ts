import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function ({ params }) {
	const { stashitemId } = params;
	const res = await fetch(`http://localhost:5173/api/crud/StashItems/${stashitemId}`);
	const stashitem = await res.json();
	return {
		stashitem
	};
};
