// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_NEWS_SEARCH_KEY'] = 'dummy';
  process.env['AZURE_SUBSCRIPTION_ID'] = '0b1f6471-1bf0-4dda-aec3-cb9272f09590';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://api.cognitive.microsoft.com:443')
  .get('/bing/v7.0/news/search?q=Obama')
  .reply(200, "{\"_type\": \"News\", \"readLink\": \"https:\\/\\/api.cognitive.microsoft.com\\/api\\/v7\\/news\\/search?q=Obama\", \"totalEstimatedMatches\": 2260000, \"sort\": [{\"_type\": \"SortValue\", \"name\": \"Best match\", \"id\": \"relevance\", \"isSelected\": true, \"url\": \"https:\\/\\/api.cognitive.microsoft.com\\/api\\/v7\\/news\\/search?q=Obama\"}, {\"_type\": \"SortValue\", \"name\": \"Most recent\", \"id\": \"date\", \"isSelected\": false, \"url\": \"https:\\/\\/api.cognitive.microsoft.com\\/api\\/v7\\/news\\/search?q=Obama&sortby=date\"}], \"value\": [{\"_type\": \"NewsArticle\", \"name\": \"Trump says he'll militarize local police, takes jab at Obama administration\", \"url\": \"https:\\/\\/www.washingtonpost.com\\/video\\/politics\\/trump-says-hell-militarize-local-police-takes-jab-at-obama-administration\\/2017\\/12\\/15\\/1c1c4474-e1b2-11e7-b2e9-8c636f076c76_video.html\", \"image\": {\"_type\": \"ImageObject\", \"thumbnail\": {\"_type\": \"ImageObject\", \"contentUrl\": \"https:\\/\\/www.bing.com\\/th?id=ON.FA5875F4D485DD718FD7EF2F45A0B899&pid=News\", \"width\": 700, \"height\": 393}}, \"description\": \"President Trump takes a jab at the Obama administration, while talking to FBI graduates on Dec. 15 about militarizing the local police. President Trump takes a jab at the Obama administration, while talking to FBI graduates on Dec. 15 about militarizing ...\", \"about\": [{\"_type\": \"Thing\", \"readLink\": \"https:\\/\\/api.cognitive.microsoft.com\\/api\\/v7\\/entities\\/1a466af2-ed23-25bd-794d-1ca925e4681b\", \"name\": \"Donald Trump\"}], \"provider\": [{\"_type\": \"Organization\", \"name\": \"Washington Post\", \"image\": {\"_type\": \"ImageObject\", \"thumbnail\": {\"_type\": \"ImageObject\", \"contentUrl\": \"https:\\/\\/www.bing.com\\/th?id=ON.SIR12140453251a5b8e140a4a07def415e616d000a0&pid=News\"}}}], \"datePublished\": \"2017-12-16T00:27:00.0000000Z\"}, {\"_type\": \"NewsArticle\", \"name\": \"Trump is dismantling Obama's biggest legacy — here are the most significant changes he's made\", \"url\": \"http:\\/\\/www.businessinsider.com\\/environmental-rules-trump-reversing-2017-10\", \"image\": {\"_type\": \"ImageObject\", \"thumbnail\": {\"_type\": \"ImageObject\", \"contentUrl\": \"https:\\/\\/www.bing.com\\/th?id=ON.89331EAC69AB044C2E4C2433429F65C8&pid=News\", \"width\": 700, \"height\": 525}}, \"description\": \"President Donald Trump has said he believes climate change is a hoax. So it's no surprise that Trump's EPA administrator, Scott Pruitt, is working to roll back the Clean Power Plan — former President Barack Obama's signature pollution-curbing legislation.\", \"about\": [{\"_type\": \"Thing\", \"readLink\": \"https:\\/\\/api.cognitive.microsoft.com\\/api\\/v7\\/entities\\/1a466af2-ed23-25bd-794d-1ca925e4681b\", \"name\": \"Donald Trump\"}, {\"_type\": \"Thing\", \"readLink\": \"https:\\/\\/api.cognitive.microsoft.com\\/api\\/v7\\/entities\\/d9e878e2-c8fe-570f-ea3d-e390ade1d44a\", \"name\": \"Reversing\"}], \"mentions\": [{\"_type\": \"Thing\", \"name\": \"Donald Trump\"}, {\"_type\": \"Thing\", \"name\": \"Reversing\"}, {\"_type\": \"Thing\", \"name\": \"Environment, health and safety\"}], \"provider\": [{\"_type\": \"Organization\", \"name\": \"Business Insider\", \"image\": {\"_type\": \"ImageObject\", \"thumbnail\": {\"_type\": \"ImageObject\", \"contentUrl\": \"https:\\/\\/www.bing.com\\/th?id=ON.SIR12140506abe6555b2cfea859e73d1b0d80e2e57d&pid=News\"}}}], \"datePublished\": \"2017-12-15T23:43:00.0000000Z\"}, {\"_type\": \"NewsArticle\", \"name\": \"Here’s How Both Obama and Trump Stoked the Saudi-Iranian Rivalry\", \"url\": \"http:\\/\\/foreignpolicy.com\\/2017\\/12\\/07\\/heres-how-both-obama-and-trump-stoked-the-saudi-iranian-rivalry\\/\", \"image\": {\"_type\": \"ImageObject\", \"thumbnail\": {\"_type\": \"ImageObject\", \"contentUrl\": \"https:\\/\\/www.bing.com\\/th?id=ON.BAF17DF7203EBF92BF448872F3584093&pid=News\", \"width\": 700, \"height\": 466}}, \"description\": \"From the surprise resignation (then un-resignation) of Lebanese Prime Minister Saad Hariri to the intra-Gulf crisis with Qatar to the battle for influence in post-Islamic State Iraq and the vicious civil wars in Yemen and Syria, the signs of the regional ...\", \"about\": [{\"_type\": \"Thing\", \"readLink\": \"https:\\/\\/api.cognitive.microsoft.com\\/api\\/v7\\/entities\\/1a466af2-ed23-25bd-794d-1ca925e4681b\", \"name\": \"Donald Trump\"}, {\"_type\": \"Thing\", \"readLink\": \"https:\\/\\/api.cognitive.microsoft.com\\/api\\/v7\\/entities\\/502b5268-992d-26c9-a0d8-6f206338406e\", \"name\": \"Iran\"}, {\"_type\": \"Thing\", \"readLink\": \"https:\\/\\/api.cognitive.microsoft.com\\/api\\/v7\\/entities\\/672bc136-22f9-3750-0459-2fbd2340f892\", \"name\": \"Saudi Arabia\"}], \"provider\": [{\"_type\": \"Organization\", \"name\": \"Foreign Policy\", \"image\": {\"_type\": \"ImageObject\", \"thumbnail\": {\"_type\": \"ImageObject\", \"contentUrl\": \"https:\\/\\/www.bing.com\\/th?id=ON.SIR12140232a57da144ca3b7f2e6424085e9a00ef50&pid=News\"}}}], \"datePublished\": \"2017-12-15T23:59:00.0000000Z\", \"category\": \"World\"}, {\"_type\": \"NewsArticle\", \"name\": \"The Decline In Gun Sales Isn't Just About Obama\", \"url\": \"https:\\/\\/www.huffingtonpost.com\\/entry\\/the-decline-in-gun-sales-isnt-just-about-obama_us_5a342a71e4b0ff955ad2d270\", \"image\": {\"_type\": \"ImageObject\", \"thumbnail\": {\"_type\": \"ImageObject\", \"contentUrl\": \"https:\\/\\/www.bing.com\\/th?id=ON.C1797EE0E3E33DE1D3DB72739D834D86&pid=News\", \"width\": 700, \"height\": 366}}, \"description\": \"For those folks in the gun violence prevention (GVP) movement who have been lamenting the pro-gun attitudes of the Oval Office subtenant and his buddies on Capitol Hill, as my beloved grandmother used to say, I got news for you. And the news is that the ...\", \"about\": [{\"_type\": \"Thing\", \"readLink\": \"https:\\/\\/api.cognitive.microsoft.com\\/api\\/v7\\/entities\\/3af18923-3590-e53b-fdcd-4d1796a9a4cb\", \"name\": \"Barack Obama\"}, {\"_type\": \"Thing\", \"readLink\": \"https:\\/\\/api.cognitive.microsoft.com\\/api\\/v7\\/entities\\/3b836fdc-e625-024e-3bb2-97fecb13838d\", \"name\": \"Gun, with Occasional Music\"}], \"provider\": [{\"_type\": \"Organization\", \"name\": \"HuffPost\", \"image\": {\"_type\": \"ImageObject\", \"thumbnail\": {\"_type\": \"ImageObject\", \"contentUrl\": \"https:\\/\\/www.bing.com\\/th?id=ON.SIR1214030495ec266b244de718b80c652a08af06fa&pid=News\"}}}], \"datePublished\": \"2017-12-15T19:56:00.0000000Z\"}, {\"_type\": \"NewsArticle\", \"name\": \"Obama shows up with presents and students' reactions are priceless\", \"url\": \"https:\\/\\/www.cbsnews.com\\/videos\\/obama-shows-up-with-presents-and-students-reactions-are-priceless\\/\", \"image\": {\"_type\": \"ImageObject\", \"thumbnail\": {\"_type\": \"ImageObject\", \"contentUrl\": \"https:\\/\\/www.bing.com\\/th?id=ON.6D38D811412730EF87A99F69CFEB693E&pid=News\", \"width\": 220, \"height\": 140}}, \"description\": \"December 15, 2017, 5:35 PM | \\\"There's no better time than the holidays to reach out and give back to our communities,\\\" former President Obama said, showing up with a bundle of presents to surprise a group of middle schoolers.\", \"about\": [{\"_type\": \"Thing\", \"readLink\": \"https:\\/\\/api.cognitive.microsoft.com\\/api\\/v7\\/entities\\/3af18923-3590-e53b-fdcd-4d1796a9a4cb\", \"name\": \"Barack Obama\"}], \"provider\": [{\"_type\": \"Organization\", \"name\": \"CBS News\", \"image\": {\"_type\": \"ImageObject\", \"thumbnail\": {\"_type\": \"ImageObject\", \"contentUrl\": \"https:\\/\\/www.bing.com\\/th?id=ON.SIR12140332962b085e15dbfa2cbd2aed476c570213&pid=News\"}}}], \"datePublished\": \"2017-12-15T23:26:00.0000000Z\", \"video\": {\"_type\": \"VideoObject\", \"name\": \"Obama shows up with presents and students' reactions are priceless\", \"thumbnailUrl\": \"https:\\/\\/www.bing.com\\/th?id=ON.5E92CE6E7E9335146A8603113C5B0D7B&pid=News\", \"thumbnail\": {\"_type\": \"ImageObject\", \"width\": 480, \"height\": 252}}}, {\"_type\": \"NewsArticle\", \"name\": \"Donald Trump Jr. blasted or tweet about 'Obama's FCC' Chair\", \"url\": \"https:\\/\\/www.usatoday.com\\/videos\\/news\\/nation\\/2017\\/12\\/15\\/donald-trump-jr.-blasted-tweet-obamas-fcc-chair\\/108623970\\/\", \"image\": {\"_type\": \"ImageObject\", \"thumbnail\": {\"_type\": \"ImageObject\", \"contentUrl\": \"https:\\/\\/www.bing.com\\/th?id=ON.AEC3FE26DB8DF866D7305CE98992C7B7&pid=News\", \"width\": 700, \"height\": 393}}, \"description\": \"The FCC’s repeal of the neutrality rule garnered a tweet from Donald Trump Jr. who managed to spread a few falsehoods. Nathan Rousseau Smith (@FantasticMrNate) shows us. Buzz60\", \"about\": [{\"_type\": \"Thing\", \"readLink\": \"https:\\/\\/api.cognitive.microsoft.com\\/api\\/v7\\/entities\\/3af18923-3590-e53b-fdcd-4d1796a9a4cb\", \"name\": \"Barack Obama\"}, {\"_type\": \"Thing\", \"readLink\": \"https:\\/\\/api.cognitive.microsoft.com\\/api\\/v7\\/entities\\/86ecbc1e-6552-ee1a-cb72-2a2f005be44a\", \"name\": \"Family Christian Center\"}, {\"_type\": \"Thing\", \"readLink\": \"https:\\/\\/api.cognitive.microsoft.com\\/api\\/v7\\/entities\\/22ce9172-177b-8327-d10a-fdb1e224303f\", \"name\": \"Chair\"}], \"provider\": [{\"_type\": \"Organization\", \"name\": \"USA Today\"}], \"datePublished\": \"2017-12-15T16:12:00.0000000Z\"}, {\"_type\": \"NewsArticle\", \"name\": \"Net neutrality vote: FCC repeals Obama-era Internet rules\", \"url\": \"http:\\/\\/www.foxnews.com\\/politics\\/2017\\/12\\/14\\/fcc-votes-to-repeal-obama-era-net-neutrality-rules-after-security-threat.html\", \"image\": {\"_type\": \"ImageObject\", \"thumbnail\": {\"_type\": \"ImageObject\", \"contentUrl\": \"https:\\/\\/www.bing.com\\/th?id=ON.0F4146E78499E659885E8A7128153194&pid=News\", \"width\": 700, \"height\": 393}}, \"description\": \"The Federal Communications Commission voted Thursday to repeal Obama-era net neutrality rules, a move that Republicans say would preserve a “free and open” Internet but has triggered protests from consumer groups, Internet companies and Democratic ...\", \"about\": [{\"_type\": \"Thing\", \"readLink\": \"https:\\/\\/api.cognitive.microsoft.com\\/api\\/v7\\/entities\\/641dfd98-462e-f0b0-9d52-86e8e5d8ca11\", \"name\": \"U.S. Federal Communications Commission\"}], \"provider\": [{\"_type\": \"Organization\", \"name\": \"Fox News\", \"image\": {\"_type\": \"ImageObject\", \"thumbnail\": {\"_type\": \"ImageObject\", \"contentUrl\": \"https:\\/\\/www.bing.com\\/th?id=ON.SIR1214051199d1febfbc0f579a6c3bb3559bbe7ace&pid=News\"}}}], \"datePublished\": \"2017-12-14T21:19:00.0000000Z\", \"category\": \"Politics\"}, {\"_type\": \"NewsArticle\", \"name\": \"Trump Repeals Obama-Era Rule That Allowed H1-B Visa Holder's Spouses to Work\", \"url\": \"http:\\/\\/fortune.com\\/2017\\/12\\/15\\/trump-repeals-obama-era-rule-that-allowed-h1-b-visa-holders-spouses-to-work\\/\", \"image\": {\"_type\": \"ImageObject\", \"thumbnail\": {\"_type\": \"ImageObject\", \"contentUrl\": \"https:\\/\\/www.bing.com\\/th?id=ON.68A3BBED71B83977E1EE2A19709E7774&pid=News\", \"width\": 700, \"height\": 393}}, \"description\": \"The Trump administration issued new rules for H1-B visa holders Thursday, specifically repealing an Obama-era rule that allowed the spouses of H1-B visa holders to work in the United States. The rule specifically allowed H-4 visa holders whose spouses were ...\", \"about\": [{\"_type\": \"Thing\", \"readLink\": \"https:\\/\\/api.cognitive.microsoft.com\\/api\\/v7\\/entities\\/1a466af2-ed23-25bd-794d-1ca925e4681b\", \"name\": \"Donald Trump\"}, {\"_type\": \"Thing\", \"readLink\": \"https:\\/\\/api.cognitive.microsoft.com\\/api\\/v7\\/entities\\/7c0f5fd4-9175-8cbe-5f78-11b28a5218c3\", \"name\": \"Fortune\"}, {\"_type\": \"Thing\", \"readLink\": \"https:\\/\\/api.cognitive.microsoft.com\\/api\\/v7\\/entities\\/244d15e4-2085-2b81-baea-10cd484d0d19\", \"name\": \"Spouse\"}], \"mentions\": [{\"_type\": \"Thing\", \"name\": \"Donald Trump\"}, {\"_type\": \"Thing\", \"name\": \"Fortune\"}, {\"_type\": \"Thing\", \"name\": \"Spouse\"}], \"provider\": [{\"_type\": \"Organization\", \"name\": \"FORTUNE\", \"image\": {\"_type\": \"ImageObject\", \"thumbnail\": {\"_type\": \"ImageObject\", \"contentUrl\": \"https:\\/\\/www.bing.com\\/th?id=ON.SIR1214050815e5985b5402b180ad0ff3cdd458ddfd&pid=News\"}}}], \"datePublished\": \"2017-12-15T20:26:00.0000000Z\"}, {\"_type\": \"NewsArticle\", \"name\": \"Whose holiday cookie is the best? Michelle Obama, Taylor Swift and Mariah Carey face off\", \"url\": \"https:\\/\\/www.msn.com\\/en-us\\/foodanddrink\\/tipsandtricks\\/whose-holiday-cookie-is-the-best-michelle-obama-taylor-swift-and-mariah-carey-face-off\\/ss-BBGJXZ9\", \"image\": {\"_type\": \"ImageObject\", \"thumbnail\": {\"_type\": \"ImageObject\", \"contentUrl\": \"https:\\/\\/www.bing.com\\/th?id=ON.B3CB9CE6CF7C2F32EE64F88AD9A7EC30&pid=News\", \"width\": 700, \"height\": 525}}, \"description\": \"In my quest to find the best holiday baked goods, I pitted three celebrity Christmas cookie recipes against each other in the ultimate star-studded cookie showdown: These three cookies were completely different from one another, but after baking and ...\", \"about\": [{\"_type\": \"Thing\", \"readLink\": \"https:\\/\\/api.cognitive.microsoft.com\\/api\\/v7\\/entities\\/98004a38-a3ea-b902-b6d3-687b30b54353\", \"name\": \"Taylor Swift\"}, {\"_type\": \"Thing\", \"readLink\": \"https:\\/\\/api.cognitive.microsoft.com\\/api\\/v7\\/entities\\/f724f907-a60a-a38c-b3bb-1cabb3c03176\", \"name\": \"Mariah Carey\"}, {\"_type\": \"Thing\", \"readLink\": \"https:\\/\\/api.cognitive.microsoft.com\\/api\\/v7\\/entities\\/9f586966-d60b-c059-e159-55c181503a84\", \"name\": \"Michelle Obama\"}], \"provider\": [{\"_type\": \"Organization\", \"name\": \"INSIDER on MSN.com\", \"image\": {\"_type\": \"ImageObject\", \"thumbnail\": {\"_type\": \"ImageObject\", \"contentUrl\": \"https:\\/\\/www.bing.com\\/th?id=ON.SIR1214025914f1a20a34a9356b91dd8b860925478c&pid=News\"}}}], \"datePublished\": \"2017-12-16T00:02:00.0000000Z\"}, {\"_type\": \"NewsArticle\", \"name\": \"Obama Claus Comes to Town: Barack Rocks a Santa Hat to Visit Children at D.C. Boys & Girls Club\", \"url\": \"http:\\/\\/people.com\\/politics\\/obama-santa-hat-children-dc-boys-and-girls-club\\/\", \"image\": {\"_type\": \"ImageObject\", \"thumbnail\": {\"_type\": \"ImageObject\", \"contentUrl\": \"https:\\/\\/www.bing.com\\/th?id=ON.58E418E3FD3F61A63FB0F256CB4B2C9F&pid=News\", \"width\": 700, \"height\": 367}}, \"description\": \"Barack Obama made a very stylish Saint Nick as he rocked a festive Santa hat and his now signature leather jacket to deliver dozens of holiday gifts to middle school students at a branch of the Boys & Girls Clubs of Greater Washington on Thursday.\", \"about\": [{\"_type\": \"Thing\", \"readLink\": \"https:\\/\\/api.cognitive.microsoft.com\\/api\\/v7\\/entities\\/d6f34def-ffce-443e-f00f-e2c8329ebe6b\", \"name\": \"Santa Claus\"}, {\"_type\": \"Thing\", \"readLink\": \"https:\\/\\/api.cognitive.microsoft.com\\/api\\/v7\\/entities\\/9f586966-d60b-c059-e159-55c181503a84\", \"name\": \"Michelle Obama\"}, {\"_type\": \"Thing\", \"readLink\": \"https:\\/\\/api.cognitive.microsoft.com\\/api\\/v7\\/entities\\/c0b725d2-befc-df93-915e-dd0fc857a1a6\", \"name\": \"People\"}], \"mentions\": [{\"_type\": \"Thing\", \"name\": \"Santa Claus\"}, {\"_type\": \"Thing\", \"name\": \"Michelle Obama\"}, {\"_type\": \"Thing\", \"name\": \"People\"}], \"provider\": [{\"_type\": \"Organization\", \"name\": \"People\", \"image\": {\"_type\": \"ImageObject\", \"thumbnail\": {\"_type\": \"ImageObject\", \"contentUrl\": \"https:\\/\\/www.bing.com\\/th?id=ON.SIR1214030192b89d68d988233e40760714186e5e05&pid=News\"}}}], \"datePublished\": \"2017-12-15T17:25:00.0000000Z\", \"video\": {\"_type\": \"VideoObject\", \"name\": \"Obama Claus Comes to Town: Barack Rocks a Santa Hat to Visit Children at D.C. Boys & Girls Club\", \"thumbnailUrl\": \"https:\\/\\/www.bing.com\\/th?id=ON.58E418E3FD3F61A63FB0F256CB4B2C9F&pid=News\", \"embedHtml\": \"<iframe src='http:\\/\\/players.brightcove.net\\/416418724\\/rJSWQ1RE_default\\/index.html?videoId=5441709952001' allowfullscreen frameborder=0><\\/iframe>\", \"allowHttpsEmbed\": true, \"thumbnail\": {\"_type\": \"ImageObject\", \"width\": 480, \"height\": 252}}}]}", { 'cache-control': 'private, max-age=0',
  'content-length': '14976',
  'content-type': 'application/json; charset=utf-8',
  expires: 'Sat, 16 Dec 2017 00:35:38 GMT',
  vary: 'Accept-Encoding',
  server: 'Microsoft-HTTPAPI/2.0',
  p3p: 'CP="NON UNI COM NAV STA LOC CURa DEVa PSAa PSDa OUR IND"',
  'bingapis-traceid': '2F8A8ACC950949828A57927416F4371D',
  'bingapis-sessionid': '75BCF827B9A14A08859512339DA53BC7',
  'x-msedge-clientid': '34A874CDDF48656205037F97DEDF6487',
  'x-msapi-userstate': '69ba',
  'bingapis-market': 'en-US',
  'x-msedge-ref': 'Ref A: 2F8A8ACC950949828A57927416F4371D Ref B: CO1EDGE0106 Ref C: 2017-12-16T00:36:38Z',
  'apim-request-id': '00b4d560-c03a-4048-8371-3762e5475428',
  'strict-transport-security': 'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options': 'nosniff',
  date: 'Sat, 16 Dec 2017 00:36:38 GMT',
  connection: 'close' });
 return result; }]];