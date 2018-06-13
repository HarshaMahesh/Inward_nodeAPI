var mongoose        = require('../../DBSchema/SchemaMapper');
var PatientdischargeSchema 		= mongoose.model('discharge');

var dischargeController = function() {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var discharge = new PatientdischargeSchema({
                fromHospital: data.fromHospital,
                toHospital: data.toHospital,
                reason: data.reason,
                treatment: data.treatment,
                date: data.date,
                nameGuardian: data.nameGuardian,
                addressGuardian: data.addressGuardian,

            });
            discharge.save().then(() => {
                resolve({status: 200, message: "Added new patient discharge details"});
            }).catch(err => {
                reject({status: 500, message: "Error in patient discharge details Adding:- " + err});
            })
        })

    }

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            PatientdischargeSchema.find().exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error in All patient discharge details Search:- " + err});
            })
        })
    }

    this.search = (id) => {
        return new Promise((resolve, reject) => {
            PatientdischargeSchema.find({BHTNo: id}).exec().then(user => {
                resolve({status: 200, data: user});
            }).catch(err => {
                reject({status: 500, message: "Error in single patient discharge details Search:- " + err});
            })
        })
    }
    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            PatientdischargeSchema.remove({BHTNo: id}).then(() => {
                resolve({status: 200, message: "remove patient discharge details"});
            }).catch(err => {
                reject({status: 500, message:"Error in patient discharge details Delete:- " + err});
            })
        })
    }
    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            PatientdischargeSchema.update({BHTNo: id}, data).then(() => {
                resolve({status: 200, message: "update discharge details"});
            }).catch(err => {
                reject({status: 500, message: "Error in discharge Update:- " + err});
            })
        })
    }
}
module.exports = new dischargeController();