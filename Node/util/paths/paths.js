import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const reactPath = path.join(__dirname, "..", "..", "..", "React", "dist");

export const usersPath = path.join(__dirname, "..", "..", "data", "users.json");