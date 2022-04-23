import {GiftRecord} from "../records/gift.record";
import {pool} from "../utils/db";

afterAll(async () => {
    await pool.end();
});

test('Not inserted GiftRecord should not have id', async () => {
    const gift = new GiftRecord({
        name: 'Prezent1',
        count: 123,
    });

    expect(gift.id).toBeUndefined();

});

test('Inserted GiftRecord should have an id', async () => {
    const gift = new GiftRecord({
        name: 'Prezent1',
        count: 123,
    });

    await gift.insert();

    expect(gift.id).toBeDefined();
    expect(gift.id).toMatch(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/);

});