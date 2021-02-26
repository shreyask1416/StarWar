import React,{useState} from 'react';
import {useSpeciesContext} from "../../SpeciesContext";
import styles from './VehicleDetails.module.css';
import {useHistory} from "react-router-dom"
const VehicleDetails = ()=> {
    let history=useHistory();
    const {name,classs,designation,lang,consumables,drive,height,haircolor,eyecolr,skinclr,birthyear}=useSpeciesContext();
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
<div className={styles.VehicleDetailsTsx }>
<div className={styles.box} >
               <div className={styles.imgs} onClick={()=>history.push("/Navbar/Vehicles")}>
               <img src={img}></img></div>
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
</div>
);
};




export default VehicleDetails;