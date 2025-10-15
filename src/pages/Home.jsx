import DataImage from "../data";
import { listTools, listProyek } from "../data";
import { Link } from "react-router-dom"; 
import "animate.css";


function Home() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-pink-300 max-w-md p-4 rounded-2xl text-white">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 h-10 object-cover rounded-md"
              loading="lazy"
            />
            <q className="leading-relaxed text-pink-900">
              The best creations are born from the courage to keep trying,
              even when perfection feels far away💫.
            </q>
          </div>
          <h1 className="text-3xl/tight font-bold mb-6 text-pink-900">
            Hi, Saya Siti Regina Yasmin
          </h1>
          <p className="text-base/loose mb-6 opacity-80 text-pink-800">
           Saya adalah mahasiswa Sistem Informasi di Universitas Tarumanagara yang memiliki 
           ketertarikan besar pada teknologi, desain, dan pengembangan web.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="https://drive.google.com/drive/folders/14ZBkXyc-JuTPNCLXCaKD6l0JwCczNxPx?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 p-4 rounded-2xl hover:bg-pink-400 text-white"
            >
              Lihat CV <i className="ri-download-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[400px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
          loading="lazy"
        />
      </div>

      {/* about */}
      <div className="about mt-32 py-10">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-pink-300 rounded-lg shadow-md"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src={DataImage.HeroImage}
            alt="image"
            className="w-12 roundede-md mb-10 sm:hidden"
            loading="lazy"
          />
          <p className="text-base/loose mb-10 text-pink-900">
            Saya senang menciptakan tampilan website yang menarik serta mudah digunakan, 
            dengan menggabungkan unsur estetika dan fungsionalitas. Bagi saya, teknologi 
            bukan hanya tentang sistem, tetapi juga tentang bagaimana menciptakan pengalaman 
            digital yang bermanfaat dan bermakna bagi pengguna.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
          </div>
        </div>

        {/* Tools */}
        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4 text-pink-900"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Tools yang dipakai
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-70 text-pink-800"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Berikut ini beberapa tools yang biasa saya pakai 
          </p>
          <div
            className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
          >
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-pink-300 rounded-md hover:bg-pink-100 group transition-all"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
              >
                <img
                  src={tool.gambar}
                  alt="tools image"
                  className="w-14 bg-pink-200 p-1 rounded-md"
                />
                <div>
                  <h4 className="font-bold text-pink-900">{tool.nama}</h4>
                  <p className="opacity-70 text-pink-700">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project */}
      <div id="project" className="proyek mt-32 py-10">
        <h1
          className="text-center text-4xl font-bold mb-2 text-pink-900"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Project Collection
        </h1>
        <p
          className="text-base/loose text-center opacity-70 text-pink-800"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Berikut beberapa portofolio proyek saya
        </p>

        <div className="proyek-box mt-14 grid md:grid-cols-2 grid-cols-1 gap-8 justify-center items-center place-items-center">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-6 bg-pink-100 rounded-2xl shadow-md flex flex-col justify-between min-h-[500px]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
            >
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4 text-pink-900">
                  {proyek.nama}
                </h1>
                <p className="text-base/loose mb-4 text-pink-800">
                  {proyek.desk}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-pink-300 bg-pink-200 rounded-md font-semibold text-pink-900"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Pengalaman */}
      <div className="experience mt-32 py-10">
        <h1
          className="text-center text-4xl font-bold mb-4 text-pink-900"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Pengalaman
        </h1>
        <p
          className="text-base/loose text-center opacity-70 text-pink-800 mb-10"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Perjalanan belajar saya sejauh ini
        </p>

        <div
          className="experience-box grid md:grid-cols-2 grid-cols-1 gap-8"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          {/* Pengalaman 1 */}
          <div className="p-6 bg-pink-100 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <img
              src="/assets/pengalaman1.png"
              alt="BEM Election Project"
              className="w-full h-52 object-cover rounded-xl mb-4"
              loading="lazy"
            />
            <h3 className="text-2xl font-semibold text-pink-900 mb-2">
              Peserta Festival Humaniora
            </h3>
            <p className="text-pink-800 mb-2 font-medium">
              Tarumanagara University — Juni 2025
            </p>
            <p className="text-base/loose text-pink-700">
             Berpartisipasi dalam kegiatan Festival Humaniora yang diselenggarakan oleh Universitas Tarumanagara 
             sebagai wadah pengembangan kreativitas, inovasi, serta kolaborasi antar mahasiswa lintas jurusan dalam 
             bidang kemanusiaan dan sosial.
            </p>
          </div>
        </div>
      </div>
      {/* Experience */}


      {/* Contact */}
      <div className="kontak mt-32 sm:p-10 p-0">
        <h1
          className="text-4xl mb-2 font-bold text-center text-pink-900"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Kontak
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-70 text-pink-800"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Mari terhubung dengan saya
        </p>
        <form
          action="https://formsubmit.co/reginayasminn@gmail.com"
          method="POST"
          className="bg-pink-100 p-10 sm:w-fit w-full mx-auto rounded-md shadow-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-pink-900">Nama</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukkan Nama"
                className="border border-pink-300 p-2 placeholder-black rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-pink-900">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan Email"
                className="border border-pink-300 p-2 placeholder-black rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold text-pink-900">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="Pesan"
                className="border border-pink-300 p-2 placeholder-black rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-pink-500 p-3 rounded-lg w-full border border-pink-400 hover:bg-pink-400 text-white"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Home;