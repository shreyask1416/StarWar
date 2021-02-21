import React,{useState} from "react";
import styles from "./Planets.module.css";
import planet from "../../StarWarDesign/Art Assets/Topics/planetimg.png";
const Planets = () => {
  
  const [charcter, setCharacter] = React.useState();
  const [Details, setDetails] = React.useState([]);
  const [prev, setPrev] =React.useState(false);
  const [next, setNext] =React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [detailsScreenStatus, setDetailsScreenStatus] =React.useState(true);
  const [name, setName] = useState()
  const [designation, setDesignation] = useState()
  const [height, setHeight] = useState()
  const [haircolor,setHaircolor]=useState()
  const [skinclr,setSkinclr]=useState()
  const [eyecolr,setEyecolr]=useState()
  const [birthyear,setBirthYear]=useState()
  const [classs,setClasss]=React.useState();
  const [lang,setLang]=React.useState();
  
  const getCharcter = async () => {
    setLoading(true);
    await fetch(`https://swapi.dev/api/planets/`)
      .then((response) => response.json())
      .then((responseData) => {
        setCharacter(responseData);
        if(responseData.previous === null) {


          setPrev(true);
          }
          if(responseData.next === null) {
          setNext(true);
          }
        setDetails(responseData.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
const nextCharcater = async (charcter:any) => {
    setLoading(true);
    await fetch(charcter.next)
      .then((response) => response.json())
      .then((responseData) => {
        setCharacter(responseData);
        if(responseData.next === null) {
          setNext(true);
          }
          if(responseData.prev !== null) {
          setPrev(false);
          }
        setDetails(responseData.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const previousCharcater = async (charcter:any) => {
    setLoading(true);
    await fetch(charcter.previous)
      .then((response) => response.json())
      .then((responseData) => {
        setCharacter(responseData);
        if(responseData.previous === null) {
          setPrev(true);
          }
          if(responseData.next !== null) {
          setNext(false);
          }
        setDetails(responseData.results);
        setLoading(false);
                })
      .catch((error) => {
        console.log(error);
      });
  }
React.useEffect(() => {
    getCharcter();
  }, []);
  return (
      <div className={styles.Planets}>
        {loading && <div className={styles.loading}>
<h1>Loading ... </h1>
</div>}
{detailsScreenStatus ?
           <div>
             
            {!loading && Details.map((item:any)=>{
              return(

                <h1 onClick={() => {
                  setDetailsScreenStatus(false);
                  setName(item.name);
                  setClasss(item.rotation_period);
                  setDesignation(item.orbital_period);
                  setHeight(item.diameter);
                  setHaircolor(item.climate);
                  setEyecolr(item.gravity);
                  setSkinclr(item.terrain);
                  setBirthYear(item.surface_water);
                  setLang(item.population);
                }
                } >{item.name}</h1>

              )
            })}
            {!loading && <div className={styles.button}>
{!prev? <button onClick={()=>previousCharcater(charcter)}>Previous</button> : <button className={styles.active}>Previous</button>}
{!next? <button onClick={()=>nextCharcater(charcter)}>Next</button> : <button className={styles.active}>Next</button>}
</div> }
            </div>
             :
             <div className={styles.box} >
               <div className={styles.imgs} onClick={() => setDetailsScreenStatus(true)}>
               <img src={planet}></img></div>
               <div className={styles.info}>
                 <h1>{name} </h1>
                 <h2 className={styles.height}>Rotation Period : <span className={styles.hei}> {classs} </span></h2>
                 <h2 className={styles.height}>Orbital Period : <span className={styles.hei}>{designation} </span></h2>
                 <h2 className={styles.height}>Diameter : <span className={styles.hei}> {height} </span></h2>
                 <h2 className={styles.height}>Climate : <span className={styles.hei}>{haircolor} </span></h2>
                 <h2 className={styles.height}>Gravity : <span className={styles.hei}> {eyecolr} </span></h2>
                 <h2 className={styles.height}>Terrain : <span className={styles.hei}> {skinclr} </span></h2>
                 <h2 className={styles.height}>Surface Water : <span className={styles.hei}> {birthyear} </span></h2>
                 <h2 className={styles.height}>Population : <span className={styles.hei}> {lang} </span></h2>
               </div>
              
             </div>
           }
         </div>
  );
};





export default Planets;