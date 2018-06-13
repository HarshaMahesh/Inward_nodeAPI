var mongoose        = require('../../DBSchema/SchemaMapper');
var eTransferSchema 		= mongoose.model('eTransfer');

var eTransferController = function() {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var eTransfer = new eTransferSchema({
                fromHospital: data.fromHospital,
                toHospital: data.toHospital,
                reason: data.reason,
                treatment: data.treatment,
                date: data.date,
                nameGuardian: data.nameGuardian,
                addressGuardian: data.addressGuardian,

            });
            eTransfer.save().then(() => {
                resolve({status: 200, message: "Added new External Transfer"});
            }).catch(err => {
                reject({status: 500, message: "Error in Transfer Adding:- " + err});
            })
        })

    }

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            eTransferSchema.find().exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error in All Transfer Search:- " + err});
            })
        })
    }

    this.search = (id) => {
        return new Promise((resolve, reject) => {
            eTransferSchema.find({BHTNo: id}).exec().then(user => {
                resolve({status: 200, data: user});
            }).catch(err => {
                reject({status: 500, message: "Error in single Transfer Search:- " + err});
            })
        })
    }
    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            eTransferSchema.remove({BHTNo: id}).then(() => {
                resolve({status: 200, message: "remove Transfer details"});
            }).catch(err => {
                reject({status: 500, message:"Error in Transfer Delete:- " + err});
            })
        })
    }
    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            eTransferSchema.update({BHTNo: id}, data).then(() => {
                resolve({status: 200, message: "update Transfer details"});
            }).catch(err => {
                reject({status: 500, message: "Error in Transfer Update:- " + err});
            })
        })
    }
}
module.exports = new eTransferController();