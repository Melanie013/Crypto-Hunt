const game = new Game ();

function preload (){
    // console.log('this is the preload')
    game.preload()
}

function setup (){
    // console.log('This is the setup')
    let canvas = createCanvas(1200, 700);
    let canvasContainer = document.getElementsByClassName('canvasContainer')[0]
    canvas.parent(canvasContainer)
}

function draw (){
    if(game.lives > 0)
    game.draw()

    else{
    game.gameOver()
    }    

}

function keyPressed (){
    if (keyCode === 38 && game.player.y === 470) {
        game.player.jump()
    }
    if (keyCode === 39) {
		game.player.moveRight()
	}
	if (keyCode === 37) {
		game.player.moveLeft()
	}
	
}