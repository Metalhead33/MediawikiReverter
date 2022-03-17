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

const delay = ms => new Promise(res => setTimeout(res, ms));

async function revertPages(bot : mwn, user : string, pages : string[]) : Promise<void> {
    try {
        for(var i = 0; i < pages.length; ++i) {
            await delay(4000);
            console.log('Reverting edits made by ' + user + ' at page ' + pages[i] + '!');
            const response = await bot.rollback(pages[i],user, { markbot: true } );
            console.log("Response:\n" + JSON.stringify(response));
            /*pages.forEach(async function(element) {
                    // await revertPage(bot,user,element);
                    console.log('Reverting edits made by ' + user + ' at page ' + element + '!');
                    const response = await bot.rollback(element,user);
                    console.log("Response:\n" + JSON.stringify(response));
            });*/
        }
      } catch (error) {
        console.log(error);
      }
}

export { revertPages }