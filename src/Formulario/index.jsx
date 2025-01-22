import { useState } from "react";
import styles from './Formulario.module.css';

const Formulario = ({ onFormChange }) => {
    const [formRespostas, setFormRespostas] = useState({
        adulto: false,
        crianca: false,
        masculino: false,
        feminino: false,
        peso: "",
        altura: "",
    });

    const funcaoMarcadores = (evento) => {
        const { name, checked } = evento.target;

        if (name === "masculino") {
            setFormRespostas((retorno) => ({
                ...retorno,
                masculino: checked,
                feminino: !checked ? retorno.feminino : false,
            }));
        } else if (name === "feminino") {
            setFormRespostas((retorno) => ({
                ...retorno,
                feminino: checked,
                masculino: !checked ? retorno.masculino : false,
            }));
        } else if (name === "adulto") {
            setFormRespostas((retorno) => ({
                ...retorno,
                adulto: checked,
                crianca: !checked ? retorno.crianca : false,
            }));
        } else if (name === "crianca") {
            setFormRespostas((retorno) => ({
                ...retorno,
                crianca: checked,
                adulto: !checked ? retorno.adulto : false,
            }));
        }
    };

    const alteraInput = (evento) => {
        const { name, value } = evento.target;
        setFormRespostas((retorno) => ({
            ...retorno,
            [name]: Number(value),
        }));
    };

    const handleChange = () => {
        onFormChange(formRespostas);
    };

    return (
        <div className={styles.container}>
            <h2>Selecione</h2>
            <div className={styles.form}>
                <div className={styles.formItem}>
                    <label htmlFor="adulto">
                        <input type="checkbox" id="adulto" name="adulto" checked={formRespostas.adulto} onChange={funcaoMarcadores} /> {" "} Adulto
                    </label>

                    <label htmlFor="crianca">
                        <input type="checkbox" id="crianca" name="crianca" checked={formRespostas.crianca} onChange={funcaoMarcadores} /> {" "} Criança
                    </label>
                </div>

                <div className={styles.formItem}>
                    <label htmlFor="masculino">
                        <input type="checkbox" id="masculino" name="masculino" checked={formRespostas.masculino} onChange={funcaoMarcadores} /> {" "} Masculino
                    </label>

                    <label htmlFor="feminino">
                        <input type="checkbox" id="feminino" name="feminino" checked={formRespostas.feminino} onChange={funcaoMarcadores} /> {" "} Feminino
                    </label>
                </div>

                <div className={styles.formItem}>
                    <label htmlFor="peso">
                        Digite seu peso: {""} <input type="number" id="peso" name="peso" placeholder="Kg" value={formRespostas.peso} onChange={alteraInput} />
                    </label>
                </div>

                <div className={styles.formItem}>
                    <label htmlFor="altura">
                        Digite sua altura: {""} <input type="number" id="altura" name="altura" placeholder="Cm" value={formRespostas.altura} onChange={alteraInput} />
                    </label>
                </div>

                {handleChange()}
            </div>
        </div>
    );
};

export default Formulario;
