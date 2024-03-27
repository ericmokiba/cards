let Player = {
    name :"Mokuba",
    chips :145,
    msg: function(){
        return "congratulation you money"
    }
    // you can also run this like: Player.msg()
}
let cards = []
let sum = 0
let blackjack = false
let Islive = false
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector("#sum-el")
let message = ""
let CardsEl = document.getElementById("cards-el")

let PlayerEl = document.getElementById("player-el")
PlayerEl.textContent = Player.name + " : $"  + Player.chips 

function getRandomCard(){
    let random = Math.floor(Math.random() * 13) + 1
    if(random ===1){
        return 11
    } else if (random > 10){
        return 10
    } else{
        return random
    }
    
   
}
function StartGame(){
    Islive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard() 
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard  
    RenderGame()
}

function RenderGame(){
    CardsEl.textContent ="Cards: "
    for(let i = 0; i < cards.length; i++){
        CardsEl.textContent +=cards[i] + " "
    }
    
    
    str= "Sum:"
    sumEl.textContent = str +" " +sum

    if(sum < 21 ) {
        message ="do you want to draw new card?😒"
    } else if (sum === 21){
        message = " wohoo! you've got blackjack😂"
        blackjack = true
    } else  {
        message = "You're out of the game😢"
        Islive = false
    }
    messageEl.textContent = message 
}

function newCard(){
    if( Islive === true && blackjack == false){
        let card = getRandomCard()
        sum+=card
        cards.push(card)
        console.log(cards)  
        RenderGame()
    }
    
}
let object = {
    london : "newcastle",
    rented: true,
    workers:['per',3],
}
console.log(object.workers)







