const db = require('../db')
const Comments = require('../models/Comment')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const comments = [
    {
      user: 'Bingo',
      comment: 'This is exactly what I needed thank you!'
    },
    {
      user: 'Sasha',
      comment:
        'Hmm I think this can be done better if using butter for the bread to toast it'
    }
  ]
  await Comments.insertMany(comments)
  console.log('Created some Comments!')
}
const run = async () => {
  await main()
  db.close()
}

run()
