import HeroImage from "/assets/hero-img.webp";


const Image = {
  HeroImage: "/assets/tools/profile-re.jpg"
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools8 from "/assets/tools/github.png";
import Tools10 from "/assets/canva.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 4,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
];

import Proyek1 from "/assets/proyek/project1.jpg";
import Proyek2 from "/assets/proyek/project2.png";
import Proyek3 from "/assets/pemilihanBEM.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Travel Korea",
    desk: "A responsive travel website that helps users discover destinations and plan trips easily. Built with HTML, CSS, and PHP connected to a MySQL database via XAMPP, it provides smooth booking management and an attractive, user-friendly design.",
    tools: ["HTML", "CSS", "PHP", "XAMPP"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Data Analyst",
    desk: "A data analysis project focused on identifying trading volume patterns of LQ45 stocks using clustering and visualization techniques. The project highlights insights from large datasets to support better investment decisions.",
    tools: ["Pyhton"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Website Pemilihan Ketua BEM",
    desk: "A web-based voting system for student council elections built using Java Spring Boot, HTML, CSS, and PHPMyAdmin for database management.",
    tools: ["Java Spring Boot", "HTML", "CSS", "PHPMyAdmin"],
    dad: "300",
  }
];
