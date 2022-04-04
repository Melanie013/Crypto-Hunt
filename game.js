class Game {
    constructor (){
        this.background = new Background ()
        this.backgroundImages = []

    }


    draw() {
        this.background.draw()
    }

    preload () {
        this.backgroundImages = [

            {src: loadImage ('/Images/parallax-space-backgound.png')}, 
           // {src: loadImage ('parallax-space-big-planet.png'), x: 0, speed: 1 },
            //{src: loadImage ('parallax-space-far-planets.png'), x: 0, speed: 2 },
            //{src: loadImage ('parallax-space-ring-planet.png'), x: 0, speed: 3 },          
           // {src: loadImage ('parallax-space-stars.png'), x: 0, speed: 4 },

        ]
    }

}