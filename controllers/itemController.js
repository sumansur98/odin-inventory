const asyncHandler = require('express-async-handler');

const item_list = asyncHandler(async (req, res, next) => {
    res.send('item list not implemented');
})

module.exports = {
    item_list
}