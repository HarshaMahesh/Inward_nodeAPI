var mongoose        = require('../../DBSchema/SchemaMapper');
var iTransferSchema 		= mongoose.model('iTransfer');

var eTransferController = function() {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var iTransfer = new iTransferSchema({
                transferWard: data.transferWard,
                reason: data.reason,
                treatment: data.treatment,
                date: data.date,

            });
            iTransfer.save().then(() => {
                resolve({status: 200, message: "Added new Internal Transfer"});
            }).catch(err => {
                reject({status: 500, message: "Error in Transfer Adding:- " + err});
            })
        })

    }

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            iTransferSchema.find().exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error in All Transfer Search:- " + err});
            })
        })
    }

    this.search = (id) => {
        return new Promise((resolve, reject) => {
            iTransferSchema.find({BHTNo: id}).exec().then(user => {
                resolve({status: 200, data: user});
            }).catch(err => {
                reject({status: 500, message: "Error in single Transfer Search:- " + err});
            })
        })
    }
    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            iTransferSchema.remove({BHTNo: id}).then(() => {
                resolve({status: 200, message: "remove Transfer details"});
            }).catch(err => {
                reject({status: 500, message:"Error in Transfer Delete:- " + err});
            })
        })
    }
    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            iTransferSchema.update({BHTNo: id}, data).then(() => {
                resolve({status: 200, message: "update Transfer details"});
            }).catch(err => {
                reject({status: 500, message: "Error in Transfer Update:- " + err});
            })
        })
    }
}
module.exports = new eTransferController();