import { createContext } from "react";

interface data  {
    name : string;
    boo(): void;
    num:() => string;
}

class datause implements data{
    //입력값 받기
    constructor(public name:string){

    }
    boo(){
        console.log("콘솔에 나타남")
    }
    num(){
        return "화면에 나타남"    
    }
}

export const dataused = new datause("kim")

export const Context = createContext<data | null>(null);