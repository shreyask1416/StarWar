import React,{useState,useEffect} from 'react';
import { useSpeciesContext} from "../../SpeciesContext";
import styles from './PlanetDetails.module.css';
import {useHistory,useParams} from "react-router-dom"
import axios from "axios";
const PlanetDetails = ({url}:any) => {
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
<div className={styles.PlanetDetails }>
<div className={styles.box} >
               <div className={styles.imgs} onClick={()=>history.push("/Navbar/Planets") }>
               <img src={img}></img></div>
               {allDetails && 
               <div className={styles.info}>
                 <h1>{allDetails.name} </h1>
                 <h2 className={styles.height}>Rotation Period : <span className={styles.hei}>{allDetails.rotation_period} </span></h2>
                 <h2 className={styles.height}>Orbital Period : <span className={styles.hei}>{allDetails.orbital_period}</span></h2>
                 <h2 className={styles.height}>Diameter : <span className={styles.hei}>{allDetails.diameter} </span></h2>
                 <h2 className={styles.height}>Climate : <span className={styles.hei}>{allDetails.climate} </span></h2>
                 <h2 className={styles.height}>Gravity : <span className={styles.hei}> {allDetails.gravity} </span></h2>
                 <h2 className={styles.height}>Terrain : <span className={styles.hei}>{allDetails.terrain} </span></h2>
                 <h2 className={styles.height}>Surface Water : <span className={styles.hei}> {allDetails.surface_water} </span></h2>
                 <h2 className={styles.height}>Population : <span className={styles.hei}> {allDetails.population} </span></h2>
               </div>
              }
             </div>
</div>
);
};




export default PlanetDetails;