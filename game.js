class Game {
    constructor (){
        this.background = new Background ()
        this.player = new Player ()
        this.backgroundImages = []
        this.playerImage = ''
        this.obstacle = []
        this.obstacle2 = []
        this.score = 0

    }


    draw() {
        console.log('score: ', this.score)
        this.background.draw()
        this.player.draw()

        if(frameCount % 300 === 0) {
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

        this.obstacle.map(obstacle => {
            if (!obstacle.collision(this.player)) {
                this.score += 10
                document.getElementById('score').innerText =`Score: ${game.score}`

            }

        })


        this.obstacle2.map(obstacle2 => {
            if (!obstacle2.collision(this.player)) {
                this.score += 2
                document.getElementById('score').innerText =`Score: ${game.score}`

            }

        })


        this.obstacle2 = this.obstacle2.filter(obstacle => {
			if (obstacle.collision(this.player) || obstacle.x < 0) {
                console.log('collision state',obstacle.collision(this.player))
				return true
			} else {
                console.log(obstacle.collision(this.player))
				return false
                
			}


    })




		this.obstacle = this.obstacle.filter(obstacle => {
			if (obstacle.collision(this.player) || obstacle.x < 0) {
                console.log('collision state',obstacle.collision(this.player))
				return true
			} else {
                console.log(obstacle.collision(this.player))
				return false
                
			}


    })
}
    
 
    preload () {
        this.backgroundImages = [

            {src: loadImage ('/Images/1.png'), x: 0, speed: 0 }, 
            {src: loadImage ('/Images/2.png'), x: 0, speed: 1 },
            {src: loadImage ('/Images/3.png'), x: 0, speed: 2 },
            {src: loadImage ('/Images/4.png'), x: 0, speed: 3 },          
            {src: loadImage ('/Images/5.png'), x: 0, speed: 4 },
            {src: loadImage ('/Images/6.png'), x: 0, speed: 5 }


        ]

        this.playerImage = loadImage('/Images/Pig.png')
        this.coinImage = loadImage('/Images/bitcoin_pixel_2-removebg-preview.png')
        this.coinImageTwo = loadImage('/Images/ethereum2.png')
        //this.bankImage = loadImage('/Images/bank_2-removebg-preview.png')
    }

}