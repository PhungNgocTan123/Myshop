const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model 
const Item = require('../../models/Item.model');
const e = require('express');

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
// @access private

router.post('/', auth, async (req, res) => {
    const newItem = await new Item({
        name: req.body.name,
    });
    try {
        // save
        const item = await newItem.save();
        if (!item) throw Error('Something went wrong saving the item');
        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
})

// @route DELETE api/items
// @route Delete Items
// @access private

router.delete('/:id', auth, async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) throw Error('No item found');
        const removed = await item.remove();
        if (!removed) throw Error('Something went wrong while trying to delete the item');
        res.status(200).json({ success: true })
    } catch (error) {
        console.log('error :' + error);
        res.status(400).json({ success: false });
    }
})
// @route GET api/auth/users
// @route get user data
// @access Private
router.get('/users', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json({ user });
    } catch (e) {
        res.status(401).json({ msg: e.message });
    }
})

module.exports = router;