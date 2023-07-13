import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

let countdown = 10;

export const load = (async () => {
    setTimeout(() => {
        throw redirect(307, '/');
    }, countdown * 1000);
}) satisfies PageServerLoad;