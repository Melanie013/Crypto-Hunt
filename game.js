class Game {
    constructor (){
        this.background = new Background ()
        this.player = new Player ()
        this.backgroundImages = []
        this.playerImage = ''
        this.obstacle = []
        this.obstacle2 = []
        this.banksArr = []
        this.score = 0
        this.lives = 3
       // this.bank = new Bank()

    }


    draw() {
        console.log('score: ', this.score)
        this.background.draw()
        this.player.draw()

        if(frameCount % 350 === 0) {
            this.obstacle.push(new Obstacle(this.coinImage, 90, 90))

            // console.log(this.obstacle)
        }

        if(frameCount % 200 === 0) {
            this.obstacle2.push(new Obstacle(this.coinImageTwo, 80, 80))

            // console.log(this.obstacle)
        }

        this.obstacle.forEach(function(obstacle) {
            obstacle.draw()
        })

        this.obstacle2.forEach(function(obstacle) {
            obstacle.draw()
        })

        this.obstacle.map(obstacle => {                                         // BTC 
            if (!obstacle.collision(this.player)) {
                this.score += 45500
                document.getElementById('score').innerText =`Score: $ ${game.score}`

            }

        })

        this.obstacle2.map(obstacle2 => {                                       // ETH 
            if (!obstacle2.collision(this.player)) {
                this.score += 3300
                document.getElementById('score').innerText =`Score: $ ${game.score}`

            }

        })


        this.obstacle2 = this.obstacle2.filter(obstacle => {
			if (obstacle.collision(this.player) || obstacle.x < 0) {
               // console.log('collision state',obstacle.collision(this.player))
				return true
			} else {
                //console.log(obstacle.collision(this.player))
				return false
                
			}


    })

		this.obstacle = this.obstacle.filter(obstacle => {
			if (obstacle.collision(this.player) || obstacle.x < 0) {
                //console.log('collision state',obstacle.collision(this.player))
				return true
			} else {
                //console.log(obstacle.collision(this.player))
				return false
                
			}


    })



    if(frameCount % 1500 === 0) {                       // Bank
        this.banksArr.push(new Bank(this.bankImage))

        // console.log(this.obstacle)
    }

    this.banksArr.forEach(function(bank) {
        bank.draw()
    })

    

    /*this.banksArr.forEach(function(bank) {
        console.log(bank.collision(this.player))   
        /*if (bank.collision(this.player)){
            //this.lives = this.lives-1
            console.log('-1live', this.lives)

        }
        })*/
    


    this.banksArr = this.banksArr.filter(bank => {
        if (bank.collision(this.player) || bank.x < 0) {
            return true
        } else {
            return false
            
        }


})


    
    

    
    
}
    
 
    preload () {
        this.backgroundImages = [

            {src: loadImage ('/Images/back.png'), x: 0, speed: 0 }, 
            {src: loadImage ('/Images/sun.png'), x: 0, speed: 1 },
            {src: loadImage ('/Images/buildings.png'), x: 0, speed: 4 },
            {src: loadImage ('/Images/palms.png'), x: 0, speed: 5 },          
            {src: loadImage ('/Images/highway.png'), x: 0, speed: 6 },


        ]

        this.playerImage = loadImage('/Images/Pig.png')
        this.coinImage = loadImage('/Images/bitcoin_pixel_2-removebg-preview.png')
        this.coinImageTwo = loadImage('/Images/ethereum2.png')
        this.bankImage = loadImage('/Images/bank_2-removebg-preview.png')
    }

}