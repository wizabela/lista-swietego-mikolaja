import {createPool} from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'megak_holiday_gift',
    namedPlaceholders: true,
    decimalNumbers: true,
});
