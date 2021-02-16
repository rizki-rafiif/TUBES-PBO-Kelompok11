# Implementasi OOP Pada Program Kasir Rumah Makan (Javascript)
[![fnJQWX.md.png](https://iili.io/fnJQWX.md.png)](https://freeimage.host/i/fnJQWX)


# Group Members
| Nama | NIM | Kelas |
| -- | -- | -- |
| Rizki Rafiif Amaanullah | 19104010 | SE03A |
| Muhammad Fajar Ahadi | 19104007 | SE03A |
| Sofiyudin Pamungkas | 19104001 | SE03A |



# Background
Pemanfaatan perangkat komputer dalam membatu proses transaksi sebagai mesin kasir mempermudah proses jual beli yang awalnya menggunakan cara manual dengan menulis daftar barang yang di beli pada sebuah nota pembelian kemudian di hitung menggunakan kalkulator. 

Teknologi berperan penting dalam manajemen suatu usaha dagang, program kasir pada sebuah komputer saat ini merupakan hal yang sangat diperlukan pada sebuah rumah makan. Hal tersebut karena, dengan adanya sistem tersebut pekerjaan akan sangat dimudahkan, dimana pengguna hanya perlu menginputkan pesanan dan sistem akan menghitung totalnya.

Program ini dibuat dengan menggunakan bahasa pemrograman Javascript dengan menerapkan Pemrograman Berorientasi Objek / PBO / OOP. Tema yang digunakan yaitu kasir rumah makan, dimana program dapat digunakan untuk menghitung pesanan pembeli, memperlihatkan struk pesanan dan menggunakan program lagi tanpa harus keluar.



# Purpose
Tujuan pembuatan applikasi ini ialah untuk memudahkan pengguna dalam mencatat dan menghitung total pesanan dan pembayaran pelanggan mereka.



# Features
Pada applikasi kasir milik kami, terdapat fitur berupa : 

a.	Menginputkan jumlah pesanan dan kemudian menghitungnya (Total).

b.	Bisa memperlihatkan hasil pesanan yang telah dicatat.

c.	Dapat menghapus daftar pesanan yang dicatat sehingga tidak perlu keluar dari appikasi bila ingin mennggunakannya kembali.

d.	Hasil pembayaran bisa minus bila pembayaran yang diinputkan kurand dari total pesanan.




# Class Diagram
[![fnVm4S.md.png](https://iili.io/fnVm4S.md.png)](https://freeimage.host/i/fnVm4S)


# Tutorial
1. Jalankan program. Program dapat dijalankan selama node.js sudah terinstall pada perangkat komputer tersebut (Pada beberapa kejadian mungkin perlu megninstall library promt-sync terlebih dulu dengan cara mengetikkan syntax :
	**npm i prompt-sync**
	pada terminal, untuk penjelasan lebih lanjut : [prompt-sync - npm (npmjs.com)](https://www.npmjs.com/package/prompt-sync)).
2. Selanjutnya ialah kita bisa langsung mencatat pesanan yang diberikan secara urut dengan memilih angka 1 (catat pesanan) pada menu utama**, dimana user hanya perlu menginputkan jumlah dari tiap menu saja (Misal menu ayam pesan dengan jumlah 5, maka hanya perlu mengetikkan angka 5 saja).
3. Kemudian user juga bisa langsung mengecek nota tanpa membayar terlebih dahulu, caranya dengan ketikkan angka 3 (cetak nota) pada menu utama.
4. Jika sudah ingin bayar maka tinggal mengetikkan angka 2 (Bayar) saja pada menu utama. Kemudian tinggal inputkan saja uangnya, maka sistem akan menghitung berapa kembaliannya. Pada bagian Bayar juga kami adakan hasil - (minus) bila uang yang dibayarkan kurang, untuk mengantisipasi jika uang yang diinputkan kurang.
5. Setelah selesai menggunakan pada satu pesanan, user bisa menghapus nota yang ada dengan cara mengetikkan angka 4 (Hapus Nota) pada menu utama, kemudian akan muncul konfirmasi yes atau no, dimana jika user tidak berniat menghapus nota maka bisa kembali ke menu utama dengan mengetikkan no. 
	
	Namun jika user berniat menghapus maka hanya perlu mengetikkan yes. Kami juga memberikan fitur jika user memberikan input selain yes atau no maka nota tidak akan terhapus, sebagai peranti jika user tidak sengaja.
6. Jika sudah selesai menggunakan applikasi tersebut, user bisa mengetikkan angka 5 (Keluar) pada menu utama untuk menghentikan atau keluar dari aplikasi.

**menu utama adalah menu yang berisikan tampilan berikut :

[![foH0gf.jpg](https://iili.io/foH0gf.jpg)](https://freeimage.host/)

# Screenshot Demo
1. Menu Catat Pesanan
	
  [![foHG5l.jpg](https://iili.io/foHG5l.jpg)](https://freeimage.host/)
  
2. Menu Bayar
	
  [![foHjse.jpg](https://iili.io/foHjse.jpg)](https://freeimage.host/)
  
3. Menu Cetak Nota
	
  [![foHNqu.jpg](https://iili.io/foHNqu.jpg)](https://freeimage.host/)
  
4. Menu Hapus Nota
	
  [![foHO0b.jpg](https://iili.io/foHO0b.jpg)](https://freeimage.host/)
  
5. Menu Keluar
	
  [![foHegj.jpg](https://iili.io/foHegj.jpg)](https://freeimage.host/)
  

# Link Youtube Applikasi
https://youtu.be/RuRpUu0gRO0
