



// Created By : Alexander Koroh



const readline = require(`readline-sync`)

const IP = parseFloat(readline.question("Masukan IP anda :"))


PinPrestasi = (IP) =>{

    if( IP == 4.00){
        console.log("Platinum");
    }else if ( IP >= 3.85 && IP <= 3.99){
        console.log("Gold");
    }else if( IP >= 3.75 && IP <= 3.84){
        console.log("Silver");
    }else if( IP >= 3.00 && IP <= 3.74){
        console.log("Bronze");
    }else if( IP < 3.00 && IP != 0){
        console.log("Reguler");
    }else if( IP == 0){
        console.log("Basic");
    }else{
        console.log("Maaf Anda salah input IP !!!");
    }
       


}

PinPrestasi(IP)
