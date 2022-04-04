class Game {
    constructor (){
        this.background = new Background ()
        this.player = new Player ()
        this.backgroundImages = []
        this.playerImage = ''

    }


    draw() {
        this.background.draw()
        this.player.draw()
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
    }

}