import Database from "better-sqlite3";
import type { User } from "./types";
import { DB_PATH } from '$env/static/private';

const db = new Database(DB_PATH, { verbose: console.log });

export function getUser(): User[] {
    const stmt = db.prepare("select * from user");
    const rows = stmt.all();
    return rows as User[];
}

export function save(id: number) {
    const stmt = db.prepare("insert into user (id) values (?)");
    stmt.run(id);
     getUser().find(user => user.id === id);
}
