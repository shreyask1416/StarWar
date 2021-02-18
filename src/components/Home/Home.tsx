import React, { useState } from 'react';
import styles from './Home.module.css';
import background from "../../StarWarDesign/Art Assets/background.png";
import logo from "../../StarWarDesign/Art Assets/logo.png";
import film from "../../StarWarDesign/Art Assets/Topics/films_normal.png"
import filmpressed from "../../StarWarDesign/Art Assets/Topics/films_pressed.png"
import species from "../../StarWarDesign/Art Assets/Topics/species_normal.png"
import speciespressed from "../../StarWarDesign/Art Assets/Topics/species_pressed.png"
import plan from "../../StarWarDesign/Art Assets/Topics/planets_normal.png"
import planpressed from "../../StarWarDesign/Art Assets/Topics/planets_pressed.png"
import people from "../../StarWarDesign/Art Assets/Topics/characters_normal.png"
import peoplepressed from "../../StarWarDesign/Art Assets/Topics/characters_pressed.png"
import droids from "../../StarWarDesign/Art Assets/Topics/droids_normal.png"
import droidspressed from "../../StarWarDesign/Art Assets/Topics/droids_pressed.png"
import vehicle from "../../StarWarDesign/Art Assets/Topics/vehicles_normal.png"
import vehiclepressed from "../../StarWarDesign/Art Assets/Topics/vehicles_pressed.png"
import foologo from "../../StarWarDesign/Art Assets/footer_logo.png"
import {useHistory} from 'react-router-dom';
const Home = () => {
    let history = useHistory();
    const [Films, setFilms] = useState(false);
    const [Species, setSpecies] = useState(false);
    const [Planets, setPlanets] = useState(false);
    const [Characters, setCharacters] = useState(false);
    const [Starship, setStarship] = useState(false);
    const [Vehicles, setVehicles] = useState(false);
    return (
        <div className={styles.Home}>
            <div className={styles.bkg}>
                <div className={styles.logostyle}>
                    <img src={logo} />
                </div>
                <div className={styles.line}></div>

                <div className={styles.images}>
                    <div 
                    onMouseDown={()=>setFilms(!Films)}
                    onClick={()=>{history.push('/Navbar/Films')}}>
                        
                      
                            
                            <img 
                                src={Films ? filmpressed:film}
                                className={styles.ImagesComp}></img>
                                 
                      
                        <h1 className={styles.TextComp}>FILMS</h1>
                    </div>
                    <div 
                    onMouseDown={()=>setSpecies(!Species)}
                    onClick={()=>{history.push('/Navbar/Species')}}>
                  
                     
                            
                                <img  src={Species ? speciespressed:species}
                                    className={styles.ImagesComp}></img>
                           
                       
                        <h1 className={styles.TextComp}>SPECIES</h1>
                    </div>
                    <div
                    onMouseDown={()=>setPlanets(!Planets)}
                    onClick={()=>{history.push('/Navbar/Planets')}} >
                       
                           
                                <img 
                                    src={Planets ?planpressed:plan}
                                    className={styles.ImagesComp}></img>
                        <h1 className={styles.TextComp}>PLANETS</h1>
                    </div>
                    <div onMouseDown={()=>setCharacters(!Characters)}
                    onClick={()=>{history.push('/Navbar/Characters')}} >
                       
                           
                                <img onClick={()=>setCharacters(!Characters)}
                                    src={Characters ?peoplepressed:people}
                                    className={styles.ImagesComp}></img>
                        <h1 className={styles.TextComp}>PEOPLE</h1>
                    </div>
                    <div onMouseDown={()=>setStarship(!Starship)}
                    onClick={()=>{history.push('/Navbar/Starships')}}>
                      
                            
                                <img 
                                    src={Starship ?vehiclepressed : vehicle}
                                    className={styles.ImagesComp}></img>

                        <h1 className={styles.TextComp}>STARSHIP</h1>
                    </div>
                    <div onMouseDown={()=>setVehicles(!Vehicles)}
                    onClick={()=>{history.push('/Navbar/Vehicles')}} >
                           
                                <img 
                                    src={Vehicles ?droidspressed :droids}
                                    className={styles.ImagesComp}></img>
        
                        <h1 className={styles.TextComp}>VEHICLES</h1>
                    </div>
                </div>
                <div className={styles.line2}>

                </div>
                <div className={styles.fooo}>
                <h1>TERMS OF USE</h1>
                    <h1>LEGAL NOTICES</h1>
                    <h1>PRIVACY POLICY</h1>
                    <h1>STAR WARS HELPDESK</h1>
                    <h1>STAR WARS AT DISNEY STORE</h1>
                </div>
                <div className={styles.Foo}>
                    <img src={foologo}></img>
                    <p>TM & © Lucasfilm Ltd. All Rights Reserved</p>
                </div>
                
            </div>
        </div>
    );
};




export default Home;