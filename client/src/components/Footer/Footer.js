import React from 'react';
import logo from "../../assets/AppImages/ShopImage/logo.png"
import styles from "./Footer.module.css"
import headerStyles from "../NavBar/NavBar.module.css"

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer__top}><h3 className={headerStyles.headerBottomText}>Ritter & Partners
                corp.</h3></div>
            <div className={styles.footer__box}>
                <div className={headerStyles.container}>
                    <div className={styles.footer__bottom}>
                        <a href="tel:+79999009090"
                           className={headerStyles.headerLink + ' ' + styles.footer_link}>+7(999)-900-90-90</a>
                        <div className="header__logo">
                            <img className={headerStyles.logoImg + ' ' + styles.footerLogoImg} src={logo} alt="Ritter"/>
                        </div>
                        <a href="mailto:Retter&Partners@mail.com"
                           className={headerStyles.headerLink + ' ' + styles.footer_link}>Ritter&Partners@mail.com</a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;