class Transaction {
    constructor() {
        this.id = null;
        this.createdOn = null;
        this.type = null; // credit or debit
        this.accountNumber = null;
        this.cashier = null; // cashier (staff) who consummated the transaction
        this.amount = null; 
        this.oldBalance = null;
        this.newBalance = null;
    }
};

export default Transaction;
