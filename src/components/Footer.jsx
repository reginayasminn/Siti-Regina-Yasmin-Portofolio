import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-center py-6 mt-10 rounded-t-3xl">
      <h2 className="text-pink-900 text-2xl font-bold mb-3">Portofolio</h2>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 mb-3 text-pink-700">
        <a
          href="https://www.instagram.com/reginayasminn_"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram size={28} />
        </a>

        <a
          href="https://www.linkedin.com/in/siti-regina-yasmin-1aa541343/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaLinkedin size={28} />
        </a>

        <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=reginayasminn@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-500 transition"
>
        <FaEnvelope size={28} />
        </a>
      </div>

      <p className="text-pink-900 text-sm">
        © {new Date().getFullYear()} Regina Yasmin — All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;