let req = {name : "nattapol",surname : "EPT",phone : "0853507540"}

// 1
Object.keys(req).forEach((prop) => console.log(prop));
// 2
for(const [key,value] of Object.entries(req)) {
    console.log(key,value);
}
// 3
console.log(req.constructor.name);


class Person {
    constructor(nnn,sss,ppp) {
        this.name = nnn;
        this.surname = sss;
        this.phone = ppp;
    }
}

let xxx = new Person("nattapol","EPT","0848800255");
// 1
Object.keys(xxx).forEach((prop) => console.log(prop));
// 2
for(const [key,value] of Object.entries(xxx)) {
    console.log(key,value);
}
// 3
console.log(xxx.constructor.name);