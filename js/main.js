// I will be creating a different pen with touch support but right // now I have no time for it due to school

// const slider = document.querySelector(".items");
// 		const slides = document.querySelectorAll(".item");
// 		const button = document.querySelectorAll(".button");

// 		let current = 0;
// 		let prev = 5;
// 		let next = 1;

// 		for (let i = 0; i < button.length; i++) {
// 			button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
// 		}

// 		const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

// 		const gotoNext = () => current < 5 ? gotoNum(current + 1) : gotoNum(0);

// 		const gotoNum = number => {
// 			current = number;
// 			prev = current - 1;
// 			next = current + 1;

// 			for (let i = 0; i < slides.length; i++) {
// 				slides[i].classList.remove("active");
// 				slides[i].classList.remove("prev");
// 				slides[i].classList.remove("next");
// 			}

// 			if (next == 5) {
// 				next = 0;
// 			}

// 			if (prev == -1) {
// 				prev = 5;
// 			}

// 			slides[current].classList.add("active");
// 			slides[prev].classList.add("prev");
// 			slides[next].classList.add("next");
// 		}



//----------------------------------------------------------------------------------TOP
let teamRoster = []
let teamSize = 0
let teamIndex = 0


// pokemonImg = document.querySelector('imgPokeball').src = teamRoster[teamIndex].sprites.front_default


document.querySelector('.pokeballDisplay').addEventListener('click', (eve) => {

  if (eve.target.className === 'imgPokeball' && teamRoster[teamIndex] === undefined) {

    // console.log('fetching')
    let randNum = Math.floor(Math.random() * 898) + 1
    let url = `https://pokeapi.co/api/v2/pokemon/${randNum}/`

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data.sprites.front_default)
        teamRoster.push(data)
        saveRoster()
        // console.log(teamRoster[teamIndex].name)
        document.querySelector('h3').innerText = teamRoster[teamIndex].name
        displayPokemonSprite()


      })
      .catch(err => {
        console.log(err)
      })

  } else if (teamRoster[teamIndex]) {
    // console.log('already fetched')
    console.log(`I choose you, ${teamRoster[teamIndex].name}`)
  }
})

//------------------------------------------------------------------------------TEAM:
localStorage.clear()

//to save as local storage, need to convert to json. so how do I do that?

function saveRoster() {

  console.log(JSON.stringify(teamRoster))
  return JSON.stringify(teamRoster)
}




// const Inventory = {
//   size: 10,
//   openSpots: 0,
//   slotOne: 'pokemonEgg'
// }


//------------------------------------------------------Pokemon API Fetch:



// console.log(teamRoster)
//---------------------------------assign egg to array:




//---------------------------------click on egg to hatch:


// document.querySelector('button').addEventListener('click', getFetch)
// function getFetch(){
//   const poke1 = document.querySelector('#poke1').value
//   const poke2 = document.querySelector('#poke2').value
//   const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1
//   const url2 = 'https://pokeapi.co/api/v2/pokemon/'+poke2
//   let pokeStore = []
//   let pokeImg = []

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {

//         pokeStore.push(data.types[0].type.name)
//         pokeImg.push(data.sprites.front_shiny)

//         fetch(url2)
//         .then(res => res.json()) // parse response as JSON
//         .then(data => {

//           pokeStore.push(data.types[0].type.name)
//           pokeImg.push(data.sprites.front_shiny)

//           if((pokeStore[0] === "grass" && pokeStore[1] === 'water')){
//             document.querySelector('#pokeImg1').src = pokeImg[0]
//             document.querySelector('#pokeImg2').src = pokeImg[1]
//             document.querySelector('h2').innerText = " 2x > "
//           }
//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         });


//       })
//       

// }

// const pokeEggImg = 'https://www.pngitem.com/pimgs/m/52-528163_pokemon-egg-png-transparent-png.png'



//------------------------------------------------------------------------On firstLogIn:

const eggZero = document.querySelectorAll('.imgPokeball')[0]
const eggOne = document.querySelectorAll('.imgPokeball')[1]
const eggTwo = document.querySelectorAll('.imgPokeball')[2]

// localStorage.clear()

const firstLog = localStorage.getItem('lock', 'key')

firstLog === null ? getEggs() : welcomeBack()


function getEggs() {
  localStorage.setItem('lock', 'key')
  eggZero.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrIoheMZaEbSvCK6crdSQ-fmL_b4YN4lonw&usqp=CAU'
  eggOne.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrIoheMZaEbSvCK6crdSQ-fmL_b4YN4lonw&usqp=CAU'
  eggTwo.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrIoheMZaEbSvCK6crdSQ-fmL_b4YN4lonw&usqp=CAU'
}

function welcomeBack() {
  alert('Welcome Back!')
  localStorage.getItem('teamRoster', teamRoster)
  console.log(teamRoster)
}


//--------------------------------------------------------------<after login: 

//---------------------------------------------------------Click on Egg/Ball to Reveal:



//-----------------------------------------------------------------------loopthroughARR:


//assign all pokeEggs/Balls on the bench to the array

// for (let i = 0; i < 6; i++) {
//   teamRoster[i] = document.getElementsByClassName('imgPokeball' + i)

// }



// teamRoster[2] = "Charizard"



// teamRoster.forEach( (mon, i) => {
//   console.log(`${mon} is in spot: ${i+1}`)
// })

//--------------------------------------:





//------------------------------------------------------------------------ARROWS:




//------------------------ left arrow: 

document.querySelector('.leftArrow').addEventListener('click', shiftLeft)

function shiftLeft() {

  if (teamIndex !== 5) {
    document.querySelector('#rightArrow').classList.remove('hide')
  }
  // console.log('to the left!')
  if (teamIndex !== 0) {
    teamIndex--
    switchIcon(teamIndex)
    // console.log(teamIndex)
  } else if (teamIndex === 0) {
    teamIndex = 5
    // console.log(teamIndex)
    document.querySelector('#pokeIcon0').classList.remove('pokeIconActive')
    document.querySelector('#pokeIcon5').classList.add('pokeIconActive')
    document.querySelector('#pokeIcon4').classList.remove('pokeIconActive')
  }
  console.log(teamIndex)
  document.querySelectorAll('.imgPokeball')[1].src = 'https://www.freeiconspng.com/thumbs/pokeball-png/file-pokeball-png-0.png'
  displayPokemonSprite()
}


//------------------------ right arrow: 

document.querySelector('.rightArrow').addEventListener('click', shiftRight)

function shiftRight() {


  // console.log('to the right!')

  if (teamIndex !== 5) {

    teamIndex++
    switchIcon(teamIndex)
    // console.log(teamIndex)

  } else if (teamIndex === 5) {
    teamIndex = 0
    // console.log(teamIndex)
    document.querySelector('#pokeIcon1').classList.remove('pokeIconActive')
    document.querySelector('#pokeIcon0').classList.add('pokeIconActive')
    document.querySelector('#pokeIcon5').classList.remove('pokeIconActive')
  }
  // console.log(teamIndex)
  document.querySelectorAll('.imgPokeball')[1].src = 'https://www.freeiconspng.com/thumbs/pokeball-png/file-pokeball-png-0.png'
  displayPokemonSprite()
}

//------------------------------------------Name Change: based on pokeIconActive Class


leftArrow = document.querySelector('#leftArrow')
rightArrow = document.querySelector('#rightArrow')
nameDisplay = document.querySelector('#nameText')




// document.querySelector('body').addEventListener('click', (e) => {
//   console.log(e)

// })

// document.querySelector('h3').classList.add('hide')

document.querySelector('.arrowBTNS').addEventListener('click', displayChange)

function displayChange() {
  document.querySelector('#nameText').innerText = teamRoster[teamIndex].name

  // nameDisplay.innerText = teamRoster[teamIndex].name
  if (teamRoster !== null || undefined) {

    console.log(teamRoster[teamIndex].name)


  }

}

function displayPokemonSprite() {
  document.querySelectorAll('.imgPokeball')[1].src = teamRoster[teamIndex].sprites.front_default
}


//---------------------------------------------------------------------------Top Icons:



function switchIcon(teamIndex) {
  switch (teamIndex) {
    case 0:
      document.querySelector('#pokeIcon5').classList.remove('pokeIconActive')
      document.querySelector('#pokeIcon0').classList.add('pokeIconActive')
      document.querySelector('#pokeIcon1').classList.remove('pokeIconActive')
      break;
    case 1:
      document.querySelector('#pokeIcon0').classList.remove('pokeIconActive')
      document.querySelector('#pokeIcon1').classList.add('pokeIconActive')
      document.querySelector('#pokeIcon2').classList.remove('pokeIconActive')
      break;
    case 2:
      document.querySelector('#pokeIcon1').classList.remove('pokeIconActive')
      document.querySelector('#pokeIcon2').classList.add('pokeIconActive')
      document.querySelector('#pokeIcon3').classList.remove('pokeIconActive')
      break;
    case 3:
      document.querySelector('#pokeIcon2').classList.remove('pokeIconActive')
      document.querySelector('#pokeIcon3').classList.add('pokeIconActive')
      document.querySelector('#pokeIcon4').classList.remove('pokeIconActive')
      break;
    case 4:
      document.querySelector('#pokeIcon3').classList.remove('pokeIconActive')
      document.querySelector('#pokeIcon4').classList.add('pokeIconActive')
      document.querySelector('#pokeIcon5').classList.remove('pokeIconActive')
      break;
    case 5:
      document.querySelector('#pokeIcon4').classList.remove('pokeIconActive')
      document.querySelector('#pokeIcon5').classList.add('pokeIconActive')
      document.querySelector('#pokeIcon0').classList.remove('pokeIconActive')
      break;
  }
}




class AddPokemon {
  constructor(pName) {
    this.pName = pName
  }

}







let newArr = [0, 0]

function countPositivesSumNegatives(input) {

}


// countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
// countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null])
// console.log(newArr)

// console.log(newArr)

countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, null, -13, -14])

console.log(newArr)




let playerTurn = 'playerTwo'


const gameStart = {
  playerOne: prompt('Player One, what is your name?'),
  playerTwo: prompt('And what is your name Player Two?'),

  whoStarts() {
    let randNum = Math.random()
    console.log(randNum)
    if (playerTurn === '-') {
      if (randNum > .5) {
        playerTurn = 'PlayerOne'
      }

    }
    console.log(`${playerTurn} goes first!`)
  },

  //run this to change players turn
  changePlayer() {
    if (playerTurn === 'PlayerOne') {
      playerTurn = 'PlayerTwo'
    } else {
      playerTurn === 'PlayerOne'
    }
  },
}


gameStart.whoStarts()

console.log(gameStart)
