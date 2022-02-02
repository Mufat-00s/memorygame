

//@ts-check
document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
      {
          name: 'farmgirl',
          img: 'Images/farmgirl.png'
      },
      {
          name: 'farmgirl',
          img: 'Images/farmgirl.png'
      },
      {
          name: 'farmgirlwhite',
          img: 'Images/farmgirlwhite.png'
      },
      {
          name: 'farmgirlwhite',
          img: 'Images/farmgirlwhite.png'
      },
      {
          name: 'map',
          img: 'Images/map.png'
      },
      {
          name: 'map',
          img: 'Images/map.png'
      },
      {
          name: 'mapwhite',
          img: 'Images/mapwhite.png'
      },
      {
          name: 'mapwhite',
          img: 'Images/mapwhite.png'
      },
      {
          name: 'rowhouse',
          img: 'Images/rowhouse.png'
      },
      {
          name: 'rowhouse',
          img: 'Images/rowhouse.png'
      },
      {
          name: 'rowhouseblack',
          img: 'Images/rowhouseblack.png'
      },
      {
          name: 'rowhouseblack',
          img: 'Images/rowhouseblack.png'
      },
      {
          name: 'tulip',
          img: 'Images/tulip.png'
      },
      {
          name: 'tulip',
          img: 'Images/tulip.png'
      },
      {
          name: 'tulipwhite',
          img: 'Images/tulipwhite.png'
      },
      {
          name: 'tulipwhite',
          img: 'Images/tulipwhite.png'
      },
      {
          name: 'windmill',
          img: 'Images/windmill.png'
      },
      {
          name: 'windmill',
          img: 'Images/windmill.png'
      },
      {
          name: 'windmillwhite',
          img: 'Images/windmillwhite.png'
      },
      {
          name: 'windmillwhite',
          img: 'Images/windmillwhite.png'
      }
    ]

    const board = document.querySelector(".board");
    createBoard();

    //creating the board
    function createBoard(){
        const elements = document.querySelectorAll(".image");
        Array.from(elements).forEach(function (el) {
            el.setAttribute('src', 'Images/blank.png');
            el.addEventListener('click', flipCard);
            board.appendChild(el);
         })
    }
          
    let cardsChosen = []

    
    //Flips the card that is clicked by the player
    function flipCard(){
      var cardID = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardID].name)
      this.setAttribute("src", cardArray[cardID].img)
      if (cardsChosen.length === 2){
        setTimeout(cardsMatchCheck, 1000)
      }
    }
      
    
    function cardsMatchCheck(){
      var cards = document.querySelectorAll("card")
      if(cardsChosen[0] === cardsChosen[1]){
        cards[cardsChosen[0]].removeEventListener("click", flipCard);
        cards[cardsChosen[1]].removeEventListener("click", flipCard);
      } else {
      cards[cardsChosen[0]].setAttribute('src', 'Images/blank.png');
      cards[cardsChosen[1]].setAttribute('src', 'Images/blank.png');
      }
      cardsChosen = []
      
    }
    

    })
    