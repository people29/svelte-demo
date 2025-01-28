import { json } from '@sveltejs/kit';
import Database from "better-sqlite3";
import { DB_PATH } from '$env/static/private';

const db = new Database(DB_PATH, { verbose: console.log });

export function GET() {
    const stmt = db.prepare("select * from user");
    const rows = stmt.all();

    return json(rows);
}

export async function POST({ request, cookies }) {
    const { id } = await request.json();

    try {
        const stmt = db.prepare("insert into user (id, name, email) values (?, ?, ?)");
        stmt.run(id, `user-${id}`, `email-${id}@mail.com`);
    } catch (e) {
        console.error(e);
    }

    return json({ id });
}