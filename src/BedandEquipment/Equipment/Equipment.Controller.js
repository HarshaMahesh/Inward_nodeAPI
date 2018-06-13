var mongoose        = require('../../DBSchema/SchemaMapper');
var EquipmentSchema 		= mongoose.model('Equipment');

var EquipmentController = function() {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var equipment = new EquipmentSchema({
                equipName: data.equipName,
                quantity: data.quantity
            });
            equipment.save().then(() => {
                resolve({status: 200, message: "New equipment added"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })

    }

    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            EquipmentSchema.update({_id: id}, data).then(() => {
                resolve({status: 200, message: "Successfully updated"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            EquipmentSchema.find().exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.search = (id) => {
        return new Promise((resolve, reject) => {
            EquipmentSchema.find({_id:id}).exec().then(user => {
                resolve({status: 200, data: user});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            EquipmentSchema.remove({_id:id}).then(() => {
                resolve({status: 200, message: "Bed removed"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            })
        })
    }
}
module.exports = new EquipmentController();