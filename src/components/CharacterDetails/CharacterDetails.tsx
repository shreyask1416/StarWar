import React,{useState,useEffect} from 'react';
import { useSpeciesContext} from "../../SpeciesContext";
import styles from './CharacterDetails.module.css';
import {useHistory,useParams} from 'react-router-dom';
import axios from "axios";
const CharacterDetails = ({url}:any)=> {
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
<div className={styles.CharacterDetails }>
<div className={styles.box} >
          <div className={styles.imgs} onClick={()=> history.push('/Navbar/Characters')}>
          <img src={img}></img></div>
          {allDetails &&
          <div className={styles.info}>
            <h1>{allDetails.name}</h1>
            <h2 className={styles.height}>Height : <span className={styles.hei}> {allDetails.height}</span></h2>
            <h2 className={styles.height}>Gender : <span className={styles.hei}> {allDetails.gender}</span></h2>
            <h2 className={styles.height}>Mass : <span className={styles.hei}>{allDetails.mass} </span></h2>
            <h2 className={styles.height}>Hair Color : <span className={styles.hei}> {allDetails.hair_color}</span></h2>
            <h2 className={styles.height}>Eye color : <span className={styles.hei}> {allDetails.eye_color} </span></h2>
            <h2 className={styles.height}>Skin Color : <span className={styles.hei}> {allDetails.skin_color}</span></h2>
            <h2 className={styles.height}>Birth Year : <span className={styles.hei}>{allDetails.birth_year}</span></h2>
          </div>
         }
        </div>
</div>
);
};




export default CharacterDetails;