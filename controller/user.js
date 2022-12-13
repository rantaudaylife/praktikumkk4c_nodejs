const User = require('../models/User');

module.exports = {
    index: async (req, res) => {

      try {
        const users = await User.find()
        if (users.length > 0) {
          res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url
          });
        } else {
          res.json({
            status: false,
            message: "Data kosong",
          });
        }
      } catch (error){
        res.status(400).json({
          success: false
        });
      }

    },
    store: async (req, res) => {

      try {
        const userC = await User.create(req.body)
        res.json({
          status: true,
          data: userC,
          method: req.method,
          url: req.url,
          message: "Data berhasil ditambahkan",
        }) 
      } catch (error) {
        res.status(400).json({
          success: false
        });
      }
        
    },
    update: async (req, res) => {

      try {
        const userU = await User.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true
        })
        res.json({
          status: true,
          data: userU,
          method: req.method,
          url: req.url,
          message: "Data berhasil di update"
        })
      } catch (error) {
        res.status(400).json({
          success: false
        });
      }
        
    },
    delete: async (req, res) => {

      try {
        await User.findByIdAndDelete(req.params.id)
        res.json({
          status: true,
          method: req.method,
          url: req.url,
          message: "Data berhasil di delete"
        })
      } catch (error) {
        res.status(400).json({
          success: false
        });
      }

    },
    show: async (req, res) => {
      try {
        const userID = await User.findById(req.params.id);
        if (userID) {
          res.json({
            status: true,
            data: userID, 
            method: req.method,
            url: req.url,
            message: "Id ini berhasil ditemukan"
          })
        } else {
          res.status(404).json({ message: "data tidak ditemukan" });
        }
      } catch (error) {
        res.status(500).json({
          message: error.message,
        })
      }
    }
}


 
// let users = [
//     {
//       id: 1,
//       name: "Loka",
//       email: "mbuh123@gmail.com"
//     },
//     {
//       id: 2,
//       name: "dany",
//       email: "danyfayza@gmail.com"
//     },
//   ]
