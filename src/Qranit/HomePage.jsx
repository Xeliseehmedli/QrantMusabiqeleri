import "./HomePage.scss"; 
import { useState } from "react";
import Gerb from "../assets/Gerb.svg";
import QranitLogo from "../assets/QranitLogo.svg";
import Computer from "../assets/Comp.png"



export default function HomePage(){
  
  const [isSenedlerOpen, setIsSenedlerOpen] = useState(false);
const [isMediaOpen, setIsMediaOpen] = useState(false);

const toggleSenedler = () => {
  setIsSenedlerOpen(!isSenedlerOpen);
  setIsMediaOpen(false); 
};

const toggleMedia = () => {
  setIsMediaOpen(!isMediaOpen);
  setIsSenedlerOpen(false); 
};

    return(
      <>
      <header>
  <div className="header-container">
    <div className="logo-wrapper">
      <img src={Gerb} alt="Gerb" className="Gerb-icon"/>
      <img src={QranitLogo} alt="Qranit Logo" className="QranitLogo-icon" />
    </div>
    <nav>
        <ul>
            <li><a href="#">Ana səhifə</a></li>
         <li className="dropdown" onClick={toggleSenedler}><a href="#">Senedler</a>
         {isSenedlerOpen && (
         <ul className="dropdown-menu">
          <li><a href="#">Normativ-hüquqi sənədlər</a></li>
          <li><a href="#">Qrant layihələrinin sənəd formaları</a></li>
         </ul> 
         )}       
         </li>
            <li><a href="#">Qrant müsabiqələri</a></li>
            <li className="dropdown" onClick={toggleMedia}><a href="#" >Media</a>
            {isMediaOpen && (
               <ul className="dropdown-menu">
<li><a href="#">Elanlar</a></li>
<li><a href="#">Xəbərlər</a></li>
<li><a href="#">Fotoqalereya</a></li>
               </ul>

            )}
            
            
            </li>
        </ul>
    </nav>
  <button>Şəxsi kabinet</button> 
  </div>
</header>
<main>
  <section id="AnaSehife" style={{ backgroundColor: "#CBC2A7" ,height:"70vh",width:"100%" }}>
<div className="grant-section">
    <div className="grant-info">
      <h1>QRANT MÜSABİQƏSİNƏ <br /> QATILIN!</h1>
      <p>Azərbaycan Respublikası Nazirlər Kabinetinin 2014-cü il 26 avqust tarixli <br />
       292 nömrəli Qərarı ilə təsdiq edilmiş "Qeyri-hökumət təşkilatları tərəfindən <br />
        mədəniyyət sahəsində keçirilən tədbirlərin dövlət maliyyələşdirilməsi" <br />
         Qaydalarına müfaviq olaraq Azərbaycan Respublikasının Mədəniyyət <br /> Nazirliyi tərəfindən mədəniyyət,
          o cümlədən mədəni və yaradıcı sənayelər <br />
           sahəsində qeyri-hökumət təşkilatlarının fəaliyyətlərinin dəstəklənməsi üçün <br />
            təşkil olunan tədbirlər üzrə qrant müsabiqələri həyata keçirilir.</p>
            <p><a href="https://newpage/">Mədəniyyət sahələri üzrə qrant müsabiqəsi</a></p>
        
            <p><a href="https://newpage/">Mədəni və yaradıcı sənayələrin təşviqi üzrə qrant müsabiqəsi</a></p>
     <div><button className="my-second-button">Qeydiyyat</button></div>
    </div>
 
    <div><img src={Computer} alt="Computer" /></div>
    </div>
  </section>
</main>
      </>


    )
}