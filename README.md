# Portfolio — Gilang Arya Prasetyo

Website portofolio statis menggunakan HTML, CSS, dan JavaScript murni.

## Struktur folder

- `index.html` — struktur dan konten halaman.
- `style.css` — tampilan, warna, dan responsivitas.
- `script.js` — interaksi navigasi dan tahun footer.
- `assets/foto-gilang.jpeg` — foto profil.

## Menjalankan secara lokal

Buka `index.html` langsung di browser. Tidak perlu instalasi, framework, atau proses build.

## Mengganti foto

Ganti file `assets/foto-gilang.jpeg` dengan foto lain menggunakan nama file yang sama, atau ubah alamat gambar pada elemen `<img>` di `index.html`.

## Mengganti email

Alamat email yang diberikan adalah `gilangaryap` dan belum mencantumkan domain. Perbarui atribut `href="mailto:gilangaryap"` pada tombol kontak dengan alamat email lengkap saat sudah tersedia.

## Mengganti contoh karya

Bagian Selected Works berisi kartu visual contoh kategori, bukan dokumentasi proyek asli. Edit bagian `work-card` di `index.html` dan tambahkan gambar karya ke folder `assets/` saat proyek asli tersedia.

## Publikasi ke GitHub Pages

1. Buat repository baru di GitHub.
2. Unggah seluruh isi folder ini ke root repository.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`, lalu tekan **Save**.
6. Tunggu proses publikasi selesai dan buka URL GitHub Pages yang diberikan.

Semua tautan aset menggunakan path relatif sehingga dapat berjalan di GitHub Pages.
