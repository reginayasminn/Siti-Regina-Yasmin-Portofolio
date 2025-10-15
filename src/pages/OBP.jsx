const OBP = () => {
  return (
    <section className="min-h-screen bg-pink-50 text-zinc-800 py-16 px-6 text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-5">Proyek Website Pemilihan BEM</h1>
      <p className="max-w-3xl mx-auto text-gray-700 mb-10">
       Website ini dibuat menggunakan HTML, CSS, dan PHP sebagai simulasi sistem pemilihan BEM. 
        Data kandidat dan pemilih diatur secara manual tanpa menggunakan database eksternal, 
        untuk menampilkan proses pemilihan secara sederhana namun fungsional.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-start gap-10">
        {/* Homepage */}
        <div className="flex flex-col items-center max-w-xs">
          <img
            src="/assets/pemilihanBEM.png"
            alt="Homepage"
            className="w-80 rounded-xl shadow-md mb-3"
          />
          <p className="font-semibold text-gray-800 text-lg">Halaman Utama</p>
          <p className="text-gray-600 text-sm mt-2">
            Menampilkan daftar kandidat, informasi singkat, dan tombol untuk melakukan pemilihan. 
            Tampilan dibuat sederhana agar mudah dipahami oleh pengguna.
          </p>
        </div>

        {/* Admin Dashboard */}
        <div className="flex flex-col items-center max-w-xs">
          <img
            src="/assets/admin-dashboard2.png"
            alt="Admin Dashboard"
            className="w-80 rounded-xl shadow-md mb-3"
          />
          <p className="font-semibold text-gray-800 text-lg">Dashboard Admin</p>
          <p className="text-gray-600 text-sm mt-2">
            Bagian admin berfungsi untuk melihat hasil perolehan suara secara langsung 
            dan memastikan setiap pengguna hanya dapat memberikan satu suara.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OBP;
