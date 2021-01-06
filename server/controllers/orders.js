var WooCommerceAPI = require('woocommerce-api');
var WooCommerce = new WooCommerceAPI({
    url: 'http://atalianshoes.com',
    consumerKey: '',
    consumerSecret: '',
    version: 'v3'
  });

module.exports.getOrders = function (req, res) {
  try {
      // WooCommerce.getAsync('/wp-json/wc/v3/orders' ).then(function(result) {
        WooCommerce.getAsync('orders' ).then(function(result) {
        res.status(200).json({
            status: true,
            res:result.toJSON()
          });
      });
  } catch (err) {
      console.log(err);
    res.status(200).json({
      status: false,
      message: 'Some thing went wrong in query'
    });
  }
}

module.exports.getOneOrder = function (req, res) {
  try {
        WooCommerce.getAsync('orders/'+req.body.id).then(function(result) {
        res.status(200).json({
            status: true,
            res:result.toJSON()
          });
      });
  } catch (err) {
    res.status(200).json({
      status: false,
      message: 'Some thing wend wrong in query'
    });
  }
}