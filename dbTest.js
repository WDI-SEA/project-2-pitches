const db = require('./models')

db.user.sync({ alter: true})