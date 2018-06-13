var mongoose 		= require('mongoose');
const Schema        = mongoose.Schema;

const PatientSchema = new Schema({
    BHTNo:{
        type:Number,
        require:true
        },

    patientName: {
        type: String,
        require: true
    },
    wardNo: {
        type: Number,
        require: true
    },
    bedNo:{
        type:Number,
        require:true
    },
    admittedDate:{
      type:String,
      require:true
    },
    admittedTime:{
       type:String,
       require:true
    }
    }
);
const iTransferSchema = new Schema({

        transferWard:{
            type:String,
            require:true
        },

        reason: {
            type: String,
            require: true
        },
        treatment: {
            type: String,
            require: true
        },
        date:{
            type:String,
            require:true
        }

    }
);
const eTransferSchema = new Schema({

    fromHospital:{
            type:String,
            require:true
        },

    toHospital: {
            type: String,
            require: true
        },
    reason: {
            type: String,
            require: true
        },
    treatment:{
            type:String,
            require:true
        },
    date:{
        type:String,
        require:true
    },
    nameGuardian:{
        type:String,
        require:true
    },
    addressGuardian:{
        type:String,
        require:true
    }


    }
);
const PatientdischargeSchema = new Schema({

        fromHospital:{
            type:String,
            require:true
        },

        toHospital: {
            type: String,
            require: true
        },
        reason: {
            type: String,
            require: true
        },
        treatment:{
            type:String,
            require:true
        },
        date:{
            type:String,
            require:true
        },
        nameGuardian:{
            type:String,
            require:true
        },
        addressGuardian:{
            type:String,
            require:true
        }


    }
);


mongoose.model('Patient', PatientSchema);
mongoose.model('eTransfer',eTransferSchema);
mongoose.model('iTransfer',iTransferSchema);
mongoose.model('discharge',PatientdischargeSchema);

mongoose.connect('mongodb://localhost:27017/Hospital_ward', (err) => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to the DB');
});

module.exports = mongoose;