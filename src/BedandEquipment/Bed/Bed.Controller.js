var mongoose        = require('../../DBSchema/SchemaMapper');
var BedSchema 		= mongoose.model('Bed');

var BedController = function() {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var bed = new BedSchema({
                bedNumber: data.bedNumber,
                bedType: data.bedType,
                bedStatus: data.bedStatus
            });
            bed.save().then(() => {
                resolve({status: 200, message: "New bed added"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })

    }

    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            BedSchema.update({_id: id}, data).then(() => {
                resolve({status: 200, message: "Successfully updated"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            BedSchema.find().exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.search = (id) => {
        return new Promise((resolve, reject) => {
            BedSchema.find({_id:id}).exec().then(user => {
                resolve({status: 200, data: user});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            BedSchema.remove({_id:id}).then(() => {
                resolve({status: 200, message: "Bed removed"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            })
        })
    }

}
module.exports = new BedController();