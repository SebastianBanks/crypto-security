const bcrypt = require("bcryptjs")
const users = []

module.exports = {
    login: (req, res) => {
      
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        const existing = bcrypt.compareSync(password, users[i].password)
        if (users[i].username === username && existing) {
          const userCopy = {...users[i]}
          delete userCopy.password
          console.log('Logging In User')
          res.status(200).send(userCopy)
          return
        }
      }
      console.log("Something didn't match")
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      console.log(req.body)
      const {username, email, firstName, lastName, password} = req.body

      let salt = bcrypt.genSaltSync(5)
      const passwordHash = bcrypt.hashSync(password, salt)

      const newUser = {
        username: username,
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: passwordHash
      }
        console.log('Registering User')
        console.log(req.body)
        users.push(newUser)
        let userCopy = {...newUser}
        delete userCopy.password
        res.status(200).send(userCopy)
    }
}