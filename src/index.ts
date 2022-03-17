import { mwn } from 'mwn';
import * as credentials from './credentials'
import * as revert from './revertPages'
import {readFileSync} from 'fs';

async function main() : Promise<void> {
    const bot = await mwn.init({
        apiUrl: credentials.apiUrl,
        username: credentials.username,
        password: credentials.password,
        userAgent: 'Metalhead33\'s Bost 1.0 ()',
        defaultParams: {
            assert: 'user' // ensure we're logged in
        }
    });
    const pages = readFileSync('./pagenames.txt').toString().split('\n');
    revert.revertPages(bot,credentials.targetUser,pages);
}
main().then();