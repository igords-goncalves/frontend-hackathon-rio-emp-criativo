import React from 'react';
import Button from '../../components/Button/button';
import backgroundImg from "../../images/telaLogin.png"
import styles from './telaLogin.module.scss';
import { Link } from "react-router-dom"

export default function TelaLogin() {
    return (
        <div style={{ backgroundImage: `url(${backgroundImg})` }} className={styles.div}>
            <div className={styles.div_botao}>
                <h1>Hackathon</h1>
                <p>Busque eventos de entretenimento arte, cultura, teatro e música!</p>
                <Link to="/loginAccess"><Button textButton="Login" /></Link>
                <Link to="/loginRegister"><Button textButton="Criar Conta" /></Link>
            </div>
        </div>
    );
}

