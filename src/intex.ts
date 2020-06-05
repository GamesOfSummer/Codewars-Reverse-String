
let str = 'World';

export function solution(str: string){
 
return str.split('').reduce((all:string, x:string) => {return (x + all).toString()}, '');

}


solution(str);