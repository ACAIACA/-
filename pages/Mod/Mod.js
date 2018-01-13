const AV = require('../../utils/av-weapp-min.js');
const shop = require('../../model/shop.js');
/*AV.init({
  appId: 'lJ7cFjdO2QgzD3jtD6OVbVW2-gzGzoHsz',
  appKey: 'Qcx8AqdOxW1GgkLnxiRR3mFW',
});*/
Page({
  data: {
    shop: []
    //Shop:'
  },

  onReady: function () {
    // console.log(AV.User.current());
    const m = new AV.Query('shop');
    // console.log(m);
    m.descending('createdAt')
      .find()
      .then(shop => this.setData({ shop }))
      .catch(console.error);
    //console.log(shop);
  },
  change: function (e) {
    //console.log(e.target.id)
    wx.navigateTo({
         url:'../Mode/Mode?Id='+e.target.id,
        
    } );
  } 
   
}) 