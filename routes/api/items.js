const express = require('express');
const router = express.Router();

// Item Model 
const Item = require('../../models/Item.model');

// @route GET api/items
// @route GET ALL Items
// @access Public

router.get('/', async (req, res) => {
    try {
        const items = await Item.find().sort({ date: -1 });
        await res.json(items);
    } catch (error) {
        console.log('error :' + error);
    }
})

// @route POST api/items
// @route Create Items
// @access Public

router.post('/', async (req, res) => {
    try {
        const newItem = await new Item({
            name: req.body.name,
        });
        // save
        await newItem.save()
        await res.json(newItem)
    } catch (error) {
        console.log('error :' + error);
    }
})

// @route DELETE api/items
// @route Delete Items
// @access Public

router.delete('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        await item.remove();
        await res.json({ success: true })
    } catch (error) {
        console.log('error :' + error);
        res.status(404).json({ success: false });
    }
})

module.exports = router;