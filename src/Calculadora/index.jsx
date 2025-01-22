import { useState } from "react";
import styles from './Calculadora.module.css';

const Calculadora = ({ peso, altura, sexo, idade }) => {
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState("");

    const calculaIMC = () => {
        if (peso > 0 && altura > 0) {
            const alturaEmMetros = altura / 100;
            const imcCalculado = peso / (alturaEmMetros * alturaEmMetros);
            setImc(imcCalculado.toFixed(2));
            classificaIMC(imcCalculado);
        } else {
            setImc(null);
            setClassificacao("");
        }
    };

    const classificaIMC = (valorImc) => {
        if (valorImc < 18.5) {
            setClassificacao("magreza");
        } else if (valorImc >= 18.5 && valorImc <= 24.9) {
            setClassificacao("normal");
        } else if (valorImc >= 25 && valorImc <= 29.9) {
            setClassificacao("sobrepeso");
        } else if (valorImc >= 30 && valorImc <= 39.9) {
            setClassificacao("obesidade");
        } else if (valorImc >= 40) {
            setClassificacao("obesidadeGrave");
        }
    };

    return (
        <div className={styles.calculadora}>
            <button type="button" className={styles.botaoCalcular} onClick={calculaIMC}>Calcular</button>

            {imc && (
                <h3 id="resultado">O seu IMC é: <span className={styles.imcValor}>{imc}</span></h3>
            )}

            {imc && (
                <div className={styles.tabelaImc}>
                    <ul>
                        <li className={styles.imcClass}>
                            <p>IMC</p>
                            <p>Classificação</p>
                            <p>Grau de obesidade</p>
                        </li>
                        <li className={`${styles.imcClass} ${classificacao === "magreza" ? styles.destaque : ""}`}>
                            <p>Menor que <b>18,5</b></p>
                            <p>Magreza</p>
                            <p>0</p>
                        </li>
                        <li className={`${styles.imcClass} ${classificacao === "normal" ? styles.destaque : ""}`}>
                            <p>Entre <b>18,5 e 24,9</b></p>
                            <p>Normal</p>
                            <p>0</p>
                        </li>
                        <li className={`${styles.imcClass} ${classificacao === "sobrepeso" ? styles.destaque : ""}`}>
                            <p>Entre <b>25,0 e 29,9</b></p>
                            <p>Sobrepeso</p>
                            <p>I</p>
                        </li>
                        <li className={`${styles.imcClass} ${classificacao === "obesidade" ? styles.destaque : ""}`}>
                            <p>Entre <b>30,0 e 39,9</b></p>
                            <p>Obesidade</p>
                            <p>II</p>
                        </li>
                        <li className={`${styles.imcClass} ${classificacao === "obesidadeGrave" ? styles.destaque : ""}`}>
                            <p>Maior que <b>40,0</b></p>
                            <p>Obesidade Grave</p>
                            <p>III</p>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Calculadora;
