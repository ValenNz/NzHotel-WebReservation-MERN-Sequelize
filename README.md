# NzHotel Web Reservation (MERN & Sequelize)

Selamat datang di proyek **NzHotel Web Reservation**! Proyek ini adalah aplikasi web reservasi hotel yang dibangun menggunakan teknologi MERN (MongoDB, Express, React, Node.js) serta Sequelize sebagai ORM (Object-Relational Mapping). Aplikasi ini memungkinkan pengguna untuk mencari, memilih, dan memesan kamar hotel dengan mudah.

![Tampilan Aplikasi](link_gambar_aplikasi.png)

## Fitur Utama

- Pencarian dan filter kamar hotel
- Lihat detail kamar termasuk fasilitas dan harga
- Proses reservasi kamar dengan langkah-langkah yang mudah
- Manajemen reservasi dan histori pesanan
- Otentikasi pengguna
- Administrasi kamar oleh admin
- Penanganan pembayaran (opsional)

## Persyaratan

Sebelum Anda memulai pengembangan atau penggunaan aplikasi ini, pastikan Anda telah menginstal:

- Node.js (v14 atau lebih baru)
- NPM (v6 atau lebih baru)
- PostgreSQL (v13 atau lebih baru)
- MongoDB (v4 atau lebih baru)

## Cara Menggunakan

1. Clone repositori ini ke komputer Anda:
   ```bash
   git clone https://github.com/username/NzHotel-WebReservation-MERN-Sequelize.git
2. Pindah ke direktori proyek:
   ```bash
   cd NzHotel-WebReservation-MERN-Sequelize
3. Instal dependensi server:
   ```bash
   cd server
   npm install
4. Instal dependensi client:
   ```bash
   cd client
   npm install
5. Konfigurasi basis data:
   Salin contoh file konfigurasi basis data:
   ```bash
   cd server
   cp config.example.js config.js
  Isi informasi basis data Anda di config.js.
6. Inisialisasi basis data dan jalankan migras
    ```bash
    cd server
    npm run sequelize

7. Kembali ke direktori akar proyek dan jalankan server dan client:
    ```bash
    Copy code
    npm run dev
Aplikasi akan berjalan di http://localhost:3000.

## Kontribusi
Kami sangat menghargai kontribusi dari komunitas. Jika Anda ingin berkontribusi pada proyek ini, silakan ikuti langkah-langkah berikut:

## Fork repositori ini.
- Buat branch fitur atau perbaikan Anda: git checkout -b fitur-anda.
- Commit perubahan Anda: git commit -m 'Menambahkan fitur baru'.
- Push ke branch Anda: git push origin fitur-anda.
- Buat permintaan tarik (Pull Request) ke repositori utama.
  
## Lisensi
Proyek ini dilisensikan di bawah Lisensi MIT. Lihat file LISENSI untuk informasi lebih lanjut.

# Terima kasih telah menggunakan NzHotel Web Reservation! Kami berharap Anda menemukan aplikasi ini berguna. Jika Anda memiliki pertanyaan atau masalah, jangan ragu untuk menghubungi kami atau laporkan masalah.

Pastikan untuk menggantikan "username" dengan nama pengguna GitHub Anda dan menambahkan tautan kontak Anda jika perlu. Selain itu, pastikan untuk menyertakan panduan instalasi yang jelas dan panduan kontribusi yang ramah. Selamat berkontribusi dan mengembangkan proyek Anda!
