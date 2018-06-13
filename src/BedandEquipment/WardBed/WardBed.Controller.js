var mongoose        = require('../../DBSchema/SchemaMapper');
var WardBedSchema 		= mongoose.model('WardBed');

var WardBedController = function() {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var wardBed = new WardBedSchema({
                bedNumber: data.bedNumber,
                bedType: data.bedType,
                wardNumber: data.wardNumber,
                level: data.level,
                bedStatus: data.bedStatus
            });
            wardBed.save().then(() => {
                resolve({status: 200, message: "New bed added to the Ward"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })

    }

    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            WardBedSchema.update({_id: id}, data).then(() => {
                resolve({status: 200, message: "Successfully updated"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            WardBedSchema.find().exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.search = (id) => {
        return new Promise((resolve, reject) => {
            WardBedSchema.find({_id:id}).exec().then(user => {
                resolve({status: 200, data: user});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            WardBedSchema.remove({_id:id}).then(() => {
                resolve({status: 200, message: "Bed removed"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            })
        })
    }
}
module.exports = new WardBedController();