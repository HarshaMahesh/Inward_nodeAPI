var mongoose        = require('../DBSchema/SchemaMapper');
var PatientSchema 		= mongoose.model('Patient');

var PatientController = function() {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var patient = new PatientSchema({
                BHTNo: data.BHTNo,
                patientName: data.patientName,
                wardNo: data.wardNo,
                bedNo: data.bedNo,
                admittedDate: data.admittedDate,
                admittedTime: data.admittedTime,

            });
            patient.save().then(() => {
                resolve({status: 200, message: "Added new Patient"});
            }).catch(err => {
                reject({status: 500, message: "Error in patient Adding:- " + err});
            })
        })

    }

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            PatientSchema.find().exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error in All patient Search:- " + err});
            })
        })
    }

    this.search = (id) => {
        return new Promise((resolve, reject) => {
            PatientSchema.find({BHTNo: id}).exec().then(user => {
                resolve({status: 200, data: user});
            }).catch(err => {
                reject({status: 500, message: "Error in single patient Search:- " + err});
            })
        })
    }
    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            PatientSchema.remove({BHTNo: id}).then(() => {
                resolve({status: 200, message: "remove patient details"});
            }).catch(err => {
                reject({status: 500, message:"Error in patient Delete:- " + err});
            })
        })
    }
    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            PatientSchema.update({BHTNo: id}, data).then(() => {
                resolve({status: 200, message: "update patient details"});
            }).catch(err => {
                reject({status: 500, message: "Error in patient Update:- " + err});
            })
        })
    }
}
module.exports = new PatientController();