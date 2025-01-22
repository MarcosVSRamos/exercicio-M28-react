import { useState } from "react";
import Header from './Header';
import Formulario from './Formulario';
import Calculadora from './Calculadora';

const App = () => {
    const [dadosFormulario, setDadosFormulario] = useState({
        peso: 0,
        altura: 0,
        sexo: "",
        idade: "",
    });

    const handleFormChange = (novosDados) => {
        setDadosFormulario(novosDados);
    };

    return (
        <div>
            <Header />
            <Formulario onFormChange={handleFormChange} />
            <Calculadora {...dadosFormulario} />
        </div>
    );
};

export default App;
