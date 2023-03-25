import styles from "./filter.module.scss";
import React, { useState } from "react";
import "./filter.module.scss";




export default function Filter(){
    const [horario, setHorario] = useState('manha');
    const [segmento, setSegmento] = useState('teatro');
    const [valor, setValor] = useState('gratis');
    const [publicoAlvo, setPublicoAlvo] = useState('adultos');
    const [localidade, setLocalidade] = useState('barraDaTijuca');
    
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
        <div>
            <h2>Filtros</h2>
            <label>
                Horário:
                <select value={horario} onChange={handleHorarioChange}>
                    
                </select>
            </label>
            <br />
            <label>
                Segmento:
                <select value={segmento} onChange={handleSegmentoChange}>
                    
                </select>
            </label>
            <br />
            <label>
                Valor:
                <select value={valor} onChange={handleValorChange}>
                    
                </select>
            </label>
            <br />
            <label>
                Público Alvo:
                <select value={publicoAlvo} onChange={handlePublicoAlvoChange}>
                   
                </select>
            </label>
            <br />
            <label>
                Localidade:
                <select value={localidade} onChange={handleLocalidadeChange}>
                    
                </select>
            </label>
            <br />
           
        </div>
    )
}