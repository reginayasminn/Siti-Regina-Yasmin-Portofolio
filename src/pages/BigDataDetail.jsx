const BigDataDetail = () => {
  return (
    <section className="min-h-screen bg-pink-50 text-zinc-800 py-16 px-6 text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-5">
        Proyek Analisis Big Data
      </h1>
      <p className="max-w-3xl mx-auto text-gray-700 mb-10">
        Proyek ini menganalisis pola volume perdagangan saham LQ45 dengan
        menggunakan teknik klasterisasi dan visualisasi data besar (Big Data).
        Prosesnya meliputi tahap persiapan dataset, pengolahan data, hingga
        pembuatan laporan analisis.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-start gap-10">
        {/* Dataset */}
        <div className="flex flex-col items-center max-w-xs">
          <img
            src="/assets/dataset.png"
            alt="Dataset"
            className="w-80 rounded-xl shadow-md mb-3"
          />
          <p className="font-semibold text-gray-800 text-lg">Dataset</p>
          <p className="text-gray-600 text-sm mt-2">
            Menggunakan data volume perdagangan saham LQ45 yang bersumber dari
            Bursa Efek Indonesia (IDX) untuk periode 2014–2024. Dataset ini
            mencakup kode saham, volume transaksi, frekuensi perdagangan, serta
            harga penutupan dari beberapa perusahaan terpilih.
          </p>
        </div>

        {/* Data Processing */}
        <div className="flex flex-col items-center max-w-xs">
          <img
            src="/assets/data-processing.jpg"
            alt="Data Processing"
            className="w-80 rounded-xl shadow-md mb-3"
          />
          <p className="font-semibold text-gray-800 text-lg">Pengolahan Data</p>
          <p className="text-gray-600 text-sm mt-2">
            Data dibersihkan dan diubah untuk menangani nilai yang hilang,
            dinormalisasi agar konsisten, serta diolah menggunakan alat berbasis
            Python untuk proses klasterisasi dan identifikasi pola perdagangan.
          </p>
        </div>

        {/* Report */}
        <div className="flex flex-col items-center max-w-xs">
          <img
            src="/assets/proyek/project2.png"
            alt="Report"
            className="w-80 rounded-xl shadow-md mb-3"
          />
          <p className="font-semibold text-gray-800 text-lg">Laporan</p>
          <p className="text-gray-600 text-sm mt-2">
           Laporan akhir menampilkan hasil visualisasi pola volume perdagangan
            berdasarkan hasil klasterisasi, yang membantu mengidentifikasi tren
            serta perilaku transaksi pada perusahaan-perusahaan dalam indeks
            LQ45.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BigDataDetail;