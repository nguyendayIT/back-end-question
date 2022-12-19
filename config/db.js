import { createPool } from "mysql"

const connectDB = createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'web-question',
    multipleStatements: true
});

export default connectDB;

