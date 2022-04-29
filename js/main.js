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



let teamIndex = 1
const teamRoster = ['', '', '', '', '', '']


//--------------------------------------------------------------------Pokemon API Fetch:

let randNum = Math.floor(Math.random() * 898 ) + 1

let url = `https://pokeapi.co/api/v2/pokemon/${randNum}/`

fetch(url) 
  .then(res => res.json())
  .then(data => {
    console.log(data.name)
  })
  .catch(err => {
    console.log(err)
  })


//   //Example fetch using pokemonapi.co

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
//       .catch(err => {
//           console.log(`error ${err}`)
//       });



      
// }



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
