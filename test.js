const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aaa:SyVPantw3J21NLhR@cluster0.hb1fo.mongodb.net/daopunk?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&ssl=true');
mongoose.set('debug', true);

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Dao = new Schema({
    name: String,
    address: String,
    ownerAddress: Date,
    daoAddress: String,
    tokenAddress: String
});

mongoose.model('Dao', Dao);

const DaoInstance = mongoose.model('Dao');
const dao = new DaoInstance;
dao.name = 'constitution';
dao.address = '123asdad';
console.log(dao.save());
