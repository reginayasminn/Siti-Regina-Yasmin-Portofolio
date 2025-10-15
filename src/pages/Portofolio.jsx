import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section className="min-h-screen bg-pink-50 text-zinc-800 py-20 px-6 text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-3">Kumpulan Proyek</h1>
      <p className="text-lg mb-10 text-gray-700">
        Berikut beberapa portofolio proyek yang telah saya kerjakan 💻
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Travel Website Project */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <img
            src="/assets/proyek/project1.jpg"
            alt="Travel Website"
            className="rounded-xl mb-5"
          />
          <h2 className="text-2xl font-semibold text-pink-500">Website Travel</h2>
          <p className="mt-3 text-gray-600">
            Sebuah website perjalanan yang responsif untuk membantu pengguna menemukan destinasi
            dan merencanakan liburan. Dibangun menggunakan HTML, CSS, dan PHPMyAdmin untuk mengelola
            pemesanan serta destinasi secara efisien.
          </p>
          <Link
            to="/webdev"
            className="inline-block mt-5 bg-pink-500 text-white px-5 py-2 rounded-xl hover:bg-pink-600"
          >
            Selengkapnya
          </Link>
        </div>

        {/* Big Data Project */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <img
            src="/assets/proyek/project2.png"
            alt="Big Data Project"
            className="rounded-xl mb-5"
          />
          <h2 className="text-2xl font-semibold text-pink-500">Analisis Big Data</h2>
          <p className="mt-3 text-gray-600">
            Proyek analisis data besar yang berfokus pada pengelompokan dan visualisasi pola volume
            perdagangan saham LQ45. Hasil analisis ini memberikan wawasan penting untuk mendukung
            pengambilan keputusan investasi yang lebih baik.
          </p>
          <Link
            to="/bigdata"
            className="inline-block mt-5 bg-pink-500 text-white px-5 py-2 rounded-xl hover:bg-pink-600"
          >
            Selengkapnya
          </Link>
        </div>

        {/* Pemilihan Ketua BEM */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <img
            src="/assets/pemilihanBEM.png"
            alt="Travel Website"
            className="rounded-xl mb-5"
          />
          <h2 className="text-2xl font-semibold text-pink-500"> Website Pemilihan Ketua BEM</h2>
          <p className="mt-3 text-gray-600">
            Website pemungutan suara mahasiswa yang dikembangkan menggunakan Java Spring Boot,
            HTML, CSS, dan PHPMyAdmin. Sistem ini dirancang untuk memastikan proses pemilihan
            berlangsung secara transparan, aman, dan mudah digunakan oleh seluruh mahasiswa.
          </p>
          <Link
            to="/obp"
            className="inline-block mt-5 bg-pink-500 text-white px-5 py-2 rounded-xl hover:bg-pink-600"
          >
            Selengkapnya
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
