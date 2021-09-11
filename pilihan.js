const { rejects } = require("assert")
const { resolve } = require("path")
const readline = require(`readline`)

rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


tanya = (pertanyaan) =>{
    return new Promise((resolve)=>{
        rl.question(pertanyaan,(jawab)=>{
            resolve(jawab)
        })
    })
}


Pemilihan = async () =>{
    const IP = await tanya("Masukan Ip anda :")

    if( IP == 4.00){
        console.log("Platinum");
    }
    else if( IP >= 3.85 && IP <= 3.99){
        console.log("Gold");
    }
    else if( IP >= 3.75 && IP <= 3.84){
        console.log("Silver");
    }
    else if(IP >= 3.00 && IP <= 3.74){
        console.log("Bronze");
    }
    else if(IP < 3.00 && IP != 0){
        console.log("Reguler");
    }
    else if( IP == 0){
        console.log("Basic");
    }
    else{
        console.log("Kesalahan penginputan IP !!!!");
    }
    rl.close()
   
}



    
    Pemilihan()