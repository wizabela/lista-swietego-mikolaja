import {Router} from "express";
const {GiftRecord} = require("../records/gift.record");

export const giftRouter = Router();

giftRouter

    .get('/', async (req, res) : Promise<void> => {
        const giftsList = await GiftRecord.listAll();

        res.render('gift/list', {
            giftsList,
        });
    })

    .post('/', async (req, res) : Promise<void> => {
        const data = {
            ...req.body,
            count: Number(req.body.count),
        };

        const newGift = new GiftRecord(data);
        await newGift.insert();

        res.redirect('/gift');
    });
