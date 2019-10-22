const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name?", (name) => {
  rl.question("What's an activity you like doing?", (activity) => {
    rl.question("What do you listen to while doing that?", (whatDoYouListenTo) => {
      rl.question("Which meal is your favourite?", (favouriteMeal) => {
        rl.question("What's your favourite thing to eat for that meal?", (favoriteFood) => {
          rl.question("Which sport is your absolute favourite?", (favoriteSport) => {
            rl.question("What is your superpower?", (superPower) =>{
              console.log(`${name} likes listening to ${whatDoYouListenTo} while ${activity}, devouring ${favoriteFood} for ${favouriteMeal}, prefers ${favoriteSport} over any other sport, and is amazing at ${superPower}.`)
              rl.close();
            })
          })
        })
      })
    })
  })
})


