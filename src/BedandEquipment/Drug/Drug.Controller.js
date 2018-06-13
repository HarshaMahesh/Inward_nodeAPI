var mongoose        = require('../../DBSchema/SchemaMapper');
var DrugSchema 		= mongoose.model('Drug');

var DrugController = function() {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var drug = new DrugSchema({
                drugName: data.drugName,
                quantity: data.quantity
            });
            drug.save().then(() => {
                resolve({status: 200, message: "New drug added"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })

    }

    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            DrugSchema.update({_id: id}, data).then(() => {
                resolve({status: 200, message: "Successfully updated"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            DrugSchema.find().exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.search = (id) => {
        return new Promise((resolve, reject) => {
            DrugSchema.find({_id:id}).exec().then(user => {
                resolve({status: 200, data: user});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            DrugSchema.remove({_id:id}).then(() => {
                resolve({status: 200, message: "Bed removed"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            })
        })
    }
}
module.exports = new DrugController();