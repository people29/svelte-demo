import { getUser } from "$lib/server/db";
import type { PageServerData } from "./$types";

export const load = (() => {
    const users = getUser();

    return {
        users
    }

}) satisfies PageServerData;