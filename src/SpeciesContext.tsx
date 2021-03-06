import React, { createContext, useContext, useState, useEffect, Children } from "react";
export const SpeciesContext = React.createContext<any>({});
export const SpeciesProvider = ({ children }: any) => {
  const [name, setName] = useState()
  const [designation, setDesignation] = useState()
  const [height, setHeight] = useState()
  const [haircolor, setHaircolor] = useState()
  const [skinclr, setSkinclr] = useState()
  const [eyecolr, setEyecolr] = useState()
  const [birthyear, setBirthYear] = useState()
  const [classs, setClasss] = React.useState();
  const [lang, setLang] = React.useState();
  const [title, setTitle] = React.useState();
  const [epId, setEpId] = React.useState();
  const [director, setDirector] = React.useState();
  const [producer, setProducer] = React.useState();
  const [releaseDate, setReleaseDate] = React.useState();
  const [opening, setOpening] = React.useState();
  const [gender, setGender] = useState();
  const [mass, setMass] = useState();
  const [consumables, setConsumables] = React.useState();
  const [drive, setDrive] = React.useState();
  const [mglt, setMglt] = React.useState();
  const [sclass, setSclass] = React.useState();
  const [allDetails, setAllDetails]=useState();
  return <SpeciesContext.Provider value={{
    name,
    setName,
    designation,
    setDesignation,
    height,
    setHeight,
    haircolor,
    setHaircolor,
    skinclr,
    setSkinclr,
    eyecolr,
    setEyecolr,
    birthyear,
    setBirthYear,
    classs,
    setClasss,
    lang,
    setLang,
    title,
    setTitle,
    epId,
    setEpId,
    director,
    setDirector,
    producer,
    setProducer,
    releaseDate,
    setReleaseDate,
    opening,
    setOpening,
    gender,
    setGender,
    mass,
    setMass,
    consumables,
    setConsumables,
    drive,setDrive,
    mglt,setMglt,
    sclass,setSclass,allDetails,setAllDetails
  }}
  >
    {children}
  </SpeciesContext.Provider>
};
export const useSpeciesContext = () => {
  return useContext(SpeciesContext);

};