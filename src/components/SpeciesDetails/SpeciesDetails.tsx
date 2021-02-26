import React,{useState} from 'react';
import styles from './SpeciesDetails.module.css';
import { useSpeciesContext} from "../../SpeciesContext";

const SpeciesDetails = () => {
    const {name,classs,designation,height,haircolor,eyecolr,skinclr,birthyear,lang}=useSpeciesContext();
    const [img,setImg]=useState<any>();
    const getImage=()=>{
      if(sessionStorage.getItem(`${name}imgs`)){
         setImg(sessionStorage.getItem(`${name}imgs`)||'{}')
      }
      else{
      const url="https://picsum.photos/200/300/?random&cb=" + (+new Date()) + "";
      setImg(url);
      sessionStorage.setItem(`${name}imgs`,url);
      }
    }
    React.useEffect(() => {
      getImage();
    }, [name]);
return (
<div className={styles.SpeciesDetails }>
<div className={styles.box} >
                 <div className={styles.imgs}>
                 <img src={img}></img></div>
                 <div className={styles.info}>
                   <h1>{name} </h1>
                   <h2 className={styles.height}>Classification : <span className={styles.hei}> {classs} </span></h2>
                   <h2 className={styles.height}>Designation : <span className={styles.hei}>{designation} </span></h2>
                   <h2 className={styles.height}>Avg Height : <span className={styles.hei}> {height} </span></h2>
                   <h2 className={styles.height}>Hair Color : <span className={styles.hei}>{haircolor} </span></h2>
                   <h2 className={styles.height}>Eye color : <span className={styles.hei}> {eyecolr} </span></h2>
                   <h2 className={styles.height}>Skin Color : <span className={styles.hei}> {skinclr} </span></h2>
                   <h2 className={styles.height}>Avg Lifespan : <span className={styles.hei}> {birthyear} </span></h2>
                   <h2 className={styles.height}>Language : <span className={styles.hei}> {lang} </span></h2>
                 </div>
                
               </div>
</div>
);
};




export default SpeciesDetails;