let teamIndex = 0




// on click event - display pokemon
document.querySelector('#centerBall').addEventListener('click', (e) => {
  // console.log(e)
  getPokemon(`https://pokeapi.co/api/v2/pokemon/${randNum}`)
})

//--------------------------------------------------------------------Pokemon API Fetch:

let randNum = Math.floor(Math.random() * 898) + 1

async function getPokemon(url) {
  const res = await fetch(url)
  if (!res.ok) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }
  const data = await res.json()

  const newPokemon = new Pokemon(data.name, data.types, data.moves, data.sprites.other['official-artwork'].front_default,)


  newPokemon.getMoves()
  newPokemon.displayMoves()

  newPokemon.getTypes()
  newPokemon.changeBG()
  newPokemon.displayIMG(data.sprites.other['official-artwork'].front_default)
  newPokemon.displayName(data.name)
}

//------------------------------------------------------------------------Pokemon Class:
class Pokemon {
  constructor(name, types, moves, image, locations, height) {
    this.name = name
    this.types = types
    this.moves = moves
    this.image = image
    this.locations = locations
    this.height = height
    this.evolution = true
    this.typeList = []
    this.moveList = []
  }
  getTypes() {
    for (const property of this.types) {
      this.typeList.push(property.type.name)
    }
  }
  getMoves() {
    for (let i = 0; i <= 3; i++) {
      const randomNum = Math.floor(Math.random() * this.moves.length) + 1
      const moveName = this.moveList.push(this.moves[randomNum].move.name)
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
  }
  displayName(data) {
    const firstLetter = data[0].toUpperCase()
    const nameArray = data.split('')
    nameArray.splice(0, 1, firstLetter).join(' ')
    document.querySelector('.pokemonName').textContent = nameArray.join('')
  }
  displayMoves(name) {
    this.moveList.forEach(move => {
      const li = document.createElement('li')
      li.textContent = move
      document.querySelector('.moveSetUl').appendChild(li)
    })
  }
}

//------------------------------------------------------------------------ARROWS:



//----left arrow: 

document.querySelector('.leftArrow').addEventListener('click', shiftLeft)

function shiftLeft() {

  if (teamIndex !== 5) {
    document.querySelector('#rightArrow').classList.remove('hide')
  }
  console.log('to the left!')
  if (teamIndex !== 0) {
    teamIndex--
    switchIcon(teamIndex)
    console.log(teamIndex)
  } else if (teamIndex === 0) {
    teamIndex = 5
    console.log(teamIndex)
    document.querySelector('#pokeIcon0').classList.remove('pokeIconActive')
    document.querySelector('#pokeIcon5').classList.add('pokeIconActive')
    document.querySelector('#pokeIcon4').classList.remove('pokeIconActive')
  }
}


//----right arrow: 

document.querySelector('.rightArrow').addEventListener('click', shiftRight)

function shiftRight() {


  console.log('to the right!')

  if (teamIndex !== 5) {

    teamIndex++
    switchIcon(teamIndex)
    console.log(teamIndex)

  } else if (teamIndex === 5) {
    teamIndex = 0
    console.log(teamIndex)
    document.querySelector('#pokeIcon1').classList.remove('pokeIconActive')
    document.querySelector('#pokeIcon0').classList.add('pokeIconActive')
    document.querySelector('#pokeIcon5').classList.remove('pokeIconActive')
  }
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
  // document.querySelector('.centerBall').style.backgroundColor = `${type}`1

  // document.querySelector('.centerBall').style.backgroundImage = `linear-gradient(to bottom,'${typeOne}' 1%,'${typeTwo}' 100%)`

}

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

class pokeInfo extends Pokemon {
  constructor(name, types) {
    super(name, types)
    this.locationURL = location
    this.locationList = []
    this.locationString = ''
  }

  encounterInfo() {
    fetch(this.locationURL)
      .then(res => res.json())
      .then(data => {
        console.log(data)

      })
      .catch(err => {
        console.log(`error: ${err}`)
      })
  }
}

const teamRoster = [
  {
    pokemonOneName: '',
    types: [],
    moves: [],
  },
  {
    pokemonTwoName: '',
    types: [],
    moves: [],
  },
  {
    pokemonTwoName: '',
    types: [],
    moves: [],
  },
  {
    pokemonTwoName: '',
    types: [],
    moves: [],
  },
  {
    pokemonTwoName: '',
    types: [],
    moves: [],
  },
  {
    pokemonTwoName: '',
    types: [],
    moves: [],
  },
]

