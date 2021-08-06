var mysql = require('mysql');
var tgl = require(`moment`)

const time = ("Tanggal Hari Ini: " + tgl().format('D MMMM YYYY, h:mm:ss a'));

const readline = require('readline');
const { Db, ConnectionReadyEvent } = require('mongodb');
rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: "db_kost"
});

console.log("Pilihihan : ");
console.log("1. Semua data pembayaran dalam database  ");
console.log("2. Data yang memiliki harga kamar mahal ");
console.log("3. Data yang memiliki harga kamar murah ");
console.log("4. Mencari Data berdasarkan NIK  ");
console.log("5. Menghapus Data  ");
console.log("6. Mengisi Data  ");

rl.question("Maukan Pilihan Anda (1-3) : ", (jawab) => {

    if (jawab == 1) {

        con.connect(function (err) {
            if (err) throw err;
            con.query("SELECT *FROM bayaran  ORDER BY nama asc", function (err, result, fields) {

                if (err) throw err;
                console.table(result);
                console.log(time);
            });

        });

    }
    else if (jawab == 2) {
        con.connect(function (err) {
            if (err) throw err;
            con.query("SELECT bayaran.nama,harga_kamar from bayaran,kamar where kamar.kode_kamar = bayaran.kode_kamar && harga_kamar > 650000;", function (err, result, fields) {

                if (err) throw err;
                console.table(result);
                console.log(time);
            });

            rl.close();
        });

    }
    else if (jawab == 3) {
        con.connect(function (err) {
            if (err) throw err;
            con.query("SELECT bayaran.nama,harga_kamar from bayaran,kamar where kamar.kode_kamar = bayaran.kode_kamar && harga_kamar < 650000;", function (err, result, fields) {

                if (err) throw err;
                console.table(result);
                console.log(time);
            });

            rl.close();
        });

    }
    else if (jawab == 4) {
        rl.question("masukan nik yang ingin anda cari : ", (nik) => {


            let values = nik;

            con.connect(function (err) {
                if (err) throw err;
                con.query("SELECT *FROM bayaran WHERE no_ktp = ?", [values], function (err, result, fields) {

                    if (err) throw err;
                    console.table(result);
                    console.log(time);
                });

                rl.close();
            });

        })
    }
    else if (jawab == 5) {
        rl.question("Masukan Nik yang ingin anda Hapus : ", (nik) => {


            let values = nik;

            con.connect(function (err) {
                if (err) throw err;
                con.query("DELETE FROM bayaran WHERE no_ktp = ?", [values], function (err, result, fields) {

                    if (err) throw err;
                    // console.table(fields);


                });
                con.query("DELETE FROM orang_kost WHERE no_ktp = ?", [values], function (err, result, fields) {

                    if (err) throw err;
                    console.log("Data dengan NIK ", nik, " Berhasil di Hapus");
                    // console.table(fields);



                });
                con.query("SELECT * FROM bayaran ORDER BY nama asc", function (err, result, fields) {

                    if (err) throw err;
                    console.table(result);

                    console.log(time);
                });


                con.end();
            });

        })
    }
    else if (jawab == 6) {

        rl.question("masukan Kode Bayar Anda       : ", (kode_bayar) => {
            rl.question("masukan Nomor KTP Anda        : ", (no_ktp) => {
                rl.question("masukan Nama Anda             : ", (nama) => {
                    rl.question("masukan Kode Kamar Anda       : ", (kode_kamar) => {
                        rl.question("masukan Tanggal Masuk (Y-M-D) : ", (tgl_masuk) => {

                            let quer = `INSERT INTO bayaran VALUES (?, ?, ?, ?, ?)`;
                            let orang = `INSERT INTO orang_kost VALUES (?, ?)`;
                            var data2 = [no_ktp, nama]
                            var data = [kode_bayar, no_ktp, nama, kode_kamar, tgl_masuk]

                            con.connect(function (err) {
                                if (err) throw err;
                                con.query(orang, data2, function (err, result, fields) {

                                    if (err) throw err;
                                    // console.table(result)
                                    console.log("Pengisian data berhasil ...");
                                });
                                con.query(quer, data, function (err, result, fields) {

                                    if (err) throw err;
                                    // console.table(result)
                                    // console.log("Pengisian data berhasil ..."); 

                                });
                                con.query("SELECT * FROM bayaran ORDER BY nama asc", function (err, result, fields) {

                                    if (err) throw err;
                                    console.table(result);

                                    console.log(time);
                                });

                                con.end();

                            });
                        })

                    })
                })
            })
        })


    }

})
