import type { PageLoad } from "./$types";
import { restrictPageToUser } from "$lib/util/auth";

export const load = (async ({ params }) => {
	return await restrictPageToUser(params);
}) satisfies PageLoad;