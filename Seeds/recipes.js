const db = require('../db')
const Recipe = require('../models/Recipe')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const recipes = [
    {
      name: 'Scrambled Eggs',
      ingredients: 'Two eggs, One tablespoon of butter',
      description:
        'first, add the butter to a hot pan. Then add the eggs and stir until eggs become solid and you reach the consistency you like. Serve!',
      serving: '1',
      imageUrl:
        'https://static01.nyt.com/images/2021/02/24/dining/19Kenjirex/merlin_183955200_c2bc0f52-9ed8-495d-a7db-217cc8a201a6-articleLarge.jpg'
    },
    {
      name: 'BLT Sandwhich',
      ingredients:
        'Two slices of bacon, one tablespoon of Mayonaise, lettuce, One tomato, sliced bread',
      description:
        'First we want to cook the bacon until crispy. Second slice the tomatoes in quarter in slices for the sandwhich. Third toast your bread. Now to bring it all together. Add the mayo to the toast and lay your ingreadients one on top of another. Enjoy!',
      serving: '1',
      imageUrl:
        'https://therecipecritic.com/wp-content/uploads/2022/05/blt-1.jpg'
    }
  ]
  await Recipe.insertMany(recipes)
  console.log('Created some recipes!')
}
const run = async () => {
  await main()
  db.close()
}

run()
