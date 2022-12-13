const express = require('express')
const router = express.Router()
const usercontroller = require('../controller/user')

router.get('/users', usercontroller.index);
router.get('/user/:id', usercontroller.show);
router.post('/user', usercontroller.store);
router.put('/user/:id', usercontroller.update);
router.delete('/user/:id', usercontroller.delete);

module.exports = router



























// let users = [
//   {
//     id: 1,
//     name: "Loka",
//     email: "mbuh123@gmail.com"
//   },
//   {
//     id: 2,
//     name: "dany",
//     email: "danyfayza@gmail.com"
//   },
// ]


// router.post('/user', (req, res) => {
//   users.push(req.body)
//   res.json({
//     status: true,
//     data: users,
//     method: req.method,
//     url: req.url,
//     message: "Data berhasil ditambahkan",
//   })
//   console.log(users)
//   res.json(users)
// })


// router.get('/users', (req, res) => {
//     if (users.length > 0) {
//         res.json({
//           status: true,
//           data: users,
//           method: req.method,
//           url: req.url
//         })
//     } else {
//       res.json({
//         status: false,
//         message: "Data kosong",
//       })
//     }
//     // res.json(users)
//   }) 


// router.post('/user', (req, res) => {
//   users.push(req.body)
//   res.json({
//     status: true,
//     data: users,
//     method: req.method,
//     url: req.url,
//     message: "Data berhasil ditambahkan",
//   })
//   console.log(users)
//   res.json(users)
// })


// router.put('/user/:id', (req, res) => {
//   const id = req.params.id
//   users.filter(user => {
//     if(user.id == id) {
//       user.name = req.body.name
//       user.email = req.body.email
//       return user
//     }
//   })
//   res.json({
//     status: true,
//     data: users,
//     method: req.method,
//     url: req.url,
//     message: "Data berhasil di update"
//   })
// })

// router.delete('/user/:id', (req, res) => {
//   const id = req.params.id
//   users = users.filter(user => user.id != id)

//   res.json({
//     status: true,
//     data: users,
//     method: req.method,
//     url: req.url,
//     message: "Data berhasil di delete"
//   })
// })