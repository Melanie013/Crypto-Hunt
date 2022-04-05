class Obstacle {
    constructor(image){

        this.image = image
        this.x = 1200
        this.y = random(500)
        this.coinWidth = 70
        this.coinHeight = 70

    }

    collision(playerInfo){
        console.log('collision', playerInfo)
        const obstacleX = this.x + this.coinWidth / 2
        const obstacleY = this.y + this.coinHeight / 2
        const playerX = playerInfo.x + playerInfo.width / 2
        const playerY = playerInfo.y + playerInfo.height / 2
        if (dist(obstacleX, obstacleY, playerX, playerY) > 60) {
			return true
		} else {
			return false
		}

    }



    draw(){

       
        this.x--
        image(game.coinImage, this.x, this.y, this.coinWidth ,this.coinHeight)
        

    } 



}

