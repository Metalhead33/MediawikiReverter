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
    const query = await bot.query({meta:"tokens"});

    /*for(var i = 0; i < pages.length; ++i) {
        const response = bot.rollback(pages[i],user, { markbot: true } );
        console.log("Response:\n" + JSON.stringify(response));
    }*/
    pages.forEach(async function(element) {
            // await revertPage(bot,user,element);
            const response = await bot.rollback(element,user);
            console.log("Response:\n" + JSON.stringify(response));
    });
}

export { revertPages }