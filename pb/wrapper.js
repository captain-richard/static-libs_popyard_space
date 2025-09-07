// ===== Prebid adUnits：先跑一个 desktop in-article 位 =====
var adUnits = [{
  code: 'div-gpt-ad-inarticle-desktop',           // 你的页面里要有同名 div
  mediaTypes: { banner: { sizes: [[300,250],[336,280]] } },
  bids: [
    // TODO: 拿到参数后填进去
    // { bidder: 'appnexus', params: { placementId: 'APPNEXUS_PLACEMENT_ID' }},
    // { bidder: 'pubmatic', params: { publisherId: 'PUB_ID', adSlot: 'inarticle_300x250' }},
    // { bidder: 'openx',    params: { unit: 'OPENX_UNIT_ID', delDomain: 'YOUR-openx-domain' }},
    // { bidder: 'rubicon',  params: { accountId:'ACC', siteId:'SITE', zoneId:'ZONE' }}
  ]
}];

window.pbjs = window.pbjs || {}; 
pbjs.que = pbjs.que || [];

pbjs.que.push(function() {
  pbjs.addAdUnits(adUnits);
  pbjs.setConfig({
    bidderTimeout: 1000,               // 1000–1200ms 即可
    enableSendAllBids: false
  });
  pbjs.requestBids({
    bidsBackHandler: function() {
      pbjs.setTargetingForGPTAsync();
      if (window.googletag && googletag.pubads) googletag.pubads().refresh();
    }
  });
});

