class Bank {
    constructor(){

        this.x = 1200
        this.y = 450
        this.speed = 4.5
        this.width = 100
        this.height = 150

    }

    draw(){
        this.x -= this.speed
        image(game.bankImage, this.x, this.y, this.width, this.height)

    }



}