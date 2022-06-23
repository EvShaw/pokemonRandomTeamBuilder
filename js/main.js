
let oldTeam = JSON.parse(window.localStorage.getItem('team'))



const teamRoster = [
  {
    pokemonName: '',
    types: [],
    moves: [],
    img: '',
    locations: [],
    height: '',
  },
  {
    pokemonName: '',
    types: [],
    moves: [],
    img: '',
    locations: [],
    height: '',
  },
  {
    pokemonName: '',
    types: [],
    moves: [],
    img: '',
    locations: [],
    height: '',
  },
  {
    pokemonName: '',
    types: [],
    moves: [],
    img: '',
    locations: [],
    height: '',
  },
  {
    pokemonName: '',
    types: [],
    moves: [],
    img: '',
    locations: [],
    height: '',
  },
  {
    pokemonName: '',
    types: [],
    moves: [],
    img: '',
    locations: [],
    height: '',
  },
]

for (let prop in oldTeam) {
  teamRoster[prop] = oldTeam[prop]
}
// ------------------------------------------------------------ Display Selectors: 


const centerBall = document.querySelector('#centerBall')

const nameDisplay = document.querySelector('.pokemonName')




// ---------------------------------------------------------------------

//------------------------------------------------------------------------On firstLogIn:

// display poke eggs instead of balls on first login. add small shake animation to center ball for both egg and ball. 

// firstLog === null ? getEggs() : welcomeBack()


// function getEggs() {
//   localStorage.setItem('lock', 'key')
//   eggZero.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrIoheMZaEbSvCK6crdSQ-fmL_b4YN4lonw&usqp=CAU'
//   eggOne.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrIoheMZaEbSvCK6crdSQ-fmL_b4YN4lonw&usqp=CAU'
//   eggTwo.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrIoheMZaEbSvCK6crdSQ-fmL_b4YN4lonw&usqp=CAU'
// }




//--------------------------------------------------------------<after login:




let teamIndex = 0
const pokemonBench = teamIndex

// on click event - display pokemon
centerBall.addEventListener('click', (e) => {
  // console.log(e)
  if (e.target.className === 'imgPokeball' && teamRoster[teamIndex].pokemonName == '') {
    console.log('fetching')
    //make call here... 
    getPokemon(`https://pokeapi.co/api/v2/pokemon/${randNum}`)
  } else {
    //retrieve teamRoster[teamIndex] --- <-display this.
    console.log(`I choose you, ${teamRoster[teamIndex].pokemonName}!`)
    displayInformation()
    //add display
  }
  
})
//total pokemon. Will eventually add in number ranges for different games, allowing team builder to be customized to any one particular game. Currently based on national dex. 
let randNum = Math.floor(Math.random() * 898) + 1

// document.querySelector('.pokeballDisplay').addEventListener('click', (eve) => {
 
// })


//------------------------------------------------------Pokemon API Fetch:

async function getPokemon(url) {
  const res = await fetch(url)
  if (!res.ok) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }
  const data = await res.json()

  console.log(data)

  const newPokemon = new PokeInfo(data.name, data.types, data.moves, data.sprites.other['official-artwork'].front_default, data.height, data.location_area_encounters)

  newPokemon.getMoves()
  newPokemon.displayMoves()
  newPokemon.getTypes()
  newPokemon.changeBG()
  newPokemon.displayIMG(data.sprites.other['official-artwork'].front_default)
  newPokemon.displayName(data.name)
  newPokemon.encounterInfo()
  newPokemon.storeInfo()
}

// const pokeEggImg = 'https://www.pngitem.com/pimgs/m/52-528163_pokemon-egg-png-transparent-png.png'


//-----------------------------------------------------------------------loopthroughARR:


//assign all pokeEggs/Balls on the bench to the array

// for (let i = 0; i < 6; i++) {
//   teamRoster[i] = document.getElementsByClassName('imgPokeball' + i)

// }




//------------------------------------------------------------------------Pokemon Class:
class Pokemon {
  constructor(name, types, moves, image, height) {
    this.name = name
    this.types = types
    this.moves = moves
    this.image = image
    // this.locations = locations
    this.height = height
    this.evolution = true
    this.typeList = []
    this.moveList = []
  }
  getTypes() {
    for (const property of this.types) {
      this.typeList.push(property.type.name)
      //add types to object: 
      teamRoster[teamIndex].types = this.typeList
    }
  }

  getMoves() {
    //need to add a way to not have repeat moves
    for (let i = 0; i <= 3; i++) {
      const randomNum = Math.floor(Math.random() * this.moves.length) + 1
      try {
        const moveName = this.moveList.push(this.moves[randomNum].move.name)
      } catch (error) {
        //I was getting an error where the name was having issues. Now we catch the erors and we subtract one from our loop, making it run until we have a full four moves. 

        console.log(error)
        if (error) {
          i--
        }
      }
    }
  }
  changeBG() {
    const typeOne = `${this.typeList[0]}Type`
    const typeTwo = `${this.typeList[1]}Type`
    changeTheBG(typeOne)
    // console.log(typeOne)
    if (this.typeList.length == 2) {
      //add gradient to bg with both type colors. 
      // changeTheBGDoubleColors(typeOne, typeTwo)
    }
  }
  heightToFeet(height) {
    return Math.round(height / 0.329084)
    //run if height < x || height > X -- resize img to fit.
  }
  doesItEvolve() {
    //does this pokemon have an evolution chain?
    // if this pokemon is already evolved, what is its base form?
    //grab that data and input to team. 
    //Give option to evolve up. 
  }
  displayIMG(data) {
    document.querySelector('#centerBall').src = data
    //add/ store the image: 
    teamRoster[teamIndex].img = data

  }
  displayName(data) {
    //extract hyphen names <- AI
    const firstLetter = data[0].toUpperCase()
    const nameArray = data.split('')
    nameArray.splice(0, 1, firstLetter).join(' ')
    document.querySelector('.pokemonName').textContent = nameArray.join('')
    //add name to object: 
    teamRoster[teamIndex].pokemonName = data
  }
  displayMoves(name) {

    this.moveList.forEach(move => {
      const li = document.createElement('li')
      li.textContent = move
      document.querySelector('.moveSetUl').appendChild(li)
      //add moves to object: 
      teamRoster[teamIndex].moves.push(move)
    })
  }
}

//--------------------------------------:
//------------------------------------------------------------------------ARROWS:

//------------------------ left arrow: 

document.querySelector('.leftArrow').addEventListener('click', shiftLeft)

function shiftLeft() {
  clearDisplay()
  if (teamIndex !== 5) {
    document.querySelector('#rightArrow').classList.remove('hide')
  }
  // console.log('to the left!')
  if (teamIndex !== 0) {
    teamIndex--
    switchIcon(teamIndex)
  } else if (teamIndex === 0) {
    teamIndex = 5
    document.querySelector('#pokeIcon0').classList.remove('pokeIconActive')
    document.querySelector('#pokeIcon5').classList.add('pokeIconActive')
    document.querySelector('#pokeIcon4').classList.remove('pokeIconActive')
  }
  console.log(teamIndex)
  document.querySelectorAll('.imgPokeball')[1].src = 'https://www.freeiconspng.com/thumbs/pokeball-png/file-pokeball-png-0.png'

}


//------------------------ right arrow: 

document.querySelector('.rightArrow').addEventListener('click', shiftRight)

function shiftRight() {

  clearDisplay()
  if (teamIndex !== 5) {
    teamIndex++
    switchIcon(teamIndex)


  } else if (teamIndex === 5) {
    teamIndex = 0
    document.querySelector('#pokeIcon1').classList.remove('pokeIconActive')
    document.querySelector('#pokeIcon0').classList.add('pokeIconActive')
    document.querySelector('#pokeIcon5').classList.remove('pokeIconActive')
  }


  document.querySelectorAll('.imgPokeball')[1].src = 'https://www.freeiconspng.com/thumbs/pokeball-png/file-pokeball-png-0.png'

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
//convert to object
const normalType = '#A8A878'
const fireType = '#F08030'
const waterType = '#6890F0'
const grassType = '#78C850'
const electricType = '#F8D030'
const iceType = '#98D8D8'
const fightingType = '#C03028'
const poisonType = '#A040A0'
const groundType = '#E0C068'
const flyingType = '#A890F0'
const psychicType = '#F85888'
const bugType = '#A8B820'
const rockType = '#B8A038'
const ghostType = '#705898'
const darkType = '#705848'
const dragonType = '#7038F8'
const steelType = '#B8B8D0'
const fairyType = '#F0B6BC'

function changeTheBG(typeOne) {
  const centerBallBG = document.querySelector('.centerBall')
  switch (typeOne) {
    case 'normalType':
      centerBallBG.style.backgroundColor = normalType
      break;
    case 'fireType':
      centerBallBG.style.backgroundColor = fireType
      break;
    case 'waterType':
      centerBallBG.style.backgroundColor = waterType
      break;
    case 'grassType':
      centerBallBG.style.backgroundColor = grassType
      break;
    case 'electricType':
      centerBallBG.style.backgroundColor = electricType
      break;
    case 'iceType':
      centerBallBG.style.backgroundColor = iceType
      break;
    case 'fighting':
      centerBallBG.style.backgroundColor = fightingType
      break;
    case 'psychic':
      centerBallBG.style.backgroundColor = psychicType
      break;
    case 'bug':
      centerBallBG.style.backgroundColor = bugType
      break;
    case 'rock':
      centerBallBG.style.backgroundColor = rockType
      break;
    case 'ghost':
      centerBallBG.style.backgroundColor = ghostType
      break;
    case 'dark':
      centerBallBG.style.backgroundColor = darkType
      break;
    case 'dragon':
      centerBallBG.style.backgroundColor = dragonType
      break;
    case 'steel':
      centerBallBG.style.backgroundColor = steelType
      break;
    case 'fairy':
      centerBallBG.style.backgroundColor = fairyType
      break;
    default:
      centerBallBG.style.backgroundColor = 'black'
  }
}
// document.querySelector('.centerBall').style.backgroundColor = `${type}`1

// document.querySelector('.centerBall').style.backgroundImage = `linear-gradient(to bottom,'${typeOne}' 1%,'${typeTwo}' 100%)`


// let newArr = [0, 0]

// function countPositivesSumNegatives(input) {

// }


// function changeTheBGDoubleColors(typeOne, typeTwo) {
//   const centerBallBG = document.querySelector('.centerBall')

//   switch (typeOne) {
//     case 'normalType':
//       centerBallBG.style.backgroundImage = `linear-gradient(to bottom,'${typeOne}' 1%,'${typeTwo}' 100%)`
//       break;


//   console.log('hi')
//   // style.backgroundImage = `linear-gradient(to bottom,'${typeOne}' 1%,'${typeTwo}' 100%)`

// }


// function changeBGSouble(type) {


//   backgroundTypeColor.style.backgroundImage = `linear - gradient(to right, ${normalType}, ${fireType})`

// }

// POKE Type COLORS:
//13 of them ><

class PokeInfo extends Pokemon {
  constructor(name, types, moves, image, height, location) {
    super(name, types, moves, image, height)
    this.locationURL = location
    this.locationList = []
    this.locationString = ''
  }
  encounterInfo() {
    fetch(this.locationURL)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        for (const item of data) {
          this.locationList.push(item.location_area.name)
        }
        this.locationCleanUp()      
      })
      .catch(err => {
        console.log(`error: ${err}`)
      })
  }
  locationCleanUp() {
     //this code line is extracting the first five locaitons from the list. Could add a method to add more locations with a click. 
    const words = this.locationList.slice(0, 5).join(', ').replaceAll('-', ' ').split('-')

    //this loop is capitalizing the first letter for every word in the array
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1)

      teamRoster[teamIndex].locations.push(words.join(' '))
    }
  }
  storeInfo() {
    // localStorage.setItem('team', 'test')
    // console.log('stored')
    localStorage.setItem('team', JSON.stringify(teamRoster))
  }
}

function displayInformation() {
  nameDisplay.textContent = teamRoster[teamIndex].pokemonName
  centerBall.src = teamRoster[teamIndex].img
}

function clearDisplay() {
  nameDisplay.textContent = ''
  centerBall.src = ''
}






//run conditional on log in. if roster is emptied fetch new info. if already done, then grab last visit info. 


document.querySelector('.pokemonName2').addEventListener('click', _ => {
  localStorage.clear()
})