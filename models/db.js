const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const online_url = 'mongodb+srv://Admin:C0tDKeQ0wr9XXSxy@ccapdev.zzznx.mongodb.net/CCAPDEV?retryWrites=true&w=majority';
const local_url = process.env.MONGODB_URI;

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

const database = {
    connect: function () {
        mongoose.connect(online_url, options, function(error) {
            if(error) throw error;
            console.log('Connected (online) to: ' + online_url);
        });
    },
	
	/*
	connect: function () {
        mongoose.connect(local_url, options, function(error) {
            if(error) throw error;
            console.log('Connected (local) to: ' + local_url);
        });
    },
	*/
	
    insertOne: function(model, doc, callback) {
        model.create(doc, function(error, result) {
            if(error) return callback(false);
            console.log('Added ' + result);
            return callback(true);
        });
    },

    insertMany: function(model, docs, callback) {
        model.insertMany(docs, function(error, result) {
            if(error) return callback(false);
            console.log('Added ' + result);
            return callback(true);
        });
    },

    findOne: function(model, query, projection, callback) {
        model.findOne(query, projection, function(error, result) {
            if(error) return callback(false);
            return callback(result);
        });
    },

    findMany: function(model, query, projection, callback) {
        model.find(query, projection, function(error, result) {
            if(error) return callback(false);
            return callback(result);
        });
    },

    updateOne: function(model, filter, update, callback) {
        model.updateOne(filter, update, function(error, result) {
            if(error) return callback(false);
            console.log('Document modified: ' + result.nModified);
            return callback(true);
        });
    },

    updateMany: function(model, filter, update, callback) {
        model.updateMany(filter, update, function(error, result) {
            if(error) return callback(false);
            console.log('Documents modified: ' + result.nModified);
            return callback(true);
        });
    },

    deleteOne: function(model, conditions, callback) {
        model.deleteOne(conditions, function (error, result) {
            if(error) return callback(false);
            console.log('Document deleted: ' + result.deletedCount);
            return callback(true);
        });
    },

    deleteMany: function(model, conditions, callback) {
        model.deleteMany(conditions, function (error, result) {
            if(error) return callback(false);
            console.log('Document deleted: ' + result.deletedCount);
            return callback(true);
        });
    }

}

module.exports = database;
