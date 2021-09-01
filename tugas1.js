
// Coba nanti non liat kembali rumus kira2 su betul blm...

pembulatan = (x, y) => {
    const v = x.toFixed()
    if (y == 1) {
        return ` ${v} km/h`
    }
    return ` ${v} meter`

}

// !............... Ini Nomer satu .........................................
// ? kecepatan =jarak / waktu;

kecepatan = (a, b) => {
    const hasil = (a *= 1000) / (b *= 60);
    console.log(pembulatan(hasil, 1))
}

kecepatan(7, 15)

// !............ Ini nomer Dua .............................................
// ? rumus  D = 1/2 gt2

tinggiGedung = (a) => {
    const hitung = (1 / 2 * 9.8) * Math.pow(a, 2)
    console.log(pembulatan(hitung, 0));
}

tinggiGedung(10)

// !......... Ini nomer 3 ..................................................


percepatan = (kecepatanAwal, Percepat, Waktu) => {
    const PercepatanRata_Rata = (Percepat - kecepatanAwal / Waktu)
    return `Percepatan Rata Rata = ${PercepatanRata_Rata} m/s`;
}

console.log(percepatan(54, 72, 10));
