const game = new Game ();

function preload (){
    // console.log('this is the preload')
    game.preload()
}

function setup (){
    // console.log('This is the setup')
    createCanvas(1200, 700);

}

function draw (){
    game.draw()

}

function keyPressed (){
    if (keyCode === 32) {
        game.player.jump()
    }

}