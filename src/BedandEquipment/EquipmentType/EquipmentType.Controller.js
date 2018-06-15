var mongoose        = require('../../DBSchema/SchemaMapper');
var EquipmentTypeSchema 		= mongoose.model('EquipmentType');

var EquipmenTypeController = function() {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var equipmentType = new EquipmentTypeSchema({
                typeName: data.typeName
            });
            equipmentType.save().then(() => {
                resolve({status: 200, message: "New type added"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })

    }

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            EquipmentTypeSchema.find().exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.search = (id) => {
        return new Promise((resolve, reject) => {
            EquipmentTypeSchema.find({_id:id}).exec().then(user => {
                resolve({status: 200, data: user});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }
}

module.exports = new EquipmenTypeController();