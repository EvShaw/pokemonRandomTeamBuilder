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

// document.querySelectorAll('#pokeIcon1').classList.add('pokeIconActive')

//---------------------------------------------------------------------------Top Icons:

document.querySelector('.pokeballDisplay').addEventListener('click', iconChange)


function iconChange() {
  console.log('clicked')
}




//------------------------------------------------------------------------ARROWS:






//----left arrow: 

document.querySelector('.leftArrow').addEventListener('click', shiftLeft)

function shiftLeft() {
  switchIcon(teamIndex)
  if (teamIndex !== 6) {
    document.querySelector('#rightArrow').classList.remove('hide')
  }



  console.log('to the left!')

  if (teamIndex !== 0) {
    teamIndex--
    console.log(teamIndex)
  }


  if (teamIndex === 0) {
    document.querySelector('#leftArrow').classList.toggle('hide')
  }

}




//----right arrow: 

document.querySelector('.rightArrow').addEventListener('click', shiftRight)

function shiftRight() {

  switchIcon(teamIndex)

  // if (teamIndex === 0) {
  //   document.querySelector('#leftArrow').classList.remove('hide')
  // }

  // if (teamIndex === 6) {
  //   document.querySelector('#rightArrow').classList.add('hide')
  // }
  console.log('to the right!')

  if (teamIndex !== 6) {
    teamIndex++
    console.log(teamIndex)
  } else if (teamIndex === 6) {
    teamIndex = 0
    console.log(teamIndex)
  }

}





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