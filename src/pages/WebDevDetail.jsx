const WebDevDetail = () => {
  return (
    <section className="min-h-screen bg-pink-50 text-zinc-800 py-16 px-6 text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-5">Proyek Website Travel</h1>
      <p className="max-w-3xl mx-auto text-gray-700 mb-10">
       Website ini dibuat menggunakan HTML, CSS, PHP, dan XAMPP (PHPMyAdmin)
        untuk mengelola destinasi wisata dan pemesanan. Website ini juga dilengkapi
        dengan halaman utama yang menarik dan dashboard admin untuk pengelolaan data.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-start gap-10">
        {/* Homepage */}
        <div className="flex flex-col items-center max-w-xs">
          <img
            src="/assets/proyek/project1.jpg"
            alt="Dataset"
            className="w-80 rounded-xl shadow-md mb-3"
          />
          <p className="font-semibold text-gray-800 text-lg">Halaman Utama</p>
          <p className="text-gray-600 text-sm mt-2">
           Halaman utama menampilkan berbagai destinasi wisata dengan desain responsif
            dan mudah digunakan. Pengguna dapat melihat informasi destinasi serta melakukan
            pemesanan dengan tampilan yang sederhana dan menarik.
          </p>
        </div>

        {/* Admin Dashboard */}
        <div className="flex flex-col items-center max-w-xs">
          <img
            src="/assets/admin-dashboard.png"
            alt="Data Processing"
            className="w-80 rounded-xl shadow-md mb-3"
          />
          <p className="font-semibold text-gray-800 text-lg">Dashboard Admin</p>
          <p className="text-gray-600 text-sm mt-2">
            Dashboard admin digunakan untuk mengelola data destinasi, pengguna,
            serta pemesanan. Fitur ini membantu admin dalam memantau dan memperbarui
            informasi wisata secara efisien.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebDevDetail;
