import type { Handle } from '@sveltejs/kit';
import Database from 'better-sqlite3';
import { DB_PATH } from '$env/static/private';

import { fileURLToPath } from 'url';
import { join } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(path.dirname(__filename));

const dbPath = join(__dirname, '..', '..', 'data', 'svelte.db');

console.log('dbPath', dbPath);

export const handle: Handle = async ({ event, resolve }) => {
  if (!event.locals.db) {
    // This will create the database within the `db.sqlite` file.
    const db = new Database(dbPath, { verbose: console.log });

    // Set the db as our events.db variable.
    event.locals.db = db
  }

  const resp = await resolve(event);
  return resp;
};