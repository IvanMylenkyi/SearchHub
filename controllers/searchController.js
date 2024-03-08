const asyncHadler = require('express-async-handler');
const { exec } = require('child_process');

const searchUrls = {
  google: `https://www.google.com/search?q=`,
  yahoo: `https://search.yahoo.com/search;_ylt=AwrEr40piellgAQAAgBXNyoA;_ylc=X1MDMjc2NjY3OQRfcgMyBGZyA3NmcARmcjIDc2ItdG9wBGdwcmlkA0ZxWnM0WVFNU05TWEF5QzhhYnRvdEEEbl9yc2x0AzAEbl9zdWdnAzEwBG9yaWdpbgNzZWFyY2gueWFob28uY29tBHBvcwMwBHBxc3RyAwRwcXN0cmwDMARxc3RybAM0BHF1ZXJ5A21lb3cEdF9zdG1wAzE3MDk4MDM4MzE-?p=`,
  bing: `https://www.bing.com/search?q=`,
  yandex: `https://www.yandex.ru/search/?text=`,
  duckduckgo: `https://duckduckgo.com/?q=`
};

const search = asyncHadler(async (req, res) => {
    const selectedSearchEngine = req.body.searchEngine;
    const searchText = req.body.text;
    const selectedUrl = searchUrls[selectedSearchEngine] + encodeURIComponent(searchText);

    function searchEngine(engineUrl){
      exec(`start ${engineUrl}`);
      res.redirect('/');
          };
      
    switch (selectedSearchEngine){
      case 'google':
        searchEngine(selectedUrl);
        break;
      case 'yandex':
        searchEngine(selectedUrl);
        break;
      case 'bing':
        searchEngine(selectedUrl);
        break;
      case 'yahoo':
        searchEngine(selectedUrl);
        break;
      case 'duckduckgo':
        searchEngine(selectedUrl);
        break;

}});


module.exports={search};