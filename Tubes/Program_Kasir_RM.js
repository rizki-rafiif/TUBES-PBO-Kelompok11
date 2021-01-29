// Tugas Besar mata kuliah pbo
// program kasir rumah makan
// panggil library prompt-sync
const prompt = require('prompt-sync')()
// membuat function untuk object pattern
function Makanan (jmlAyam = null, jmlIkan = null, jmlDaging = null,
                jmlSayur = null, jmlNasi = null, jmlGorengan = null){
    var ayam = jmlAyam
    var ikan = jmlIkan
    var daging = jmlDaging
    var sayur = jmlSayur
    var nasi = jmlNasi
    var gorengan = jmlGorengan

    // function untuk mendapat jumlah per item
    this.getAyam = function(){
        return ayam * 4000
    }
    this.getIkan = function(){
        return ikan * 5000
    }
    this.getDaging = function(){
        return daging * 5000
    }
    this.getSayur = function(){
        return sayur * 3000
    }
    this.getNasi = function(){
        return nasi * 3000
    }
    this.getGorengan = function(){
        return gorengan * 1000
    }

    // function pengkalian
    this.getTotalMakan = function(total){
        this.total = prompt('Input total : ')
    }
}

function Minuman (jmlTeh, jmlJeruk, jmlKopi){
    var teh = jmlTeh
    var jeruk = jmlJeruk
    var kopi = jmlKopi

    // function untuk mendapat jumlah per item
    this.getTeh = function(){
        return teh * 3000
    }
    this.getJeruk = function(){
        return jeruk * 5000
    }
    this.getKopi = function(){
        return kopi * 4000
    }
    
    // bayar
    getTotalMinum = function (){}
}

// inheritance method dari Minuman dan Makanan
// object notaMakan dari Makanan
var notaMakanan = Object.create(Makanan)
// kemudian override method total makan
notaMakanan.getTotalMakan = function(){
    var total = (arrMakan[0].getAyam() + arrMakan[0].getIkan() + arrMakan[0].getDaging() + 
        arrMakan[0].getNasi() + arrMakan[0].getSayur() + arrMakan[0].getGorengan() )
    return total
}
// kenapa array 0? karena versi ini hanya sekali pakai
// object notaMinuman dari Minuman
var notaMinuman = Object.create(Minuman)
// override method total minum
notaMinuman.getTotalMinum = function(){
    var total = (arrMinum[0].getTeh() + arrMinum[0].getKopi() + arrMinum[0].getJeruk())
    return total
}

// deklarasi variabel array, objek dan index
var makanan = {}
var minuman = {}
var arrMakan = []
var arrMinum = []

// menu
var menu = false
do{
    console.log('1. Catat Pesanan')
    console.log('2. Bayar')
    console.log('3. Cetak Nota')
    console.log('4. Hapus Nota')
    console.log('5. Keluar')

    var pilihan = prompt('Input angka pilihan : ')
    switch(pilihan){
        case '1':
            console.log('\n<=== Catat Pesanan ===>')
            // makanan
            console.log('>> Makanan')
            var ayam = prompt('Jumlah ayam (4k)\t: ')
            var ikan = prompt('Jumlah ikan (5k)\t: ')
            var daging = prompt('Jumlah daging (5k)\t: ')
            var sayur = prompt('Jumlah sayur (3k)\t: ')
            var nasi = prompt('Jumlah nasi (3k)\t: ')
            var gorengan = prompt('Jumlah gorengan (1k)\t: ')

            // push ke array makanan
            makanan = new Makanan(ayam, ikan, daging, nasi, sayur, gorengan)
            arrMakan.push(makanan)
            // tampilkan sekilas total makanan
            console.log(`Total makanan : ${notaMakanan.getTotalMakan()}`)

            // minuman
            console.log('>> \nMinuman')
            var teh = prompt('Jumlah teh (3k)\t\t: ')
            var jeruk = prompt('Jumlah jeruk (5k)\t: ')
            var kopi = prompt('Jumlah kopi (4k)\t: ')

            // push ke array minuman
            minuman = new Minuman(teh, jeruk, kopi)
            arrMinum.push(minuman)
            // tampilkan sekilas total minuman
            console.log(`Total minuman : ${notaMinuman.getTotalMinum()}`)

            // operasikan total pembayaran
            // diletakkan disini agar langsung terbaca di menu cetak nota
            var totalBayar = (notaMakanan.getTotalMakan() + notaMinuman.getTotalMinum())

            console.log()
            break
       case '2':
            console.log('\n<=== Pembayaran ===>')
            // total pembayaran
            console.log('Total pembayaran : ' +totalBayar);
            // user input uang
            var uang = null
            uang = prompt('Input uang pembeli : ')
            // menghitung kembalian
            var kembalian  = (uang * 1) - (totalBayar)
            // ini untuk menangkal bila uangnya kurang
            if (kembalian > 0){
                console.log('Kembalian : ' + kembalian)
            } else {
                console.log('Uang kurang : ' + (kembalian * -1))
            }
            console.log()
            break
        case '3':
            console.log('\n<=== Nota Pesanan ===>')
            if (arrMakan[0] == null && arrMinum[0] == null) {
                console.log('\n[NOTA KOSONG]')
            } else{
                console.log('<= Makanan =>')
                console.log(`Ayam (4k)\t\t: ${arrMakan[0].getAyam()}`)
                console.log(`Ikan (5k)\t\t: ${arrMakan[0].getIkan()}`)
                console.log(`Daging (5k)\t\t: ${arrMakan[0].getDaging()}`)
                console.log(`Sayur (3k)\t\t: ${arrMakan[0].getSayur()}`)
                console.log(`Nasi (3k)\t\t: ${arrMakan[0].getNasi()}`)
                console.log(`Gorengan (1k)\t\t: ${arrMakan[0].getGorengan()}`)
                console.log('<= Minuman =>')
                console.log(`Teh (3k)\t\t: ${arrMinum[0].getTeh()}`)
                console.log(`Jeruk (5k)\t\t: ${arrMinum[0].getJeruk()}`)
                console.log(`Kopi (4k)\t\t: ${arrMinum[0].getKopi()}`)
                console.log('---------------------------------')
                console.log('Total Pembayaran\t: ' +totalBayar)
                console.log('Uang Pembayaran\t\t: ' +uang)
                if (kembalian > 0){
                    console.log('Kembalian\t\t: ' + kembalian)
                } else {
                    console.log('Uang kurang\t\t: ' + (kembalian * -1))
                }
            }
            
            console.log()
            break 
        case '4':
            console.log('\n<=== Hapus nota pesanan ===>')
            // bila ingin menggunakan program ini langsung
            // tanpa keluar terlebih dulu bisa dengan cara
            // menghapus datanya
            var hapusNota = prompt('Yakin ingin menghapus data ? [yes/no] : ')
            if (hapusNota == 'yes' || hapusNota == 'Yes' || hapusNota == 'YES') {
                // menghapus data array makan dan minum
                arrMakan.pop()
                arrMinum.pop()
                // menjadikan nilai variabel pembayaran null
                totalBayar = null
                uang = null
                kembalian = null

                console.log('\n[Nota berhasil dihapus]')
            } else if(hapusNota == 'no' || hapusNota == 'No' || hapusNota == 'NO'){
                console.log('\n[Gagal menghapus nota]')
            } else {
                console.log('\n[Input anda salah, nota tidak terhapus]')
            }
            console.log()
            break
        case '5':
            console.log('\nTerimakasih sudah menggunakan applikasi ini')
            menu = true
            break
        default:
            // jika input selain angka yang tersedia
            console.log('\n[INPUT ANGKA SAJA [1 sampai 5]]\n')
            break
    }
} while(!menu) // untuk keluar dari loop