'use strict';
module.exports = function(app) {
  var customerPreference = require('../controller/appController');

  //  Routes
  app.route('/customerPreference')
    .post(customerPreference.create_customer_preference);
   /*
   app.route('/customerPreference/:custId')
    .get(customerPreference.get_customer_preference)
    .post(customerPreference.post_transaction);
    };
    */
  };