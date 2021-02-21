import React,{useState} from "react";
import styles from "./Vehicles.module.css";
import strship from "../../StarWarDesign/Art Assets/Topics/strship.png";
const Vehicles = () => {
  
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
  const [consumables,setConsumables]=React.useState();
  const [drive,setDrive]=React.useState();
  const [mglt,setMglt]=React.useState();
  const [sclass,setSclass]=React.useState();
  
  const getCharcter = async () => {
    setLoading(true);
    await fetch(`https://swapi.dev/api/vehicles/`)
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
      <div className={styles.Vehicles}>
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
                  setClasss(item.model);
                  setDesignation(item.manufacturer);
                  setHeight(item.cost_in_credits);
                  setHaircolor(item.length);
                  setEyecolr(item.max_atmosphering_speed);
                  setSkinclr(item.crew);
                  setBirthYear(item.passengers);
                  setLang(item.cargo_capacity);
                  setConsumables(item.consumables);
                  setDrive(item.vehicle_class);
                  
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
               <img src={strship}></img></div>
               <div className={styles.info}>
                 <h1>{name} </h1>
                 <h2 className={styles.height}>Model : <span className={styles.hei}> {classs} </span></h2>
                 <h2 className={styles.height}>Manufacturer: <span className={styles.hei}>{designation} </span></h2>
                 <h2 className={styles.height}>Cost in Credits : <span className={styles.hei}> {height} </span></h2>
                 <h2 className={styles.height}>Length : <span className={styles.hei}>{haircolor} </span></h2>
                 <h2 className={styles.height}>Max atmosphering speed  : <span className={styles.hei}> {eyecolr} </span></h2>
                 <h2 className={styles.height}> Crew: <span className={styles.hei}> {skinclr} </span></h2>
                 <h2 className={styles.height}>Passengers : <span className={styles.hei}> {birthyear} </span></h2>
                 <h2 className={styles.height}>Cargo Capacity : <span className={styles.hei}> {lang} </span></h2>
                 <h2 className={styles.height}>Consumables : <span className={styles.hei}> {consumables} </span></h2>
                 <h2 className={styles.height}>Vehicle Class : <span className={styles.hei}> {drive} </span></h2>
                 
               </div>
              
             </div>
           }
         </div>
  );
};





export default Vehicles;