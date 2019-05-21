'user strict';
var sql = require('./db.js');

//Task object constructor
var CustomerPreference = function(CustomerPreference){
    this.cardNo = CustomerPreference.cardNo;
    this.custId = CustomerPreference.custId;
    this.holdingAmount = CustomerPreference.holdingAmount;
    this.totalMonthlyLimit = CustomerPreference.totalMonthlyLimit;
    this.transactionLimit = CustomerPreference.transactionLimit;
    this.OptIn = CustomerPreference.OptIn;
   

};
CustomerPreference.createCustomerPreference = function createCustomerPreference(newPreference, result) {    
        sql.query("INSERT INTO CustomerPreference set ?", newPreference, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
CustomerPreference.getCustomerPreferenceById = function getCustomerPreferenceById(custId, result) {
        sql.query("Select task from CustomerPreference where custId = ? ", custId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};