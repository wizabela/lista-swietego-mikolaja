import {GiftRecord} from "../records/gift.record";
import {pool} from "../utils/db";

let gift: GiftRecord;

beforeAll(async () => {
    gift = new GiftRecord({
        name: 'Prezent1',
        count: 123,
    });
});

afterAll(async () => {
    await pool.end();
});

test('Not inserted GiftRecord should not have id', async () => {

    expect(gift.id).toBeUndefined();

});

test('Inserted GiftRecord should have an id', async () => {

    await gift.insert();

    expect(gift.id).toBeDefined();
    expect(gift.id).toMatch(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/);

});