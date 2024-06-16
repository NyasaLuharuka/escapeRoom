import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs"

kaboom();

// load assets in
loadSprite("player", "sprites/cat1.png")
loadSprite("player2", "sprites/cat2.png")
loadSprite("bg1", "sprites/minecraft.jpeg")
loadSprite("mcgrass", "sprites/mcgrass.jpeg")
loadSprite("summary", "sprites/summary.png")
loadSprite("summarywhite", "sprites/summarywhite.png")
loadSprite("confetti", "sprites/confetti.jpeg")

loadSound("sound1", "sounds/score.mp3")
loadSound("sound2", "sounds/musescore.mp3")
loadSound("levelup", "sounds/levelup.wav")

loadSprite("bg2", "sprites/sevenHusbands/bg1.png")
loadSprite("laundry", "sprites/sevenHusbands/laundry.png")
loadSprite("bathtub", "sprites/sevenHusbands/bathtub.png")
loadSprite("mirror", "sprites/sevenHusbands/mirror.png")
loadSprite("cabinet", "sprites/sevenHusbands/cabinet.png")
loadSprite("vent", "sprites/sevenHusbands/vent.png")

loadSprite("bg3", "sprites/moana/bg3.jpeg")
loadSprite("backtower", "sprites/moana/backtower.jpeg")
loadSprite("ship", "sprites/moana/ship.jpeg")
loadSprite("tower", "sprites/moana/tower.jpeg")
loadSprite("tree", "sprites/moana/tree.jpeg")

loadSprite("bg4", "sprites/transNews/bg4.jpg")
loadSprite("house", "sprites/transNews/house.jpeg")
loadSprite("bg5", "sprites/transNews/bg5.jpeg")
loadSprite("couch", "sprites/transNews/couch.jpeg")
loadSprite("shelf", "sprites/transNews/shelf.jpeg")
loadSprite("skyscraper", "sprites/transNews/skyscraper.jpeg")
loadSprite("clock", "sprites/transNews/clock.jpeg")

loadSprite("bg6", "sprites/THUG+SIR/bg6.png")
loadSprite("talltower", "sprites/THUG+SIR/talltower.png")
loadSprite("bridge", "sprites/THUG+SIR/bridge.png")
loadSprite("smoke", "sprites/THUG+SIR/smoke.png")
loadSprite("dock", "sprites/THUG+SIR/dock.png")

loadSprite("bg7", "sprites/antigone/bg7.jpeg")
loadSprite("building", "sprites/antigone/building.jpeg")
loadSprite("news", "sprites/antigone/news.jpeg")
loadSprite("peopletalking", "sprites/antigone/peopletalking.jpeg")

//loadFont("pixelatedReg", "font/pixelatedReg.ttf")
loadFont("PixelatedReg", "font/PixelatedReg.otf")
loadFont("pixelatedBold", "font/pixelatedBold.ttf")

const WIDTH = width();
const HEIGHT = height();
console.log(HEIGHT, WIDTH)

var option = 0;
var CHARACTER;

/*
var text1 = add([
	text("CHOOSE A CHARACTER", { size: 0.02*WIDTH, font: "pixelatedBold" }),
	color(0, 0, 0),
	pos(WIDTH * (0.35), HEIGHT * (0.09)),
	"temp",
])
const player = add([
	sprite(CHARACTER),
	pos(WIDTH * (80 / 424), HEIGHT * (40 / 204)),
	scale(0.1 * (WIDTH / 424), 0.1 * (HEIGHT / 204)),
	//0.1, 0.1
	area(),
	body(),
	"player",
	"temp"
])

onCollide("player", "tub", () => {
	shake(50),
	add([
			text("You seem to be\ntrapped in a room...", { size: 0.02*WIDTH, font: "pixelatedBold" }),
			color(0, 0, 0),
			pos(WIDTH * (0.2), HEIGHT * (0.09)),
			"TEMP",
	])
	wait(3, () => {
		destroyAll("TEMP")
	})
})




*/


scene("chooseCharacter", () => {
	
	add([
		sprite("bg1", { width: WIDTH, height: HEIGHT }),
		"temp",
	]);
	

	add([
		sprite("mcgrass"),
		//scale(3.5),

		scale(1.25 * (WIDTH / 424), 1.25 * (HEIGHT / 204)),
		pos(0, (HEIGHT - (HEIGHT * (60 / 204)))),
		area(),
		body({ isStatic: true }),
		"temp",
	])
	add([
		sprite("mcgrass"),
		scale(1.25 * (WIDTH / 424), 1.25 * (HEIGHT / 204)),
		pos(WIDTH * (200 / 424), (HEIGHT - (HEIGHT * (60 / 204)))),
		area(),
		body({ isStatic: true }),
		"temp",
	])
	add([
		sprite("summary"),
		pos(0.95*WIDTH, HEIGHT*0.02),
		scale(WIDTH*(0.1/424), HEIGHT*(0.1/204)),
		"summary",
		area()
	])

	setGravity(1600)

	const player = add([
		// list of components
		sprite("player"),
		pos(WIDTH * (80 / 424), HEIGHT * (40 / 204)),
		scale(WIDTH*0.25/424, HEIGHT*0.5/424),
		area(),
		body(),
		"temp",
	])

	const player2 = add([
		// list of components
		sprite("player2"),
		pos(WIDTH * (300 / 424), HEIGHT * (40 / 204)),
		scale(WIDTH*0.25/424, HEIGHT*0.5/424),
		area(),
		body(),
		"temp",
	])

	var text1 = add([
		text("CHOOSE A CHARACTER", { size: 0.02*WIDTH, font: "pixelatedBold" }),
		color(0, 0, 0),
		pos(WIDTH * (0.35), HEIGHT * (0.09)),
		"temp",
	])

	var rect1 = add([
		pos(WIDTH * (0.42), HEIGHT*0.89),
		rect(WIDTH * 0.15, HEIGHT * 0.1),
		//scale(WIDTH*0.27/424, HEIGHT*0.12/204),
		outline(4),
		area(),
		"temp",
	])
	add([
		text("START", { size: 0.03*WIDTH, font: "pixelatedBold" }),
		color(0, 255, 0),
		pos(WIDTH * (0.436), HEIGHT*0.91),
		outline(4),
		"temp",
	])

	add([
		rect(WIDTH*0.5, HEIGHT*0.5),
		pos(WIDTH*0.25, HEIGHT*0.25),
		color(0,0,0),
		opacity(0.4),
		"temp2"
	])
	add([
		text("Hello! Welcome to IDENTITY UNMASKED! In each room, there will be an icon on the top right that gives a little background of the scene. Throughout this escape room, you'll go on a journey to escape different places and learn about new perspectives.\n\nIn the end, each room all connect back to the thesis: \n\nStories share new perspectives to create a sense of belonging within diverse communities by highlighting unnoticed identities that challenge society’s expectations.\n\nPress G (for GO) to begin your journey", {size: 0.02*WIDTH, font: "PixelatedReg", width: WIDTH*0.5}),
		color(255,255,255),
		pos(WIDTH*0.25, HEIGHT*0.25),
		"temp2"
	])
	onKeyPress("g", () => {
		destroyAll("temp2")
	})

	player.onClick(() => {
		option = 1;
		play("sound1")
		destroy(text1);
		text1 = add([
			text("PLAYER " + option, { size: 0.02*WIDTH, font: "pixelatedBold" }),
			color(0, 0, 0),
			pos(WIDTH * (80 / 424), HEIGHT * (30 / 204)),
			"temp",
		])


	})
	player2.onClick(() => {
		option = 2;
		destroy(text1);
		text1 = add([
			text("PLAYER " + option, { size: 0.02*WIDTH, font: "pixelatedBold" }),
			color(0, 0, 0),
			pos(WIDTH * (300 / 424), HEIGHT * (30 / 204)),
			"temp",
		])
		play("sound1")

	})

	onClick("summary", () => {
		var rect3 = add([
			rect(WIDTH, HEIGHT),
			//opacity(0.5),
			opacity(0),
			color(255, 255, 255),
			"temp1"
		])
		var rect2 = add([
			rect(WIDTH*0.5, HEIGHT*0.5),
			opacity(0.4),
			color(0,0,0),
			pos(WIDTH*0.25, HEIGHT*0.25),
			"temp1"
		])
		const text1 = add([
			text("Some general tips:\n-Don’t overthink it. Most of the answers are very straightforward.\n-There is an icon in the top right corner that gives you a summary of each story the room is based on\n-DO NOT overclick. Click cautiously, the game may experience errors with a high amount of clicking.\n\nHAVE FUN!", { size: 0.02*WIDTH, font: "PixelatedReg", width: WIDTH*0.5}),
			pos(WIDTH * 0.25, HEIGHT * 0.25),
			color(255, 255, 255),
			"temp1"

		])

		var text2 = add([
			text("Hit space to exit and begin!", { size: 0.02*WIDTH, font: "pixelatedBold"}),
			pos(WIDTH*0.31, HEIGHT*0.7),
			color(0, 255, 0),
			"temp1"
		])

		onKeyPress("space", () => {
				destroyAll("temp1");
		})
	})

	rect1.onClick(() => {
		if (option == 1) {
			CHARACTER = "player"
		}
		else {
			CHARACTER = "player2"
		}
		destroyAll("temp")
		go("sevenHusbands")
	})
})

go("chooseCharacter")
setGravity(1600)
if (option == 1) {
	CHARACTER = "player"
}
else {
	CHARACTER = "player2"
}
play("sound2", {
	loop: true
})
scene("sevenHusbands", () => {

	add([
		sprite("bg2", { width: WIDTH, height: HEIGHT }),
		"temp"
	])

	const player = add([
		sprite(CHARACTER),
		pos(WIDTH * (80 / 424), HEIGHT * (40 / 204)),
		scale(0.1 * (WIDTH / 424), 0.1 * (HEIGHT / 204)),
		//0.1, 0.1
		area(),
		body(),
		"player",
		"temp"
	])

	onKeyPress("j", () =>{
		player.jump()
	})

	const tub = add([
		sprite("bathtub"),
		pos(3 * (WIDTH / 424), HEIGHT - (55 * (HEIGHT / 204))),
		area(),
		body({ isStatic: true }),
		scale(0.5 * (WIDTH / 424), 0.35 * (HEIGHT / 204)),
		"tub",
		"temp"
	])

	onCollide("player", "tub", () => {
		shake(50),
		add([
				text("You seem to be\ntrapped in a room...", { size: 0.02*WIDTH, font: "pixelatedBold" }),
				color(0, 0, 0),
				pos(WIDTH * (0.2), HEIGHT * (0.09)),
				"TEMP",
		])
		wait(3, () => {
			destroyAll("TEMP")
		})
	})
	const laundry = add([
		sprite("laundry"),
		pos(WIDTH * 0.83, HEIGHT * 0.47),
		scale(0.5 * (WIDTH / 424), 0.5 * (HEIGHT / 204)),
		area(),
		"laundry",
		"temp"
	])

	const mirror = add([
		sprite("mirror"),
		pos(WIDTH * 0.43, HEIGHT * 0.495),
		scale(0.5 * (WIDTH / 424), 0.5 * (HEIGHT / 204)),
		area(),
		"mirror",
		"temp"
	])

	const cabinet = add([
		sprite("cabinet"),
		pos(WIDTH * 0.65, HEIGHT * 0.16),
		scale(0.5 * (WIDTH / 424), 0.5 * (HEIGHT / 204)),
		area(),
		"cabinet",
		"temp"
	])

	const vent = add([
		sprite("vent"),
		pos(WIDTH * 0.05, HEIGHT * 0.03),
		scale(0.5 * (WIDTH / 424), 0.5 * (HEIGHT / 204)),
		area(),
		"vent",
		"temp"
	])

	add([
		sprite("summarywhite"),
		pos(0.95*WIDTH, HEIGHT*0.02),
		scale(WIDTH*(0.1/424), HEIGHT*(0.1/204)),
		"summary",
		color(255,255,255),
		area()
	])

	onClick("vent", () => {
		if (one && two && three && four) {
			add([
				sprite("confetti",{ width: WIDTH, height: HEIGHT }),
				opacity(0.3),
				"temp"
			])
			var text1 = add([
				text("You escaped!", { size: 0.05 * 0.5 *WIDTH, font: "pixelatedBold" }),
				pos(WIDTH * 0.41, HEIGHT * 0.5),
				color(0, 0, 0)
			])
			wait(1.5, () => {
				destroy(text1)
				destroyAll("temp")
				go("moana")
			})
		}
		else {
			var text1 = add([
				text("It seems you need a key...", { size: 0.02 *WIDTH, font: "pixelatedBold" }),
				pos(WIDTH * 0.15, HEIGHT * 0.1),
				color(255, 255, 255)
			])
			
			wait(1, () => {
				destroy(text1),
				destroyAll("tempy")
			})
		}

	})
	var one = false;
	var two = false;
	var three = false;
	var four = false;

	onClick("summary", () => {
		var rect3 = add([
			rect(WIDTH, HEIGHT),
			opacity(0.5),
			color(255, 255, 255),
			"temp1"
		])
		var rect2 = add([
			rect(WIDTH*0.5, HEIGHT*0.5),
			opacity(0.45),
			color(0,0,0),
			pos(WIDTH*0.25, HEIGHT*0.25),
			"temp1"
		])
		const text1 = add([
			text("The Seven Husbands of Evelyn Hugo, is a contemporary fictional novel that describes the life of a popular actress, Evelyn Hugo, in the 1900s.Taylor Jenkins Reid takes the reader through each of her seven husbands as she describes Evelyn’s true love and their complicated relationship: Celia", { size: 0.03 * 0.5 *WIDTH, font: "PixelatedReg", width: WIDTH*0.5 }),
			pos(WIDTH * 0.25, HEIGHT * 0.25),
			color(255, 255, 255),
			"temp1"

		])

		var text2 = add([
			text("Hit space to find next clue!", { size: 0.02*WIDTH, font: "pixelatedBold"}),
			pos(WIDTH*0.31, HEIGHT*0.7),
			color(0, 255, 0),
			"temp1"
		])

		onKeyPress("space", () => {
				destroyAll("temp1")
		})
	})
	onClick("tub", () => {
		var rect3 = add([
			rect(WIDTH, HEIGHT),
			opacity(0.5),
			color(255, 255, 255),
			"temp1"
		])
		var rect2 = add([
			rect(WIDTH*0.5, HEIGHT*0.5),
			opacity(0.45),
			color(0,0,0),
			pos(WIDTH*0.25, HEIGHT*0.25),
			"temp1"
		])
		const text1 = add([
			text("You found a note!\n\nThis note is both a symbol of love and an insight for others into Evelyn and Celia’s relationship. Max, one of Evelyn’s husbands, finds a note Evelyn writes to Celia and begins to insult her. However, throughout the letter, Evelyn demonstrates love and vulnerability. This contrast between the world seeing her and who she is ultimately becomes a big plot point in the book.\n\nThe end of the note mentions a dress...", { size: 0.03 * 0.5 *WIDTH, font: "PixelatedReg", width: WIDTH*0.5 }),
			pos(WIDTH * 0.25, HEIGHT * 0.25),
			color(255, 255, 255),
			"temp1"
			
		])

		var text2 = add([
			text("Hit space to find next clue!", { size: 0.02*WIDTH, font: "pixelatedBold"}),
			pos(WIDTH*0.31, HEIGHT*0.7),
			color(0, 255, 0),
			"temp1"
		])
		
		onKeyPress("space", () => {
				destroyAll("temp1")
		})
		one = true;
	})
	
		

	onClick("laundry", () => {
		if (one) {
			var rect3 = add([
				rect(WIDTH, HEIGHT),
				opacity(0.5),
				color(255, 255, 255),
				"temp1"
			])
			var rect2 = add([
				rect(WIDTH*0.5, HEIGHT*0.5),
				opacity(0.45),
				color(0,0,0),
				pos(WIDTH*0.25, HEIGHT*0.25),
				"temp1"
			])
			const text1 = add([
				text("You found a green dress!\n\nThe green dress is very prominent, appearing in many book scenes, including the cover. The most notable is during the 1959 Academy Awards. That night, Evelyn kisses Celia for the first time, truly exploring her sexuality. To her, the green dress serves as a sign of new beginnings. However, in an article titled, “Evelyn, Green’s Not Your Color”, the media claims she is green with envy towards Celia. The green is another illustration of contrasting opinions on identity.\n\nSee if you can find a reflection...", { size: 0.03 * 0.5 *WIDTH, font: "PixelatedReg", width: WIDTH*0.5 }),
				pos(WIDTH * 0.25, HEIGHT * 0.25),
				color(255, 255, 255),
				"temp1"

			])

			var text2 = add([
				text("Hit space to find next clue!", { size: 0.02*WIDTH, font: "pixelatedBold"}),
				pos(WIDTH*0.31, HEIGHT*0.7),
				color(0, 255, 0),
				"temp1"
			])

			onKeyPress("space", () => {
					destroyAll("temp1")
			})
			two = true;
		}
		else {
			var text1 = add([
				text("Hmmmmmm...", {size: 0.02 *WIDTH, font: "pixelatedBold" }),
				pos(WIDTH * 0.83, HEIGHT * 0.43),
				color(255, 255, 255)
			])
			wait(1, () => {
				destroy(text1)
			})
		}
	})

	onClick("mirror", () => {
		if (one && two) {
			var rect3 = add([
				rect(WIDTH, HEIGHT),
				opacity(0.5),
				color(255, 255, 255),
				"temp1"
			])
			var rect2 = add([
				rect(WIDTH*0.5, HEIGHT*0.5),
				opacity(0.45),
				color(0,0,0),
				pos(WIDTH*0.25, HEIGHT*0.25),
				"temp1"
			])
			const text1 = add([
				text("You found a secret code behind the mirror!\n\nThroughout the book, Evelyn feels a strong need to conform to the media’s expectations of her, changing her name and focusing on using her looks to get where she wants. She hides her identity, trying to change who she is to conform to society’s expectations of her.\n\nThe code suggests finding a key...", { size: 0.03 * 0.5 *WIDTH, font: "PixelatedReg", width: WIDTH*0.5}),
				pos(WIDTH * 0.25, HEIGHT * 0.25),
				color(255, 255, 255),
				"temp1"

			])

			var text2 = add([
				text("Hit space to find next clue!", { size: 0.02*WIDTH, font: "pixelatedBold"}),
				pos(WIDTH*0.31, HEIGHT*0.7),
				color(0, 255, 0),
				"temp1"
			])

			onKeyPress("space", () => {
					destroyAll("temp1")
			})
			three = true;
		}
		else {
			var text1 = add([
				text("Hmmmmmm...", {size: 0.02 *WIDTH, font: "pixelatedBold" }),
				pos(WIDTH * 0.35, HEIGHT * 0.43),
				color(255, 255, 255)
			])
			wait(1, () => {
				destroy(text1)
			})
		}
	})

	onClick("cabinet", () => {
		if (one && two && three) {
			var rect3 = add([
				rect(WIDTH, HEIGHT),
				opacity(0.5),
				color(255, 255, 255),
				"temp1"
			])
			var rect2 = add([
				rect(WIDTH*0.5, HEIGHT*0.5),
				opacity(0.45),
				color(0,0,0),
				pos(WIDTH*0.25, HEIGHT*0.25),
				"temp1"
			])
			const text1 = add([
				text("You found a key!\n\nEvelyn Hugo’s identity as a Cuban, bisexual woman is often talked down upon and stigmatized throughout the book. This book takes place in the 1900’s, where queer relationships are not accepted. Even Celia, who she calls her “true love”, does not want to believe that she can love multiple genders.\n“Don’t ignore half of me so you can fit me into a box” (Reid, 124)\n\nWhere can you use the key...", { size: 0.03 * 0.5 *WIDTH, font: "PixelatedReg", width: WIDTH*0.5}),
				pos(WIDTH * 0.25, HEIGHT * 0.25),
				color(255, 255, 255),
				"temp1"

			])

			var text2 = add([
				text("Hit space to find next clue!", { size: 0.02*WIDTH, font: "pixelatedBold"}),
				pos(WIDTH*0.31, HEIGHT*0.7),
				color(0, 255, 0),
				"temp1"
			])

			onKeyPress("space", () => {
					destroyAll("temp1")
			})
			four = true;
		}
		else {
			var text1 = add([
				text("Hmmmmmm...", { size: 0.02 *WIDTH, font: "pixelatedBold" }),
				pos(WIDTH * 0.68, HEIGHT * 0.1),
				color(255, 255, 255)
			])
			wait(1, () => {
				destroy(text1)
			})
		}
	})
})

scene("moana", () => {
	add([
		sprite("bg3", { width: WIDTH, height: HEIGHT }),
	])

	const ship = add([
		sprite("ship"),
		scale(WIDTH * 0.45/424, HEIGHT * 0.35/204),
		pos(WIDTH * 0.27, HEIGHT * 0.557),
		area(),
		body({ isStatic: true }),
		"ship",
		"temp"
	])
	

	const backtower = add([
		sprite("backtower"),
		scale(WIDTH*0.43/424, HEIGHT * 0.35/204),
		pos(WIDTH*0.126, HEIGHT*-0.037),
		area(),
		"backtower",
		"temp"
	])

	const tower = add([
		sprite("tower"),
		scale(WIDTH*0.45/424, HEIGHT * 0.35/204),
		pos(WIDTH*0.86, HEIGHT*-0.07),
		area(),
		"tower",
		"temp"
	])

	const tree = add([
		sprite("tree"),
		scale(WIDTH*0.42/424, HEIGHT*0.35/204),
		pos(WIDTH*0.0, HEIGHT*0.69),
		area(),
		"tree",
		"temp"
	])

	add([
		sprite("summarywhite"),
		pos(0.95*WIDTH, HEIGHT*0.02),
		scale(WIDTH*(0.1/424), HEIGHT*(0.1/204)),
		"summary",
		area()
	])

	const player = add([
		sprite(CHARACTER),
		pos(WIDTH * 0.33, HEIGHT * (40 / 204)),
		scale(0.1 * (WIDTH / 424), 0.1 * (HEIGHT / 204)),
		//0.1, 0.1
		area(),
		body(),
		"player",
		"temp"
	])


	var one = false;
	var two = false;
	var three = false;

	onCollide("player", "ship", () => {
		shake(50),
		add([
				text("You‘re sailing away...", { size: 0.02*WIDTH, font: "pixelatedBold" }),
				color(0, 0, 0),
				pos(WIDTH * (0.35), HEIGHT * (0.09)),
				"TEMP",
		])
		wait(3, () => {
			destroyAll("TEMP")
		})
	})
	
	onClick("summary", () => {
		var rect3 = add([
			rect(WIDTH, HEIGHT),
			opacity(0.5),
			color(255, 255, 255),
			"temp1"
		])
		var rect2 = add([
			rect(WIDTH*0.5, HEIGHT*0.5),
			opacity(0.45),
			color(0,0,0),
			pos(WIDTH*0.25, HEIGHT*0.25),
			"temp1"
		])
		const text1 = add([
			text("Moana is an action-animated film about a girl taking risks to leave her safe island and explore the ocean. Throughout the story, she finds not only herself but makes friends as she tries to get “the heart” back to the goddess Te Fiti.", { size: 0.03 * 0.5 *WIDTH, font: "PixelatedReg", width: WIDTH*0.5 }),
			pos(WIDTH * 0.25, HEIGHT * 0.25),
			color(255, 255, 255),
			"temp1"

		])

		var text2 = add([
			text("Hit space to find next clue!", { size: 0.02*WIDTH, font: "pixelatedBold"}),
			pos(WIDTH*0.31, HEIGHT*0.7),
			color(0, 255, 0),
			"temp1"
		])

		onKeyPress("space", () => {
				destroyAll("temp1")
		})
	})
	onClick("backtower", () => {
		var rect3 = add([
			rect(WIDTH, HEIGHT),
			opacity(0.5),
			color(255, 255, 255),
			"temp1"
		])
		var rect2 = add([
			rect(WIDTH*0.5, HEIGHT*0.5),
			opacity(0.45),
			color(0,0,0),
			pos(WIDTH*0.25, HEIGHT*0.25),
			"temp1"
		])
		const text1 = add([
			text("You found a home!\n\nMoana is often torn between finding herself and staying within her boundaries. Within her society on the island, many think it is too dangerous for her to go. Throughout her journey, there is a constant contrast between what the people on her island want and what she wants. Ultimately, she decides that she cannot hide herself and leaves.\n\nSee if you can find a journey...", { size: 0.03 * 0.5 *WIDTH, font: "PixelatedReg", width: WIDTH*0.5 }),
			pos(WIDTH * 0.25, HEIGHT * 0.25),
			color(255, 255, 255),
			"temp1"

		])

		var text2 = add([
			text("Hit space to find next clue!", { size: 0.02*WIDTH, font: "pixelatedBold"}),
			pos(WIDTH*0.31, HEIGHT*0.7),
			color(0, 255, 0),
			"temp1"
		])

		onKeyPress("space", () => {
				destroyAll("temp1")
		})
		one = true;
	})

	onClick("ship", () => {
		if (one) {
			var rect3 = add([
				rect(WIDTH, HEIGHT),
				opacity(0.5),
				color(255, 255, 255),
				"temp1"
			])
			var rect2 = add([
				rect(WIDTH*0.5, HEIGHT*0.5),
				opacity(0.45),
				color(0,0,0),
				pos(WIDTH*0.25, HEIGHT*0.25),
				"temp1"
			])
			const text1 = add([
				text("You found the ship!\n\nMoana’s journey to finding herself is extremely challenging in various ways. She feels shackled by what her society wants, but her sailing away is a symbol of the freedom of exploration. She could not hide her true identity and ultimately ended up taking a huge risk. This risk could have been avoided if she had support, but she had no other choice.\n\nThere’s a scroll that suggests you find something tall...", { size: 0.03 * 0.5 *WIDTH, font: "PixelatedReg", width: WIDTH*0.5 }),
				pos(WIDTH * 0.25, HEIGHT * 0.25),
				color(255, 255, 255),
				"temp1"

			])

			var text2 = add([
				text("Hit space to find next clue!", { size: 0.02*WIDTH, font: "pixelatedBold"}),
				pos(WIDTH*0.31, HEIGHT*0.7),
				color(0, 255, 0),
				"temp1"
			])

			onKeyPress("space", () => {
					destroyAll("temp1")
			})
			two = true;
		}
		else {
			var text1 = add([
				text("Hmmmmm...", { size: 0.03 * 0.5 *WIDTH, font: "pixelatedBold" }),
				pos(WIDTH * 0.4, HEIGHT * 0.65),
				color(255, 255, 255)
			])
			wait(1, () => {
				destroy(text1)
			})
		}
	})

	onClick("tower", () => {
		if (one && two) {
			var rect3 = add([
				rect(WIDTH, HEIGHT),
				opacity(0.5),
				color(255, 255, 255),
				"temp1"
			])
			var rect2 = add([
				rect(WIDTH*0.5, HEIGHT*0.5),
				opacity(0.45),
				color(0,0,0),
				pos(WIDTH*0.25, HEIGHT*0.25),
				"temp1"
			])
			const text1 = add([
				text("You found a tower!\n\nAlong the way, Moana meets many challenges that not only help her understand herself but help others understand themselves too. At first, Maui traps Moana in a cave. However, she does not only get out, but she makes Maui take her with him to return the heart. Along the way, she helps Maui realize who he is behind all the glamour and things he does for other people. Moana also helps Te Fiti realize who she is, symbolized by giving the heart back.\n\nLook for a sneaky escape!", { size: 0.03 * 0.5 *WIDTH, font: "PixelatedReg", width: WIDTH*0.5 }),
				pos(WIDTH * 0.25, HEIGHT * 0.25),
				color(255, 255, 255),
				"temp1"

			])

			var text2 = add([
				text("Hit space to find next clue!", { size: 0.02*WIDTH, font: "pixelatedBold"}),
				pos(WIDTH*0.31, HEIGHT*0.7),
				color(0, 255, 0),
				"temp1"
			])

			onKeyPress("space", () => {
					destroyAll("temp1")
			})
			three = true;
		}
		else {
			var text1 = add([
				text("Hmmmm...", { size: 0.03 * 0.5 *WIDTH, font: "pixelatedBold" }),
				pos(WIDTH * 0.87, HEIGHT * 0.2),
				color(255, 255, 255)
			])
			wait(1, () => {
				destroy(text1)
			})
		}
	})

	onClick("tree", () => {
		if (one && two && three) {
			add([
				sprite("confetti",{ width: WIDTH, height: HEIGHT }),
				opacity(0.3),
				"temp"
			])
			var text1 = add([
				text("You escaped!", { size: 0.05 * 0.5 *WIDTH, font: "pixelatedBold" }),
				pos(WIDTH * 0.41, HEIGHT * 0.5),
				color(0, 0, 0)
			])
			wait(1.5, () => {
				destroy(text1)
				destroyAll("temp")
				go("transNews")
			})	
		}
		else {
			var text1 = add([
				text("You haven’t found anything yet...", { size: 0.03 * 0.5 *WIDTH, font: "pixelatedBold" }),
				pos(WIDTH * 0.0, HEIGHT * 0.95),
				color(255, 255, 255)
			])
			wait(1, () => {
				destroy(text1)
			})
		}
	})
})

scene("transNews", () => {
	add([
		sprite("bg4", { width: WIDTH, height: HEIGHT }),
		"temp"
	])

	const house = add([
		sprite("house"),
		scale(WIDTH*0.12/424, HEIGHT*0.22/424),
		pos(WIDTH*0.43, HEIGHT*0.45),
		area(),
		"house",
		"temp"
	])

	add([
		text("Oh a house...", {size: WIDTH*0.5*0.04, font: "pixelatedBold"}),
		pos(WIDTH*0.3, HEIGHT*0.2),
		"temp"
	])

	onClick("house", () => {
		destroyAll("temp")
		go("transNews2")
	})
})

scene("transNews2", () => {
	add([
		sprite("bg5", { width: WIDTH, height: HEIGHT }),
		"temp"
	])

	const couch = add([
		sprite("couch"),
		scale(WIDTH*0.68/424, HEIGHT*0.63/204),
		pos(WIDTH*0, HEIGHT*0.75),
		area(),
		body({isStatic: true}),
		"temp",
		"couch"
	])

	const shelf = add([
		sprite("shelf"),
		scale(WIDTH*0.7/424, HEIGHT*0.7/204),
		pos(WIDTH*0.27, HEIGHT*0.50),
		area(),
		"temp",
		"shelf"
	])

	const skyscraper = add([
		sprite("skyscraper"),
		scale(WIDTH*0.7/424, HEIGHT*0.58/204),
		pos(WIDTH*0.53, HEIGHT*0.05),
		area(),
		"temp",
		"skyscraper"
	])

	add([
		sprite("clock"),
		"clock",
		area(),
		"temp",
		scale(WIDTH*0.65/424, HEIGHT*0.54/204),
		pos(WIDTH*0.473, HEIGHT*0.086)
	])

	add([
		sprite("summarywhite"),
		pos(0.95*WIDTH, HEIGHT*0.02),
		scale(WIDTH*(0.1/424), HEIGHT*(0.1/204)),
		"summary",
		"temp",
		area()
	])

	const player = add([
		sprite(CHARACTER),
		pos(WIDTH * 0.05, HEIGHT * (40 / 204)),
		scale(0.1 * (WIDTH / 424), 0.1 * (HEIGHT / 204)),
		//0.1, 0.1
		area(),
		body(),
		"player",
		"temp"
	])

	onCollide("player", "couch", () => {
		shake(50),
		add([
				text("Inside the house...", { size: 0.02*WIDTH, font: "pixelatedBold" }),
				color(255, 255, 255),
				pos(WIDTH * (0.4), HEIGHT * (0.09)),
				"TEMP",
		])
		wait(3, () => {
			destroyAll("TEMP")
		})
	})

	var one = false;
	var two = false;
	var three = false;
	onClick("summary", () => {
		var rect3 = add([
			rect(WIDTH, HEIGHT),
			opacity(0.5),
			color(255, 255, 255),
			"temp1"
		])
		var rect2 = add([
			rect(WIDTH*0.5, HEIGHT*0.5),
			opacity(0.45),
			color(0,0,0),
			pos(WIDTH*0.25, HEIGHT*0.25),
			"temp1"
		])
		const text1 = add([
			text("This refers to a news article titled “Claiming abuse, Texas tries to prevent gender-affirming care for trans children”, about a trans family struggle within a society (Texas) that stigmatizes transgender people, hearing from both the family and an expert on how to make a more understanding community", { size: 0.03 * 0.5 *WIDTH, font: "PixelatedReg", width: WIDTH*0.5 }),
			pos(WIDTH * 0.25, HEIGHT * 0.25),
			color(255, 255, 255),
			"temp1"

		])

		var text2 = add([
			text("Hit space to find next clue!", { size: 0.02*WIDTH, font: "pixelatedBold"}),
			pos(WIDTH*0.31, HEIGHT*0.7),
			color(0, 255, 0),
			"temp1"
		])

		onKeyPress("space", () => {
				destroyAll("temp1")
		})
	})
	onClick("couch", () => {
		var rect3 = add([
			rect(WIDTH, HEIGHT),
			opacity(0.5),
			color(255, 255, 255),
			"temp1"
		])
		var rect2 = add([
			rect(WIDTH*0.5, HEIGHT*0.5),
			opacity(0.45),
			color(0,0,0),
			pos(WIDTH*0.25, HEIGHT*0.25),
			"temp1"
		])
		const text1 = add([
			text("You found an empty couch!\n\nOften, there is not enough light shed on the problems transgender people face. Even in a room that is meant to be inclusive, there is only a lamp that spotlights the room. Additionally, the empty couch next to it is meant to demonstrate the isolation and emptiness that transgender people may feel due to the ignorance that occurs around them.\n\nWhat does the outside world see...", { size: 0.03 * 0.5 *WIDTH, font: "PixelatedReg", width: WIDTH*0.5 }),
			pos(WIDTH * 0.25, HEIGHT * 0.25),
			color(255, 255, 255),
			"temp1"

		])

		var text2 = add([
			text("Hit space to find next clue!", { size: 0.02*WIDTH, font: "pixelatedBold"}),
			pos(WIDTH*0.31, HEIGHT*0.7),
			color(0, 255, 0),
			"temp1"
		])

		onKeyPress("space", () => {
				destroyAll("temp1")
		})
		one = true;
	})

	onClick("skyscraper", () => {
		if (one) {
			var rect3 = add([
				rect(WIDTH, HEIGHT),
				opacity(0.5),
				color(255, 255, 255),
				"temp1"
			])
			var rect2 = add([
				rect(WIDTH*0.5, HEIGHT*0.5),
				opacity(0.45),
				color(0,0,0),
				pos(WIDTH*0.25, HEIGHT*0.25),
				"temp1"
			])
			const text1 = add([
				text("You found a skyscraper!\n\nThe outside bleak color demonstrates the lack of understanding and awareness in contrast to the inside of the house where many resources and items are available. The massive skyscrapers can also be a symbol to the majority of people who don’t truly understand the struggles transgender people face.\n\nWhere can you find knowledge...", { size: 0.03 * 0.5 *WIDTH, font: "PixelatedReg", width: WIDTH*0.5 }),
				pos(WIDTH * 0.25, HEIGHT * 0.25),
				color(255, 255, 255),
				"temp1"

			])

			var text2 = add([
				text("Hit space to find next clue!", { size: 0.02*WIDTH, font: "pixelatedBold"}),
				pos(WIDTH*0.31, HEIGHT*0.7),
				color(0, 255, 0),
				"temp1"
			])

			onKeyPress("space", () => {
					destroyAll("temp1")
			})
			two = true;
		}
		else {
			var text1 = add([
				text("Hmmmmm....", { size: 0.03 * 0.5 *WIDTH, font: "pixelatedBold" }),
				pos(WIDTH * 0.53, HEIGHT * 0.25),
				color(255, 255, 255)
			])
			wait(1, () => {
				destroy(text1)
			})
		}
	})

	onClick("shelf", () => {
		if (one && two) {
			var rect3 = add([
				rect(WIDTH, HEIGHT),
				opacity(0.5),
				color(255, 255, 255),
				"temp1"
			])
			var rect2 = add([
				rect(WIDTH*0.5, HEIGHT*0.5),
				opacity(0.45),
				color(0,0,0),
				pos(WIDTH*0.25, HEIGHT*0.25),
				"temp1"
			])
			const text1 = add([
				text("You found the library!\n\nThe abundance of books symbolizes knowledge and awareness that many lack. At times, humanity can be ignorant of items that don’t apply to them, and it is important to make this information more accessible to all to raise awareness of the problems occurring.\n\nLook for a clock...", { size: 0.03 * 0.5 *WIDTH, font: "PixelatedReg", width: WIDTH*0.5 }),
				pos(WIDTH * 0.25, HEIGHT * 0.25),
				color(255, 255, 255),
				"temp1"

			])

			var text2 = add([
				text("Hit space to find next clue!", { size: 0.02*WIDTH, font: "pixelatedBold"}),
				pos(WIDTH*0.31, HEIGHT*0.7),
				color(0, 255, 0),
				"temp1"
			])

			onKeyPress("space", () => {
					destroyAll("temp1");
					three = true;
			})
		}
		else {
			var text1 = add([
				text("Hmmmmm....", { size: 0.03 * 0.5 *WIDTH, font: "pixelatedBold" }),
				pos(WIDTH * 0.28, HEIGHT * 0.53),
				color(255, 255, 255)
			])
			wait(1, () => {
				destroy(text1)
			})
		}
	})

	onClick("clock", () => {
		if (one && two && three) {
			add([
				sprite("confetti",{ width: WIDTH, height: HEIGHT }),
				opacity(0.3),
				"temp"
			])
			var text1 = add([
				text("You escaped!", { size: 0.05 * 0.5 *WIDTH, font: "pixelatedBold" }),
				pos(WIDTH * 0.41, HEIGHT * 0.5),
				color(0, 0, 0)
			])
			wait(1.5, () => {
				destroy(text1)
				destroyAll("temp")
				go("THUG+SIR")
			})
		}
		else {
			var text1 = add([
				text("Not the right time...", { size: 0.03 * 0.5 *WIDTH, font: "pixelatedBold" }),
				pos(WIDTH * 0.41, HEIGHT * 0.28),
				color(255, 255, 255)
			])
			wait(1, () => {
				destroy(text1)
			})
		}
	})
})

scene("THUG+SIR", () => {

	setGravity(1600)
	add([
		sprite("bg6", { width: WIDTH, height: HEIGHT }),
		"temp"
	])
	add([
		sprite("smoke"),
		area(),
		"smoke",
		"temp",
		pos(WIDTH*0, HEIGHT*0.038),
		scale(WIDTH*0.22/424, HEIGHT*0.18/204)
	])
	add([
		sprite("bridge"),
		"bridge",
		"temp",
		pos(WIDTH*0.183, HEIGHT*0.68),
		scale(WIDTH*0.22/424, HEIGHT*0.18/204),
		body({isStatic: true}),
		area()
	])
	add([
		sprite("talltower"),
		area(),
		"talltower",
		"temp",
		scale(WIDTH*0.22/424, HEIGHT*0.18/204),
		pos(WIDTH*0.721, HEIGHT*0.15)
	])

	add([
		sprite("dock"),
		scale(WIDTH*0.22/424, HEIGHT*0.18/204),
		pos(WIDTH*0, HEIGHT*0.9),
		area(),
		"dock",
		"temp"
	])

	add([
		sprite("summary"),
		pos(0.95*WIDTH, HEIGHT*0.02),
		scale(WIDTH*(0.1/424), HEIGHT*(0.1/204)),
		"summary",
		"temp",
		area()
	])

	const player = add([
		sprite("player"),
		pos(WIDTH * 0.3, HEIGHT * (40 / 204)),
		scale(0.1 * (WIDTH / 424), 0.1 * (HEIGHT / 204)),
		//0.1, 0.1
		area(),
		body(),
		"player",
		"temp"
	])

	onCollide("player", "bridge", () => {
		shake(50),
		add([
				text("You uncovered a new world as you left...", { size: 0.02*WIDTH, font: "pixelatedBold" }),
				color(0, 0, 0),
				pos(WIDTH * (0.2), HEIGHT * (0.09)),
				"TEMP",
		])
		wait(3, () => {
			destroyAll("TEMP")
		})
	})

	onClick("summary", () => {
		var rect3 = add([
			rect(WIDTH, HEIGHT),
			opacity(0.5),
			color(255, 255, 255),
			"temp1"
		])
		var rect2 = add([
			rect(WIDTH*0.5, HEIGHT*0.5),
			opacity(0.45),
			color(0,0,0),
			pos(WIDTH*0.25, HEIGHT*0.25),
			"temp1"
		])
		const text1 = add([
			text("This scene refers to both The Hate You Give and Still I Rise by Thomas Angie and Maya Angelou respectively. They both describe racism and the way stereotypes play into their own lives.\nTHUG: The protagonist, Starr, must deal with witnessing the death of her best friend Khalil shot by a police officer and find her voice to speak on the issue\nStill I Rise: Thomas Angie describes how each stereotype plays onto her life and how she and those affected must “rise” from it all", { size: 0.03 * 0.5 *WIDTH, font: "PixelatedReg", width: WIDTH*0.5 }),
			pos(WIDTH * 0.25, HEIGHT * 0.25),
			color(255, 255, 255),
			"temp1"

		])

		var text2 = add([
			text("Hit space to find next clue!", { size: 0.02*WIDTH, font: "pixelatedBold"}),
			pos(WIDTH*0.31, HEIGHT*0.7),
			color(0, 255, 0),
			"temp1"
		])

		onKeyPress("space", () => {
				destroyAll("temp1")
		})
	})
	var one = false;
	var two = false;
	var three = false;

	onClick("smoke", () => {
		var rect3 = add([
			rect(WIDTH, HEIGHT),
			opacity(0.5),
			color(255, 255, 255),
			"temp1"
		])
		var rect2 = add([
			rect(WIDTH*0.5, HEIGHT*0.5),
			opacity(0.45),
			color(0,0,0),
			pos(WIDTH*0.25, HEIGHT*0.25),
			"temp1"
		])
		const text1 = add([
			text("You found the smoke!\n\nThe smoke can often be thought of as stereotypes. Both in THUG and Still I Rise, stereotypes are a prominent issue. For example, in THUG, they stop Starr from speaking out. Angelou also brings awareness to them, contrasting the stereotypes with how she feels about herself.\n\nLook for what the smoke is hiding...", { size: 0.03 * 0.5 *WIDTH, font: "PixelatedReg", width: WIDTH*0.5 }),
			pos(WIDTH * 0.25, HEIGHT * 0.25),
			color(255, 255, 255),
			"temp1"

		])

		var text2 = add([
			text("Hit space to find next clue!", { size: 0.02*WIDTH, font: "pixelatedBold"}),
			pos(WIDTH*0.31, HEIGHT*0.7),
			color(0, 255, 0),
			"temp1"
		])

		onKeyPress("space", () => {
				destroyAll("temp1");
			one = true;
		})
	})

	
	onClick("talltower", () => {
		if (one) {
			var rect3 = add([
				rect(WIDTH, HEIGHT),
				opacity(0.5),
				color(255, 255, 255),
				"temp1"
			])
			var rect2 = add([
				rect(WIDTH*0.5, HEIGHT*0.5),
				opacity(0.45),
				color(0,0,0),
				pos(WIDTH*0.25, HEIGHT*0.25),
				"temp1"
			])
			const text1 = add([
				text("You found a tower!\n\nThere is a lot of emphasis on rising up from all the stereotypes. With all the smoke around, the tower is still standing strong, demonstrating the strength that inspires people to be who they are aside from the stereotypes. Additionally, in THUG, it is also an emphasis to speak out and not be hidden by the media’s portrayal.\n\nLook for what connects the tower...", { size: 0.03 * 0.5 *WIDTH, font: "PixelatedReg", width: WIDTH*0.5 }),
				pos(WIDTH * 0.25, HEIGHT * 0.25),
				color(255, 255, 255),
				"temp1"

			])

			var text2 = add([
				text("Hit space to find next clue!", { size: 0.02*WIDTH, font: "pixelatedBold"}),
				pos(WIDTH*0.31, HEIGHT*0.7),
				color(0, 255, 0),
				"temp1"
			])

			onKeyPress("space", () => {
					destroyAll("temp1")
				two = true;
			})
		}
		else {
			var text1 = add([
				text("Hmmmmm....", { size: 0.03 * 0.5 *WIDTH, font: "pixelatedBold" }),
				pos(WIDTH * 0.6, HEIGHT * 0.25),
				color(255, 255, 255)
			])
			wait(1, () => {
				destroy(text1)
			})
		}
	})

	onClick("bridge", () => {
		if (one && two) {
			var rect3 = add([
				rect(WIDTH, HEIGHT),
				opacity(0.5),
				color(255, 255, 255),
				"temp1"
			])
			var rect2 = add([
				rect(WIDTH*0.5, HEIGHT*0.5),
				opacity(0.45),
				color(0,0,0),
				pos(WIDTH*0.25, HEIGHT*0.25),
				"temp1"
			])
			const text1 = add([
				text("You found a bridge!\n\nThe bridge emphasizes the differences between them and the rest of the world. It is also important to note that there is only one bridge. Often times, racism can make both sides feel as if the other is not part of them, when collectively, underneath all the smoke and mirrors, we are all humans\n\nLook for an exit...", { size: 0.03 * 0.5 *WIDTH, font: "PixelatedReg", width: WIDTH*0.5 }),
				pos(WIDTH * 0.25, HEIGHT * 0.25),
				color(255, 255, 255),
				"temp1"

			])

			var text2 = add([
				text("Hit space to find next clue!", { size: 0.02*WIDTH, font: "pixelatedBold"}),
				pos(WIDTH*0.31, HEIGHT*0.7),
				color(0, 255, 0),
				"temp1"
			])

			onKeyPress("space", () => {
					destroyAll("temp1")
				three = true;
			})
		}
		else {
			var text1 = add([
					text("Hmmmmm....", { size: 0.03 * 0.5 *WIDTH, font: "pixelatedBold" }),
					pos(WIDTH * 0.3, HEIGHT * 0.65),
					color(255, 255, 255)
				])
				wait(1, () => {
					destroy(text1)
				})
		}
	})
	onClick("dock", () => {
		if (one && two && three) {
			add([
				sprite("confetti",{ width: WIDTH, height: HEIGHT }),
				opacity(0.3),
				"temp"
			])
			var text1 = add([
				text("You escaped!", { size: 0.05 * 0.5 *WIDTH, font: "pixelatedBold" }),
				pos(WIDTH * 0.41, HEIGHT * 0.5),
				color(0, 0, 0)
			])
			wait(1.5, () => {
				destroy(text1)
				destroyAll("temp")
				go("antigone")
			})
		}
		else {
			var text1 = add([
				text("This exit is blocked for now...", { size: 0.03 * 0.5 *WIDTH, font: "pixelatedBold"}),
				pos(WIDTH * 0.0, HEIGHT * 0.75),
				color(255, 255, 255)
			])
			wait(1, () => {
				destroy(text1)
			})
		}
	})
	
})

scene("antigone", () => {
	add([
		sprite("bg7", { width: WIDTH, height: HEIGHT }),
		"temp"
	])

	add([
		"temp",
		"building",
		sprite("building"),
		scale(WIDTH*0.42/424, HEIGHT*0.45/204),
		area(),
		body({isStatic: true}),
		pos(WIDTH*0.61, HEIGHT*0.435)
	])

	add([
		"news",
		"temp",
		sprite("news"),
		scale(WIDTH*0.41/424, HEIGHT*0.41/204),
		area(),
		pos(WIDTH*0.32, HEIGHT*0.649)
	])

	add([
		"peopletalking",
		"temp",
		sprite("peopletalking"),
		scale(WIDTH*0.41/424, HEIGHT*0.41/204),
		area(),
		pos(WIDTH*0.47, HEIGHT*0.625)
	])

	add([
		sprite("summary"),
		pos(0.95*WIDTH, HEIGHT*0.02),
		scale(WIDTH*(0.1/424), HEIGHT*(0.1/204)),
		"summary",
		"temp",
		area()
	])

	const player = add([
		sprite(CHARACTER),
		pos(WIDTH * 0.65, HEIGHT * 0),
		scale(0.1 * (WIDTH / 424), 0.1 * (HEIGHT / 204)),
		//0.1, 0.1
		area(),
		body(),
		"player",
		"temp"
	])

	onCollide("player", "building", () => {
		shake(50),
		add([
				text("Finally home, but you just have to find it...", { size: 0.02*WIDTH, font: "pixelatedBold" }),
				color(0, 0, 0),
				pos(WIDTH * (0.2), HEIGHT * (0.09)),
				"TEMP",
		])
		wait(3, () => {
			destroyAll("TEMP")
		})
	})

	onClick("summary", () => {
		var rect3 = add([
			rect(WIDTH, HEIGHT),
			opacity(0.5),
			color(255, 255, 255),
			"temp1"
		])
		var rect2 = add([
			rect(WIDTH*0.5, HEIGHT*0.5),
			opacity(0.45),
			color(0,0,0),
			pos(WIDTH*0.25, HEIGHT*0.25),
			"temp1"
		])
		const text1 = add([
			text("“House Seats: Antigone in Ferguson”, directed by Bryan Doerries, is an episode about an interpretation of Sophocles' Greek play, Antigone. It demonstrates a community coming together to discuss the relevance of a twenty-five thousand-year-old play in the present day through forms of social justice and trauma.", { size: 0.03 * 0.5 *WIDTH, font: "PixelatedReg", width: WIDTH*0.5 }),
			pos(WIDTH * 0.25, HEIGHT * 0.25),
			color(255, 255, 255),
			"temp1"

		])

		var text2 = add([
			text("Hit space to find next clue!", { size: 0.02*WIDTH, font: "pixelatedBold"}),
			pos(WIDTH*0.31, HEIGHT*0.7),
			color(0, 255, 0),
			"temp1"
		])

		onKeyPress("space", () => {
				destroyAll("temp1")
		})
	})
	var one = false;
	var two = false;
	var three = false;

	onClick("news", () => {
		one = true;
		var rect3 = add([
			rect(WIDTH, HEIGHT),
			opacity(0.5),
			color(255, 255, 255),
			"temp1"
		])
		var rect2 = add([
			rect(WIDTH*0.5, HEIGHT*0.5),
			opacity(0.45),
			color(0,0,0),
			pos(WIDTH*0.25, HEIGHT*0.25),
			"temp1"
		])
		const text1 = add([
			text("You found an article about the play!\n\nEven in daily life, people can interpret the play in their own way. Antigone in Ferguson emphasizes the importance of using a variety of stories as interpretations of your own life experiences\n\nLook for people conversing!", { size: 0.03 * 0.5 *WIDTH, font: "PixelatedReg", width: WIDTH*0.5 }),
			pos(WIDTH * 0.25, HEIGHT * 0.25),
			color(255, 255, 255),
			"temp1"

		])

		var text2 = add([
			text("Hit space to find next clue!", { size: 0.02*WIDTH, font: "pixelatedBold"}),
			pos(WIDTH*0.31, HEIGHT*0.7),
			color(0, 255, 0),
			"temp1"
		])

		onKeyPress("space", () => {
				destroyAll("temp1")
		})
	})

	onClick("peopletalking", () => {
		if (one) {
			var rect3 = add([
				rect(WIDTH, HEIGHT),
				opacity(0.5),
				color(255, 255, 255),
				"temp1"
			])
			var rect2 = add([
				rect(WIDTH*0.5, HEIGHT*0.5),
				opacity(0.45),
				color(0,0,0),
				pos(WIDTH*0.25, HEIGHT*0.25),
				"temp1"
			])
			const text1 = add([
				text("These people are talking about the social injustices in society.\n\nIt is important to make sure these voices are heard because often they are covered in society by more prominent voices. Plays such as Antigone in Ferguson can help bring more voices to light, especially those that challenge society's expectations\n\nLook for a place to come together...", { size: 0.03 * 0.5 *WIDTH, font: "PixelatedReg", width: WIDTH*0.5 }),
				pos(WIDTH * 0.25, HEIGHT * 0.25),
				color(255, 255, 255),
				"temp1"

			])

			var text2 = add([
				text("Hit space to find next clue!", { size: 0.02*WIDTH, font: "pixelatedBold"}),
				pos(WIDTH*0.31, HEIGHT*0.7),
				color(0, 255, 0),
				"temp1"
			])

			onKeyPress("space", () => {
					destroyAll("temp1")
			})
			two = true;
		}
		else {
			var text1 = add([
				text("Hmmmmm....", { size: 0.03 * 0.5 *WIDTH, font: "pixelatedBold" }),
				pos(WIDTH * 0.48, HEIGHT * 0.6),
				color(255, 255, 255)
			])
			wait(1, () => {
				destroy(text1)
			})
		}
	})

	onClick("building", () => {
		if (one && two) {
			var rect3 = add([
				rect(WIDTH, HEIGHT),
				opacity(0.5),
				color(255, 255, 255),
				"temp1"
			])
			var rect2 = add([
				rect(WIDTH*0.5, HEIGHT*0.5),
				opacity(0.45),
				color(0,0,0),
				pos(WIDTH*0.25, HEIGHT*0.25),
				"temp1"
			])
			const text1 = add([
				text("You found Antigone’s Rebellion Cafe!\n\nAntigone is widely important to not only let voices be heard but also to bring people together. When Antigone’s plays are performed, it bring a unique group of people together who can discuss their own identities, bringing new and often hidden perspectives to light. Feel more comfortable.", { size: 0.03 * 0.5 *WIDTH, font: "PixelatedReg", width: WIDTH*0.5 }),
				pos(WIDTH * 0.25, HEIGHT * 0.25),
				color(255, 255, 255),
				"temp1"

			])

			var text2 = add([
				text("Hit space to find next clue!", { size: 0.02*WIDTH, font: "pixelatedBold"}),
				pos(WIDTH*0.31, HEIGHT*0.7),
				color(0, 255, 0),
				"temp1"
			])

			onKeyPress("space", () => {
					
					add([
							sprite("confetti",{ width: WIDTH, height: HEIGHT }),
							opacity(0.3),
							"temp1"
					])
					var text1 = add([
						text("You escaped!", { size: 0.05 * 0.5 *WIDTH, font: "pixelatedBold" }),
						pos(WIDTH * 0.41, HEIGHT * 0.5),
						color(0, 0, 0)
					])
				wait(1.5, () => {
					destroyAll("temp1")
					go("end")
				})
					
			})
		}
		else {
			var text1 = add([
				text("The door is locked...", { size: 0.03 * 0.5 *WIDTH, font: "pixelatedBold" }),
				pos(WIDTH * 0.6, HEIGHT * 0.6),
				color(255, 255, 255)
			])
			wait(1, () => {
				destroy(text1)
			})
		}
	})
})
scene("end", () => {
	add([
			sprite("bg1", { width: WIDTH, height: HEIGHT }),
			"temp",
		]);


		add([
			sprite("mcgrass"),
			//scale(3.5),

			scale(1.25 * (WIDTH / 424), 1.25 * (HEIGHT / 204)),
			pos(0, (HEIGHT - (HEIGHT * (60 / 204)))),
			area(),
			body({ isStatic: true }),
			"temp",
		])
		add([
			sprite("mcgrass"),
			scale(1.25 * (WIDTH / 424), 1.25 * (HEIGHT / 204)),
			pos(WIDTH * (200 / 424), (HEIGHT - (HEIGHT * (60 / 204)))),
			area(),
			body({ isStatic: true }),
			"temp",
		])

		setGravity(1600)

		const player = add([
			// list of components
			sprite("player"),
			pos(WIDTH * (50 / 424), HEIGHT * (40 / 204)),
			scale(WIDTH*0.25/424, HEIGHT*0.5/424),
			rotate(-45),
			area(),
			body(),
			"temp",
		])

	const player2 = add([
		// list of components
		sprite("player2"),
		pos(WIDTH * (345 / 424), HEIGHT * (40 / 204)),
		scale(WIDTH*0.25/424, HEIGHT*0.5/424),
		area(),
		rotate(45),
		body(),
		"temp",
	])

		var text1 = add([
			text("YOU ESCAPED!", { size: 0.05*WIDTH, font: "pixelatedBold" }),
			color(0, 0, 0),
			pos(WIDTH * (0.3), HEIGHT * (0.09)),
			"temp",
		])

		add([
			rect(WIDTH*0.5, HEIGHT*0.5),
			pos(WIDTH*0.25, HEIGHT*0.25),
			color(0,0,0),
			opacity(0.4),
			"temp2"
		])
		add([
			text("Throughout your journey, hopefully you've come to realize there's more to different worlds than you've experienced. The new perspectives from each of the rooms have hopefully given you more of an understanding. And in the ending room, you saw what a community that discusses openly can look like. \n\nSo now think about the thesis again and see how it applies: \n\nStories share new perspectives to create a sense of belonging within diverse communities by highlighting unnoticed identities that challenge society’s expectations.", {size: 0.02*WIDTH, font: "PixelatedReg", width: WIDTH*0.5}),
			color(255,255,255),
			pos(WIDTH*0.25, HEIGHT*0.25),
			"temp2"
		])
		onKeyPress("space", () => {
			destroyAll("temp2")
		})
})
