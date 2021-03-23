import React, { useEffect, useState } from 'react';
import styles from './FilmDetails.module.css';
import { useSpeciesContext } from "../../SpeciesContext";
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
const FilmDetails = ({ url }: any) => {
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
      console.log(shreya,"fetch");
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
    <div className={styles.FilmDetails}>
      <div className={styles.box} >
        <div className={styles.imgs} onClick={() => history.push("/Navbar/Films")} >
        
          <img src={img}></img></div>
          {allDetails &&
        <div className={styles.info}>
          <h1>{allDetails.title}</h1>
          <h2 className={styles.height}>Episode Id : <span className={styles.hei}>{allDetails.episode_id}</span></h2>
          <h2 className={styles.height}>Director : <span className={styles.hei}>{allDetails.director} </span></h2>
          <h2 className={styles.height}>Producer : <span className={styles.hei}> {allDetails.producer} </span></h2>
          <h2 className={styles.height}>Release Date : <span className={styles.hei}>{allDetails.release_date} </span></h2>
          <h2 className={styles.height}>Opening Crawl : <span className={styles.hei}> {allDetails.opening_crawl} </span></h2>

        </div>
       }
      </div>
    </div>
  );
};




export default FilmDetails;