import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function () {
	const res = await fetch(`http://localhost:5173/api/crud/StashItems`);
	const stashitems = await res.json();
	return {
		stashitems
	};
};
