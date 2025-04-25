import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

class Usuario {
    constructor(){
        const usuarioSchema = new mongoose.Schema({
            id: {type: Number, index:true, require:true },
            nome: {type: String, require:true},
            email:{type:String, require:true},
            telefone:{type:String, require:true},
            senha:{type:String, require:true},
            dataNascimento:{type:Date},
            CPF:{type:String, require:true},
            notaMedia:{type:Number}
        })
    }
}