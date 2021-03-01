import React,{useState,useEffect} from 'react';
import styles from './SpeciesDetails.module.css';
import { useSpeciesContext} from "../../SpeciesContext";
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
const SpeciesDetails = ({url}:any) => {
  
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
<div className={styles.SpeciesDetails } onClick={()=>history.push("/Navbar/Species") } >
<div className={styles.box} >
                 <div className={styles.imgs}>
                 <img src={img}></img></div>
                 {allDetails && 
                 <div className={styles.info}>
                  
                   <h1>{allDetails.name} </h1>
                   <h2 className={styles.height}>Classification : <span className={styles.hei}> {allDetails.classification} </span></h2>
                   <h2 className={styles.height}>Designation : <span className={styles.hei}>{allDetails.designation} </span></h2>
                   <h2 className={styles.height}>Avg Height : <span className={styles.hei}>{allDetails.average_height} </span></h2>
                   <h2 className={styles.height}>Hair Color : <span className={styles.hei}> {allDetails.hair_colors}</span></h2>
                   <h2 className={styles.height}>Eye color : <span className={styles.hei}> {allDetails.eye_colors} </span></h2>
                   <h2 className={styles.height}>Skin Color : <span className={styles.hei}>{allDetails.skin_colors} </span></h2>
                   <h2 className={styles.height}>Avg Lifespan : <span className={styles.hei}>{allDetails.average_lifespan} </span></h2>
                   <h2 className={styles.height}>Language : <span className={styles.hei}>{allDetails.language} </span></h2>
                 </div>
                 }
               </div>
</div>
);
};




export default SpeciesDetails;