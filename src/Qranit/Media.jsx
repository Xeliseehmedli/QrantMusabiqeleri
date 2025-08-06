import "./Media.scss";
import Foto1 from "../assets/Foto1.png";
import Foto2 from "../assets/Foto2.png";
import Foto3 from "../assets/Foto3.png";
import Edu from "../assets/edu.svg";
import mStart from "../assets/mStart.svg";
import Muzakireler from "../assets/muzakireler.svg";
import Yaradici from "../assets/yaradici.svg";
import C from "../assets/12C.svg";
import linkedin from "../assets/in.svg";
import instagram from "../assets/instagram (1).svg";
import fest from "../assets/fest.svg";
import facebook from "../assets/fb.svg";
import xcom from "../assets/xcom.svg";
import youtube from "../assets/youtube.svg";




export default function Media(){
    return(
        <>
<main>
    <section id="Media" >
        <h1 >Fotoqalereya</h1>
      <div className="gallery-wrapper">
  <div className="left-images">
    <img src={Foto1} alt="Foto" />
    <img src={Foto2} alt="Foto" />
  </div>
  <div className="right-image">
    <img src={Foto3} alt="Foto" />
  </div>
</div>

    </section>
</main>
<footer>
  <div className="footer-container">
    <div className="footer-links-and-logos">
      <a href="https://culture.gov.az/az">https://culture.gov.az/az</a>
      <img src={Muzakireler} alt="" />
      <img src={Edu} alt="" />
      <img src={fest} alt="" />
      <img src={Yaradici} alt="" />
      <img src={mStart} alt="" />
      <img src={C}  alt="" />
    </div>
   
    <div className="footer-social-icons">
      <img src={facebook} alt="" />
      <img src={linkedin} alt="" />
      <img src={instagram} alt="" />
      <img src={youtube} alt="" />
      <img src={xcom} alt="" />
    </div>
    
  </div>
  <div className="copywrite">© 2025 Mygrant. Bütün hüquqlar qorunur.</div>
</footer>


        </>
    )
}