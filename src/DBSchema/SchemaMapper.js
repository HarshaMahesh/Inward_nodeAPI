var mongoose 		= require('mongoose');
const Schema        = mongoose.Schema;

const PatientSchema = new Schema({
    userName: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    }
});

//Add new schema here

mongoose.model('Patient', PatientSchema);
//

mongoose.connect('mongodb://localhost:27017/Hospital_ward', (err) => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to the DB');
});

module.exports = mongoose;