export let x: unknown;

x = '10';
x = 10;

// unlike with the type any, with unknown the ts don't let you do this without testing the type before.
//console.log(x*10);
if(typeof x === 'number') console.log(x*10);
