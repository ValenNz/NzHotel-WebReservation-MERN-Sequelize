<p align="center">
  <img src="https://github.com/ValenNz/NzHotel-WebReservation-MERN-Sequelize/blob/main/frontend/admin/src/assets/logo.png" alt="Logo Proyek" width="200">
</p>

<h1 align="center">NzHotel Web Reservation (MERN & Sequelize)</h1>

Selamat datang di proyek **NzHotel Web Reservation**! Proyek ini adalah aplikasi web reservasi hotel yang dibangun menggunakan teknologi MERN (MongoDB, Express, React, Node.js) serta Sequelize sebagai ORM (Object-Relational Mapping). Aplikasi ini memungkinkan pengguna untuk mencari, memilih, dan memesan kamar hotel dengan mudah.

<br>

<p align="center">
  <a href="https://github.com/USERNAME/REPO"><strong>Terlihat sangat bagus? Berikan Bintang ⭐</strong></a>
</p>

<br>

<h1 align="center">Preview Project</h1>

  ![Beranda](https://github.com/ValenNz/NzHotel-WebReservation-MERN-Sequelize/assets/92833376/3672edab-9db0-4896-972e-5cdf04ba3d96)

  <p align="center" >
    <a href="https://drive.google.com/drive/folders/1P4tu4G5NDYuhfhLdXR0bqn9BPBCAJ2BA?usp=sharing"><span style="color: #faa935;">Preview Project di Google Drive</span></a>
  </p>

## 🚀 Fitur Utama

- 🏨 Pencarian dan filter kamar hotel
- 🌟 Lihat detail kamar termasuk fasilitas dan harga
- 🛏️ Proses reservasi kamar dengan langkah-langkah yang mudah
- 🗄️ Manajemen reservasi dan histori pesanan
- 🔐 Otentikasi pengguna
- 👑 Administrasi kamar oleh admin
- 💳 Penanganan pembayaran (opsional)

## ⚙️ Persyaratan

Sebelum Anda memulai pengembangan atau penggunaan aplikasi ini, pastikan Anda telah menginstal:
- [React.js](https://react.dev/) (18.2.0 atau lebih baru)
- [Node.js](https://nodejs.org/) (v14 atau lebih baru)
- [NPM](https://www.npmjs.com/) (v6 atau lebih baru)
- [PostgreSQL](https://www.postgresql.org/) (v13 atau lebih baru)
- [MongoDB](https://www.mongodb.com/) (v4 atau lebih baru)

## 📦 Cara Menggunakan

1. **Clone repositori ini ke komputer Anda:**

   ```bash
   git clone https://github.com/username/NzHotel-WebReservation-MERN-Sequelize.git
   
2. Pindah ke direktori proyek:
   
   ```bash
   cd NzHotel-WebReservation-MERN-Sequelize
   
3. Instal dependensi server:
   
   ```bash
   cd backend
   npm install
   
4. Instal dependensi client:
   
   ```bash
   cd frontend
   cd admin
   npm install

   cd frontend 
   cd customer
   npm install
   
5. Konfigurasi basis data:
    - folder backend
    - folder config
    - sesuaikan database :
                "development":
                    {
                      "nama_user": "root",
                      "password": null,
                      "database": "your_name_database",
                      "host": "127.0.0.1",
                      "dialect": "mysql"
                    },
  
6. Inisialisasi basis data dan jalankan migrasI (folder backend)
   
    ```bash
    cd backend
    npx sequelize-cli db:migrate
  
7. Kembali ke direktori akar proyek dan jalankan server dan client: (folder frontend)
   
    ```bash
    cd frontend
    cd admin / client
    npm run dev
    
Aplikasi server akan berjalan di http://localhost:8000.
Aplikasi server akan berjalan di http://localhost:5173.

## 👥 Kontribusi
Kami sangat menghargai kontribusi dari komunitas. Jika Anda ingin berkontribusi pada proyek ini, silakan ikuti langkah-langkah berikut:

## 📂 Fork repositori ini.
- Buat branch fitur atau perbaikan Anda: git checkout -b fitur-anda.
- Commit perubahan Anda: git commit -m 'Menambahkan fitur baru'.
- Push ke branch Anda: git push origin fitur-anda.
- Buat permintaan tarik (Pull Request) ke repositori utama.
  
## 📜 Lisensi
Proyek ini dilisensikan di bawah Lisensi MIT. Lihat file LISENSI untuk informasi lebih lanjut.

Terima kasih telah menggunakan NzHotel Web Reservation! Kami berharap Anda menemukan aplikasi ini berguna. Jika Anda memiliki pertanyaan atau masalah, jangan ragu untuk menghubungi kami atau laporkan masalah.

Pastikan untuk menggantikan "username" dengan nama pengguna GitHub Anda dan menambahkan tautan kontak Anda jika perlu. Selain itu, pastikan untuk menyertakan panduan instalasi yang jelas dan panduan kontribusi yang ramah. Selamat berkontribusi dan mengembangkan proyek Anda!
