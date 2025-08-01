const readline = require(`readline`);
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let letter = [
	["a", "b", "c", "d"],
	["e", "f", "g", "h"],
	["i", "j", "k", "l"],
	["m", "n", "o", "p"],
];

let num = [0, 1, 2, 3];
let act = ["l", "r", "u", "d"];

let sel_num;
let sel_act;

function rotate(sel_num, sel_act) {
	if (sel_act == "l") {
		let temp = letter[sel_num].shift();
		letter[sel_num].push(temp);
	} else if (sel_act == "r") {
		let temp = letter[sel_num].pop();
		letter[sel_num].unshift(temp);
	} else if(sel_act == "u") {
		let temp = letter[0][sel_num];
		letter[0][sel_num] = letter[1][sel_num];
		letter[1][sel_num] = letter[2][sel_num];
		letter[2][sel_num] = letter[3][sel_num];
		letter[3][sel_num] = temp;
	} else if(sel_act == "d") {
		let temp = letter[3][sel_num];
		letter[3][sel_num] = letter[2][sel_num];
		letter[2][sel_num] = letter[1][sel_num];
		letter[1][sel_num] = letter[0][sel_num];
		letter[0][sel_num] = temp;
	}

	for(let i = 0;i < letter.length;i++) {
		console.log(letter[i].join(""));
	}
}

rl.on("line", (input) => {
	if (input == -1) {
		rl.close();
	} else if (num.includes(parseInt(input))) {
		sel_num = parseInt(input);
	} else if (act.includes(input)) {
		sel_act = input;

		// console.log(sel_num,sel_act)
		rotate(sel_num,sel_act);
	}
});
