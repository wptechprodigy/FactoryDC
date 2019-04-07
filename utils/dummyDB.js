import uuid from 'uuid';
import moment from 'moment';

const generateAccountNumber = () => {
    return accountNumber = Math.floor(Math.random() * 10000000000);
};

export default {
    users: [
        {
            id: uuid.v4(),
            firstName: 'Jon',
            lastName: 'Snow',
            email: 'j.snow@targearyean.got',
            password: '123456',
            type: client,
            phoneNumber: '08123456789',
            address: {
                street: '555 Bayshore Blvd',
                city: 'Tampa',
                state: 'Florida',
            },
            createdOn: moment().format('YYYY DD MM'), 
            isAdmin: false,
        },
        {
            id: uuid.v4(),
            firstName: 'Jorah',
            lastName: 'Momorth',
            email: 'jorah@nightswatch.got',
            password: '123456',
            type: client,
            phoneNumber: '09123976589',
            address: {
                street: '156 Nights Watch Colony',
                city: 'Agidingbi',
                state: 'Lagos',
            },
            createdOn: moment().format('YYYY DD MM'), 
            isAdmin: false,
        },
        {
            id: uuid.v4(),
            firstName: 'Daenarys',
            lastName: 'Targaeryean',
            email: 'd.targaeryean@targearyean.got',
            password: '123456',
            type: staff,
            phoneNumber: '08123676589',
            address: {
                street: '122 Westeros Ave.',
                city: 'Ilupeju',
                state: 'Lagos',
            },
            createdOn: moment().format('YYYY DD MM'), 
            isAdmin: false,
        },
        {
            id: uuid.v4(),
            firstName: 'Jamie',
            lastName: 'Lannister',
            email: 'jamielannister@lannisters.got',
            password: '123456',
            type: staff,
            phoneNumber: '08053676589',
            address: {
                street: '122 King Slayer Ave.',
                city: 'Idimu',
                state: 'Lagos',
            },
            createdOn: moment().format('YYYY DD MM'), 
            isAdmin: true,
        },
    ],
    accounts: [
        {
            id: uuid.v4(),
            accountNumber: generateAccountNumber(),
            createdOn: moment().format('YYYY DD MM'),
            owner: users[0].id,
            type: savings,
            status: active,
            balance: 500000,
        },
        {
            id: uuid.v4(),
            accountNumber: generateAccountNumber(),
            createdOn: moment().format('YYYY DD MM'),
            owner: users[1].id,
            type: current,
            status: active,
            balance: 5000000,
        },
    ],
    transactions: [
        {
            id: uuid.v4(),
            createdOn: moment().format('YYYY DD MM'),
            type: credit,
            accountNumber: accounts[1].accountNumber,
            cashier: users[2].id,
            amount: 300000,
            oldBalance: 5000000,
            newBalance: 5300000,
        },
        {
            id: uuid.v4(),
            createdOn: moment().format('YYYY DD MM'),
            type: debit,
            accountNumber: accounts[0].accountNumber,
            cashier: users[2].id,
            amount: 200000,
            oldBalance: 500000,
            newBalance: 300000,
        },
    ]
}
