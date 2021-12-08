import mongoose from 'mongoose';
import './models/Dao';

mongoose.connect('mongodb+srv://aaa:SyVPantw3J21NLhR@cluster0.hb1fo.mongodb.net/daopunk?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&ssl=true');
mongoose.set('debug', true);
