

// kita membuat sebuah fungsi yang bernama hitungKecepatan yangf memilki parameter j dan w;
function hitungKecepatan(j, w) {
    
    // var kecepatan berisi nilai awal dari parametre j;
    var kecepatan = j;
    
    // cost c menampung hasil dari 15 / 60;
    var c = (15 / 60);
    
    // kemudian haisl dari j bagi dengan c di tampung dalam variabel hasil;
    var hasil = j / c

    //Menampilkan variabel hasil ke layar
    console.log(`hasil =` + hasil + ' km/jam');
}

// memanggil fungsi di atas.....
console.log(hitungKecepatan(7, 15));




// 2.Nomer dua belum...




// 3.Percepatan rata - rata =

// kita membuat sebuah fungsi dengan nama perceoatanRataRata dengan memiliki pareameter x,y,t;
function percepatanRataRata(x, y, t) {
    
    // var a menampung hasil sari parameter y - x;
    var a = y - x;
    
    //var haisl menampung a /t;
    var haisl = a / t;
    
    //Menampilkan hasil dari proses di atas yang di tampung oleh parameter haisl
    console.log(`hasil =` + haisl + " m/s");

}

// Mmanggil fungsi di atas
console.log(percepatanRataRata(54, 72, 10));



