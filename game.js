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
        if (this.lives > 0) {
        console.log('score: ', this.score)
        this.background.draw()
        this.player.draw()

        if(frameCount % 250 === 0) {
            this.obstacle.push(new Obstacle(this.coinImage, 90, 90, 8))

            // console.log(this.obstacle)
        }

        if(frameCount % 150 === 0) {
            this.obstacle2.push(new Obstacle(this.coinImageTwo, 80, 80, 9))

            // console.log(frameCount)
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


        /*this.banksArr.map(banksArr => {                                       
            if (!banksArr.collision(this.player)) {
                this.lives -= 1
                //document.getElementById('lives').innerText =`Lives: ${game.lives}`

            }

        })
        document.getElementById('lives').innerText =`Lives: ${game.lives}`
        console.log(this.lives)*/




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



         if(frameCount % 400 === 0) {                       // Bank
            this.banksArr.push(new Bank(this.bankImage))

            // console.log(this.obstacle)
        }

        this.banksArr.forEach(function(bank) {
        bank.draw()
        })
    


        this.banksArr = this.banksArr.filter(bank => {
            if (!bank.collision(this.player)) {
                // console.log('teffer');
                this.removeLife()
                if(this.lives === 0) {
                    console.log('game over')
                
                    
                }
    
            }
            if (bank.collision(this.player) || bank.x < 0) {
                return true
            } else {
                return false
                
            }
    
    
        })
    }  


    
   // console.log(game.player.y)
}


    removeLife() {
        this.lives -= 1
        document.getElementById('livesContainer').removeChild(document.querySelector('.satoshi'))

    }

    
 
    preload () {
        this.backgroundImages = [

            {src: loadImage ('assets/back.png'), x: 0, speed: 0 }, 
            {src: loadImage ('assets/sun.png'), x: 0, speed: 1 },
            {src: loadImage ('assets/buildings.png'), x: 0, speed: 2 },
            {src: loadImage ('assets/palms.png'), x: 0, speed: 4 },          
            {src: loadImage ('assets/highway.png'), x: 0, speed: 5 },


        ]

        this.playerImage = loadImage('assets/Pig.png')
        this.coinImage = loadImage('assets/bitcoin_pixel_2-removebg-preview.png')
        this.coinImageTwo = loadImage('assets/ethereum2.png')
        this.bankImage = loadImage('assets/bank_2-removebg-preview.png')        
    }

}