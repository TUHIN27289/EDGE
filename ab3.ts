class A{
    private a1:string;
    constructor(a1:string)
    {
        this.a1=a1;
    }
    get()
    {
        return this.a1;
    }


}
const ab=new A("a_")
console.log(ab.get());