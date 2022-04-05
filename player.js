class Player {

    constructor(){
        this.width = 210
        this.height = 160
        this.x = 50
        this.y = 450
        this.gravity = 0.3 
        this.velocity = 0
    }



    draw() {

        this.velocity += this.gravity
        this.y += this.velocity

       if (this.y >=  450) {
           this.y = 450
       }



       image(game.playerImage, this.x, this.y, this.width, this.height)
 

    }

    jump() {

        this.velocity = -10

    }

}