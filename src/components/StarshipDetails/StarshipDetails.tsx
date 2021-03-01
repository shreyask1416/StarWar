import React,{useState,useEffect} from 'react';
import styles from './StarshipDetails.module.css';
import {useHistory,useParams} from "react-router-dom";
import {useSpeciesContext} from "../../SpeciesContext";
import axios from "axios";
const StarshipDetails = ({url}:any) => {
  let history = useHistory();
  const { id }: any = useParams();
  const {allDetails,setAllDetails} = useSpeciesContext();
  const [img, setImg] = useState<any>();
  const getImage = () => {
    if (sessionStorage.getItem(`${id}imgs`)) {
      setImg(sessionStorage.getItem(`${id}imgs`) || '{}')
      console.log("exists");
    }
    else {
      const url = "https://picsum.photos/200/300/?random&cb=" + (+new Date()) + "";
      setImg(url);
      sessionStorage.setItem(`${id}imgs`, url);
      console.log("fetch");
    }
  }
  useEffect(() => {
    getImage();
  }, [id]);
  const getDetails = () => {
    const newUrl = `${url}${id}`;
    console.log(newUrl,"check");
   
    if (sessionStorage.getItem(`details${newUrl}`)) {
      setAllDetails(JSON.parse(sessionStorage.getItem(`details${newUrl}`) || '{}'))

    }
    else {
      axios
        .get(newUrl)
        .then((response) => {
          console.log(response, "urlDetails");
          setAllDetails(response.data);
          console.log(response.data,"shreya");
          sessionStorage.setItem(`details${newUrl}`, JSON.stringify(response.data));
         
        })
        .catch((error) => {
          console.log(error);
        });
    };
  }


  useEffect(() => {
    getDetails();
    console.log("hello")
  }, [])
return (
<div className={styles.StarshipDetails }>
<div className={styles.box} >
               <div className={styles.imgs} onClick={()=>history.push("/Navbar/Starships")}>
               <img src={img}></img></div>
               {allDetails && 
               <div className={styles.info}>
                 <h1>{allDetails.name} </h1>
                 <h2 className={styles.height}>Model : <span className={styles.hei}> {allDetails.model} </span></h2>
                 {/* <h2 className={styles.height}>Manufacturer: <span className={styles.hei}> {allDetails.manufacturer} </span></h2> */}
                 <h2 className={styles.height}>Cost in Credits : <span className={styles.hei}>{allDetails.cost_in_credits} </span></h2>
                 <h2 className={styles.height}>Length : <span className={styles.hei}> {allDetails.length}</span></h2>
                 <h2 className={styles.height}>Crew : <span className={styles.hei}> {allDetails.crew}</span></h2>
                 <h2 className={styles.height}>Max atmosphering speed : <span className={styles.hei}> {allDetails.max_atmosphering_speed} </span></h2>
                 <h2 className={styles.height}>Passengers : <span className={styles.hei}> {allDetails.passengers} </span></h2>
                 <h2 className={styles.height}>Cargo Capacity : <span className={styles.hei}> {allDetails.cargo_capacity}</span></h2>
                 <h2 className={styles.height}>Consumables : <span className={styles.hei}> {allDetails.consumables} </span></h2>
                 <h2 className={styles.height}>Hyperdrive Rating : <span className={styles.hei}> {allDetails.hyperdrive_rating} </span></h2>
                 <h2 className={styles.height}>MGLT : <span className={styles.hei}>{allDetails.MGLT} </span></h2>
                 <h2 className={styles.height}>Starship class: <span className={styles.hei}> {allDetails.starship_class}</span></h2>
               </div>
              }
             </div>
</div>
);
};




export default StarshipDetails;