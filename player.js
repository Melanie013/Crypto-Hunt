class Player {

    constructor(){
        this.width = 210
        this.height = 160
        this.x = 120
        this.y = 470
        this.gravity = 0.25
        this.velocity = 0
    }



    draw() {

        this.velocity += this.gravity
        this.y += this.velocity

       if (this.y >=  470) {
           this.y = 470
       }



       image(game.playerImage, this.x, this.y, this.width, this.height)
 

    }

    jump() {

        this.velocity = -12
        
        

    }
    moveLeft(){
        this.x -= 50;
      
      }
      
      moveRight(){
        this.x += 50;
      }

}