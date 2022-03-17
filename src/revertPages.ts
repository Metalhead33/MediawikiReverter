import { ApiResponse, mwn } from 'mwn';

/*async function revertPage(bot : mwn, user : string, page : string) : Promise<void> {
    const response = await bot.request({
        action: 'rollback',
        markbot: true,
        user: user,
        title: page,
    });
    console.log("Response:\n" + JSON.stringify(response));
}*/

async function revertPages(bot : mwn, user : string, pages : string[]) : Promise<void> {
    pages.forEach(async function(element) {
            // await revertPage(bot,user,element);
            const response = bot.rollback(element,user);
            console.log("Response:\n" + JSON.stringify(response));
    });
}

export { revertPages }