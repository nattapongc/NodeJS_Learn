const vw = Math.max(
	document.documentElement.clientWidth || 0,
	window.innerWidth || 0
);
const vh = Math.max(
	document.documentElement.clientHeight || 0,
	window.innerHeight || 0
);

let main = document.getElementById("main_frame");

main.style.width = vw + "px";
main.style.height = vh + "px";
main.style.backgroundColor = "#dddddd";
main.style.margin = "0px";
main.style.padding = "0px";

document.body.style.margin = "0px";
document.body.style.margin = "0px";


let divs = [];

class SpaceShip {
	constructor() {
		this.div = document.createElement("div");
		this.size = (Math.random() * 120);
		this.R = (Math.random()*255);
		this.G = (Math.random()*255);
		this.B = (Math.random()*255);
		this.x =  Math.abs((parseInt(Math.random() * vw) - (this.size+4)));
		this.y =  Math.abs((parseInt(Math.random() * vh) - (this.size+4)));
		this.velo_x = (Math.random()*10 - 5);
		this.velo_y = (Math.random()*10 - 5);
 		
		this.a_x = (0);
		this.a_y = (1);

		this.div = document.createElement("div");
		this.div.style.backgroundColor = `rgb(${this.R},${this.G},${this.B})`;
		this.div.style.height = this.size + "px";
		this.div.style.width = this.size + "px";
		this.div.style.position = "absolute";
		this.div.style.borderRadius = (this.size/2 + 3) + "px";
		this.div.style.border = "solid black 3px";
		this.div.style.top = this.y + "px";
		this.div.style.left = this.x + "px";

		main.appendChild(this.div);
	}

	move() {

		this.velo_x = this.velo_x + this.a_x;
		this.velo_y = this.velo_y + this.a_y;

		this.x = this.x + this.velo_x;
		this.y = this.y + this.velo_y;
		if(this.x < 0) {
			this.x = 0;
			this.velo_x *= -1;
		}

		if(this.y < 0) {
			this.y = 0;
			this.velo_y *= -1;
		}

		if(this.x + this.size > vw) {
			this.x = vw - this.size - 3;
			this.velo_x *= -1;
		}

		if(this.y + this.size > vh) {
			this.y = vh - this.size - 3;
			this.velo_y *= -1;
		}

		this.update();
	}

	update() {
		this.div.style.top = this.y + "px";
		this.div.style.left = this.x + "px";
	}

}


for (let i = 0; i < 20; i++) {
	let spaceShip = new SpaceShip();
    divs.push(spaceShip);
}

setInterval(function() {
	for(let i = 0;i < divs.length;i++) {
		divs[i].move()
	}
},40);
