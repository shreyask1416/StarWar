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
                    <div>
                        
                        {Films ? (
                            
                            <img onClick={()=>{history.push('/Navbar')}}
                                src={filmpressed}
                                className={styles.ImagesComp}></img>

                        ) : (
                            
                                <img onClick={()=>setFilms(!Films)}
                                    src={film}
                                    className={styles.ImagesComp}></img>

                            )}
                        <h1 className={styles.TextComp}>FILMS</h1>
                    </div>
                    <div>
                        {Species ? (
                            
                                <img onClick={()=>setSpecies(!Species)}
                                    src={speciespressed}
                                    className={styles.ImagesComp}></img>
                           
                        ) : (
                               
                                    <img onClick={()=>setSpecies(!Species)}
                                        src={species}
                                        className={styles.ImagesComp}></img>
                               
                            )}
                        <h1 className={styles.TextComp}>SPECIES</h1>
                    </div>
                    <div>
                        {Planets ? (
                           
                                <img onClick={()=>setPlanets(!Planets)}
                                    src={planpressed}
                                    className={styles.ImagesComp}></img>
                          
                        ) : (
                               
                                    <img onClick={()=>setPlanets(!Planets)}
                                        src={plan}
                                        className={styles.ImagesComp}></img>
                               
                            )}
                        <h1 className={styles.TextComp}>PLANETS</h1>
                    </div>
                    <div>
                        {Characters? (
                           
                                <img onClick={()=>setCharacters(!Characters)}
                                    src={peoplepressed}
                                    className={styles.ImagesComp}></img>
                           
                        ) : (
                               
                                    <img onClick={()=>setCharacters(!Characters)}
                                        src={people}
                                        className={styles.ImagesComp}></img>
                               
                            )}
                        <h1 className={styles.TextComp}>PEOPLE</h1>
                    </div>
                    <div>
                        {Starship ? (
                            
                                <img onClick={()=>setStarship(!Starship)}
                                    src={vehiclepressed}
                                    className={styles.ImagesComp}></img>
                           
                        ) : (
                               
                                    <img onClick={()=>setStarship(!Starship)}
                                        src={vehicle}
                                        className={styles.ImagesComp}></img>
                                
                            )}
                        <h1 className={styles.TextComp}>STARSHIP</h1>
                    </div>
                    <div>
                        {Vehicles ? (
                           
                                <img onClick={()=>setVehicles(!Vehicles)}
                                    src={droidspressed}
                                    className={styles.ImagesComp}></img>
                            
                        ) : (
                                
                                    <img onClick={()=>setVehicles(!Vehicles)}
                                        src={droids}
                                        className={styles.ImagesComp}></img>
                                
                            )}
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