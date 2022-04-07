class Bank {
    constructor(){
        this.x = 1200
        this.y = 400
        this.width = 400
        this.height = 250
        // this.speed = 10
    }

    collision(playerInfo){
        // console.log('collision', playerInfo)
         const bankX = this.x + this.width / 2
         const bankY = this.y + this.height / 2
         const playerX = playerInfo.x + playerInfo.width / 2
         const playerY = playerInfo.y + playerInfo.height / 2
         if (dist(bankX, bankY, playerX, playerY) > 60) {
             
             
 
             return true
         } else {
             
             return false
         }
 
     }



    draw(){
        this.x -=10
        image(game.bankImage, this.x, this.y, this.width, this.height)

    }




}