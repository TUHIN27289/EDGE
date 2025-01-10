type a= string | number
type cd ={
id:a,
name?:string
readonly age :number;
}
const b:cd={id:5, name:"cd", age:5}
const c:cd={id:5, name:"cd", age:5}
console.log(b.id);
console.log(b.name);
console.log(b.age);

