var mongoose        = require('../../DBSchema/SchemaMapper');
var BedTypeSchema 		= mongoose.model('BedType');

var BedTypeController = function() {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var bedType = new BedTypeSchema({
                typeName: data.typeName
            });
            bedType.save().then(() => {
                resolve({status: 200, message: "New type added"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })

    }

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            BedTypeSchema.find().exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.search = (id) => {
        return new Promise((resolve, reject) => {
            BedTypeSchema.find({_id:id}).exec().then(user => {
                resolve({status: 200, data: user});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }
}

module.exports = new BedTypeController();