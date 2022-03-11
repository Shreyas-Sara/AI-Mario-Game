noseX = "";
noseY = "";


function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	coin_collect = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_kills = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent('canvas');

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_console');

	posenet = ml5.poseNet(video, modalLoaded);
	posenet.on('pose', allposes);
}

function modalLoaded() {
	console.log("Modal Loaded Successful");
}

function allposes(results) {
	if (results.length > 0) {
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
	
}

function draw() {
	game()
}







