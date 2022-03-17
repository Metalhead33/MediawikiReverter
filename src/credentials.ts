import {readFileSync} from 'fs';
const {
    apiUrl,
    username,
    password,
    targetUser
} = JSON.parse(readFileSync(process.env.AUTHLOC ? process.env.AUTHLOC : './credentials.json').toString());
export { apiUrl, username, password, targetUser }