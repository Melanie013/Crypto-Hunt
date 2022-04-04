class Player {

    constructor(){
        this.width = 230
        this.height = 180
        this.x = 0
        this.y = 700 - this.height
    }



    draw() {

        image(game.playerImage, this.x, this.y, this.width, this.height)


    }

}