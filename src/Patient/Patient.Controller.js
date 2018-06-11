var mongoose        = require('../DBSchema/SchemaMapper');
var PatientSchema 		= mongoose.model('Patient');

var PatientController = function() {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var patient = new PatientSchema({
                userName: data.userName,
                address: data.adddress
            });
            patient.save().then(() => {
                resolve({status: 200, message: "Added new Patient"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })

    }
}
module.exports = new PatientController();