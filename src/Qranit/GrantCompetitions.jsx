import "./GrantCompetitions.scss";
import Frame from "../assets/Frame.png";
import Clock from "../assets/clock.svg";
import Calendar from "../assets/calendar.svg";


export default function GrantCompetitions(){
return(
<>
<main>
    <section id="Qrant müsabiqələri">
        
      <div><h1 className="main-bar">Xəbərlər və elanlar</h1></div>  
      <div className="news-section">
        <div className="announcement-card" >
            <img src={Frame} alt="Frame" />
            <div className="announcement-meta">
                <img src={Clock} alt="Clock" /> 
                <span> 9:45</span>
                <img src={Calendar} alt="Calendar" />
                <span>02.05.2025</span>
            </div>
            <p>Yeni qrant raundu elan olundu</p>
            <p>Startaplara yönəlik yeni maliyyə imkanları…   <a  href=""><br /> ətraflı oxu</a></p>
        </div>
    
       
        <div className="announcement-card" >
            <img src={Frame} alt="Frame" />
            <div className="announcement-meta">
                <img src={Clock} alt="Clock" /> 
                <span> 9:45</span>
                <img src={Calendar} alt="Calendar" />
                <span>02.05.2025</span>
            </div>
            <p>Yeni qrant raundu elan olundu</p>
            <p>Startaplara yönəlik yeni maliyyə imkanları…   <a  href=""><br /> ətraflı oxu</a></p>
        </div>
      
        <div className="announcement-card" >
            <img src={Frame} alt="Frame" />
            <div className="announcement-meta">
                <img src={Clock} alt="Clock" /> 
                <span> 9:45</span>
                <img src={Calendar} alt="Calendar" />
                <span>02.05.2025</span>
            </div>
            <p>Yeni qrant raundu elan olundu</p>
            <p>Startaplara yönəlik yeni maliyyə imkanları…   <a  href=""><br /> ətraflı oxu</a></p>
        </div>
         </div>
    </section>
</main>

</>
)
} 