'use strict';

const ai8 = new Int8Array(10);
// const ai8 = new Int8Array(11); 
//RangeError: byte length of Uint16Array should be a multiple of 2
const au16 = new Uint16Array(ai8.buffer);

console.dir({
	ai8,
	au16
});

for (let i = 0; i < 10; i++) {
	ai8[i] = i;
}

console.dir({
	ai8,
	au16
});