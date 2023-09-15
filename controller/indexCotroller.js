const model = require('../model/indexModel');

// const addcraete = async (req, res) => {
//     try {
//         const data = await model.create(req.body);
//         return res.status(200).json({ status: 200, msg: 'sucess', data: data });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ status: 500, msg: 'server error' });
//     }
// }

const adsget = async (req, res) => {
    try {
        const data = await model.find({});
        return res.status(200).json({ status: 200, msg: 'sucess', data: data });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: 500, msg: 'server error' });
    }
}

module.exports = { adsget };