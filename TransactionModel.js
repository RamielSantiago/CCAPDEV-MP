import mongoose from "mongoose";

/*
    TODO:   Complete the TransactionSchema which will contain the name,
            reference number, and the amount of a transaction in the database.
*/
const TransactionSchema = new mongoose.Schema({
    Name: String,
    RefNo: Number,
    Amount: {type: Number, min: 0}
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

export default Transaction;