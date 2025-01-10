interface Area{
    height:number,
    width:number
}

interface colorcode extends Area
{

    color:string
}

const colorcode :colorcode={
    height:10,
    width:20,
    color:"red"
}
console.log(colorcode);
