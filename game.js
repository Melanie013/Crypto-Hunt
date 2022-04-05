class Game {
    constructor (){
        this.background = new Background ()
        this.player = new Player ()
        this.backgroundImages = []
        this.playerImage = ''
        this.obstacle = []
        this.score = 0

    }


    draw() {
        console.log('score: ', this.score)
        this.background.draw()
        this.player.draw()

        if(frameCount % 150 === 0) {
            this.obstacle.push(new Obstacle(this.coinImage))

            // console.log(this.obstacle)
        }

        this.obstacle.forEach(function(obstacle) {
            obstacle.draw()
        })

        this.obstacle.map(obstacle => {
            if (!obstacle.collision(this.player)) {
                this.score += 1
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
       // this.coinImageTwo = loadImage('/Images/Ethereum-removebg-preview.png')
        this.bankImage = loadImage('/Images/bank_2-removebg-preview.png')
    }

}