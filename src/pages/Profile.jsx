const Profile = () => {
  return (
    <section className="min-h-screen bg-pink-50 text-zinc-800 py-20 px-6 text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">Tentang Saya</h1>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:flex md:items-center md:gap-10">
        <img
          src="/assets/regina.jpg"
          alt="Profile"
          className="w-48 h-48 rounded-full object-cover mx-auto md:mx-0 border-4 border-pink-300"
        />
        <div className="text-left mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold text-pink-500 mb-2">
            Siti Regina Yasmin
          </h2>
          <p className="text-gray-700 mb-4">
            Saya adalah mahasiswa Sistem Informasi yang memiliki minat besar
            dalam pengembangan web dan kreativitas digital. Saya senang membuat
            tampilan website yang menarik, mudah digunakan, dan memiliki
            pengalaman pengguna yang baik.
          </p>
          <p className="text-gray-600">
            Tujuan saya adalah menggabungkan teknologi dan kreativitas untuk
            membangun produk digital yang bermanfaat dan dapat terhubung dengan
            banyak orang.
          </p>
          <p className="text-gray-600">
            Email: reginayasminn@gmail.com
          </p>
        </div>
      </div>

      <div className="mt-10 flex justify-center gap-6">
        <a
          href="https://github.com/"
          target="_blank"
          className="text-pink-500 hover:text-pink-700 text-3xl"
        >
          <i className="ri-github-fill"></i>
        </a>
        <a
          href="https://www.instagram.com/reginayasminn_?igsh=MTY2ZXZmaTIwcm85dg%3D%3D&utm_source=qr"
          target="_blank"
          className="text-pink-500 hover:text-pink-700 text-3xl"
        >
          <i className="ri-instagram-fill"></i>
        </a>
        <a
          href="reginayasminn@gmail.com"
          className="text-pink-500 hover:text-pink-700 text-3xl"
        >
          <i className="ri-mail-fill"></i>
        </a>
      </div>
    </section>
  );
};

export default Profile;