const game = new Game ();

function preload (){
    // console.log('this is the preload')
    game.preload()
}

function setup (){
    // console.log('This is the setup')
    let canvas = createCanvas(1200, 700);
    canvas.class('canvasContainer');


}

function draw (){
    game.draw()

}

function keyPressed (){
    if (keyCode === 32 && game.player.y === 470) {
        game.player.jump()
    }
}