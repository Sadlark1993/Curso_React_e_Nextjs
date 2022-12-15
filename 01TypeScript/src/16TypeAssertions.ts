/* eslint-disable */
//To assert to ts the type of the data

/* *****************Recommended***************** */
export const body1 = document.querySelector('body'); //it can be HTMLBodyElement or null
if(body1) body1.style.backgroundColor = '#111';

//type assertion
const body2 = document.querySelector('body') as HTMLBodyElement; //asserting it is HTMLBodyElement
body2.style.backgroundColor = '#111';

//type assertion
const input = document.querySelector('.password-input') as HTMLInputElement;
if(input) input.style.padding='5px';

/* ****************Not Recommended************ */
//Agressive type assertion
const body3 = document.querySelector('body') as unknown as number;
const num = body3 + 1; //madness

//Non-null Assertion
const body4 = document.querySelector('body')!; //asserting TS that its not null
body4.style.backgroundColor = '#111';
