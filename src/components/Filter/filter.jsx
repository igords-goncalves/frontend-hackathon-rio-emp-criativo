import styles from "./filter.scss";
import React, { useState } from "react";
import "./filter.scss";
import close from "../../images/close.svg";
import { Link } from "react-router-dom";

export default function Filter() {
    const [horario, setHorario] = useState("manha");
    const [segmento, setSegmento] = useState("teatro");
    const [valor, setValor] = useState("gratis");
    const [publicoAlvo, setPublicoAlvo] = useState("adultos");
    const [localidade, setLocalidade] = useState("barraDaTijuca");

    function handleHorarioChange(event) {
        setHorario(event.target.value);
    }

    function handleSegmentoChange(event) {
        setSegmento(event.target.value);
    }

    function handleValorChange(event) {
        setValor(event.target.value);
    }

    function handlePublicoAlvoChange(event) {
        setPublicoAlvo(event.target.value);
    }

    function handleLocalidadeChange(event) {
        setLocalidade(event.target.value);
    }

    function handleFiltro() {
        //lógica para aplicar os filtros selecionados aos dados relevantes
    }
    return (
        <div className="modal-wrapper">
            <div className="modal-title">
                <h2>Crie seu Circuito</h2>
                <Link to="/circuitos">
                    <img src={close} alt="Botão de fechar o modal." />
                </Link>
            </div>

            <div className="modal-options">
                <label>
                    Horário:
                    <select value={horario} onChange={handleHorarioChange}>
                        <option value="manha">Manhã</option>
                        <option value="tarde">Tarde</option>
                        <option value="noite">Noite</option>
                        <option value="madrugada">Madrugada</option>
                    </select>
                </label>
                <br />
                <label>
                    Segmento:
                    <select value={segmento} onChange={handleSegmentoChange}>
                        <option value="teatro">Teatro</option>
                        <option value="cinema">Cinema</option>
                        <option value="feira">Feira</option>
                        <option value="concertoMusical">
                            Concerto Musical
                        </option>
                        <option value="esportes">Esportes</option>
                    </select>
                </label>
                <br />
                <label>
                    Valor:
                    <select value={valor} onChange={handleValorChange}>
                        <option value="gratis">Grátis</option>
                        <option value="ate20">Até R$ 20,00</option>
                        <option value="ate50">Até R$ 50,00</option>
                        <option value="ate100">Até R$ 100,00</option>
                        <option value="acima100">Acima de R$ 100,00</option>
                    </select>
                </label>
                <br />
                <label>
                    Público Alvo:
                    <select
                        value={publicoAlvo}
                        onChange={handlePublicoAlvoChange}
                    >
                        <option value="criancas">Crianças</option>
                        <option value="jovens">Jovens</option>
                        <option value="adultos">Adultos</option>
                    </select>
                </label>
                <br />
                <label>
                    Localidade:
                    <select
                        value={localidade}
                        onChange={handleLocalidadeChange}
                    >
                        <option value="barraDaTijuca">Barra da Tijuca</option>
                        <option value="porto">Porto</option>
                        <option value="centroDoRio">Centro do Rio</option>
                    </select>
                </label>
            </div>

            <br />
            <Link to="/circuitos">
                <button onClick={handleFiltro}>Filtrar</button>
            </Link>
        </div>
    );
}
