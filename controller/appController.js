'use strict';

var CustomerPreference = require('../model/appModel.js');

exports.create_customer_preference = function(req, res) {
  var new_customer_preference = new CustomerPreference(req.body);

  //handles null error 
   if(!new_customer_preference.custId ){

            res.status(400).send({ error:true, message: 'Please provide CustomerID' });

        }
else{
  
  CustomerPreference.createCustomerPreference(new_customer_preference, function(err, new_customer_preference) {
    
    if (err)
      res.send(err);
    res.json(new_customer_preference);
  });
}
};
