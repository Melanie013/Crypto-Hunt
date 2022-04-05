class Obstacle {
    constructor(image){

        this.image = image
        this.x = 1400
        this.y = random(100, 400)
        this.coinWidth = 50
        this.coinHeigth = 50

    }

    collision(playerInfo){

        console.log('collision', playerInfo)
        const obstacleX = this.x + this.coinWidth / 2
        const obstacleY = this.y + this.coinHeight / 2

        const playerX = playerInfo.x + playerInfo.width / 2
        const playerY = playerInfo.y + playerInfo.height / 2

        if (dist(obstacleX, obstacleY, playerX, playerY) < 100) {
			return true
		} else {
			return false
		}

    }



    draw(){

       
        this.x--
        image(game.coinImage, this.x, this.y, this.coinWidth ,this.coinHeigth)
        

    }



}