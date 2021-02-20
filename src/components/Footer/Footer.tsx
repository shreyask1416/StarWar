import React from 'react';
import styles from './Footer.module.css';
import foologo from "../../StarWarDesign/Art Assets/footer_logo.png"
const Footer = () => {
return (
<div className={styles.Footer }>
<div className={styles.line2}>

</div>
<div className={styles.fooo}>
<h1>TERMS OF USE</h1>
    <h1>LEGAL NOTICES</h1>
    <h1>PRIVACY POLICY</h1>
    <h1>STAR WARS HELPDESK</h1>
    <h1>STAR WARS AT DISNEY STORE</h1>
</div>
<div className={styles.Foo}>
    <img src={foologo}></img>
    <p>TM & © Lucasfilm Ltd. All Rights Reserved</p>
</div>
</div>
);
};




export default Footer;