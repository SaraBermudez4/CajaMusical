import { Container, Heading } from '@chakra-ui/layout'
import { Grid } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
import React, { Component } from 'react'
import styled from 'styled-components'

import notas from '../bdNotas'

import FormCaja from '../components/FormCaja'

localStorage.setItem('notaMusical', "do")
localStorage.setItem('volumen', 0.3)

const StyledContainer = styled(Container)`
    max-width: 135ch !important;
    width:90%;
    padding: 5%;
    padding-bottom: 2%;
    border-radius: 15px;
`

const StyledGrid = styled(Grid)`
    background: #2b2e3acc;
    padding: 2%;
    border-radius: 15px;
`

const StyledBox = styled(Button)`
    
    box-shadow: black 3px 3px 5px;
    height: 170px !important;
    margin-right: 10px;
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;
    text-align: center;
    font-size: 30px !important;
    &:active{
        background-color: #5bb7ec !important;
    }
`

class Caja extends Component {
    constructor() {
        super()
        this.state = {
            nota: null,
            instrumento: 0,
            volumen: 0.3,
            encendido: false,
            nombreNota: ""
        }
        this.handleClickSonar = this.handleClickSonar.bind(this);
    }

    handleClickSonar(i, n) {
        this.setState({
            nota: localStorage.getItem('notaMusical'),
            nombreNota: n
        })
        this.cargarSonido(localStorage.getItem("notaMusical"), i);
    }

    cargarSonido = (fuente, i) => {
        var sonido = document.getElementById(i).getElementsByClassName('clip');
        //sonido[i].src = fuente
        sonido[i].muted = this.state.encendido
        sonido[i].volume = this.state.volumen
        sonido[i].play()
    }

    handleChangecambiarVolumen = ({ target }) => {
        localStorage.setItem("volumen", target.value)
        this.setState({
            volumen: parseFloat(localStorage.getItem('volumen'))
        })
    }

    handleClickCambiarInstrumento = (e, i) => {
        this.setState({
            instrumento: i
        })
    }

    handleChangePower = () => {
        this.setState({
            encendido: JSON.parse(localStorage.getItem('encendido')),
        })
    }

    handleKeyDown = (event) => {
        var ESCAPE_KEY = 0;
        notas.map(nota => {
            ESCAPE_KEY = nota.keyCode
            switch (event.keyCode) {
                case ESCAPE_KEY:
                    var element = document.getElementById(`${nota.id}`)
                    element.click()
                    var element2 = document.getElementById(`${nota.id}`).style.backgroundColor
                    if (element2 === "rgb(237, 242, 247)") {
                        document.getElementById(`${nota.id}`).style.backgroundColor = 'rgb(91, 183, 236)';
                    } else {
                        document.getElementById(`${nota.id}`).style.backgroundColor = '#edf2f7';
                    }
                    break;
                default:
                    break;
            }
        })
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    render() {
        return (
            <StyledContainer id="drum-machine" >
                <Heading textAlign="center" mb="9">Caja de ritmos</Heading>
                <FormCaja estado={this.state.encendido} cambiarEstado={this.handleChangePower} onChange={this.handleChangecambiarVolumen} onClick={this.handleClickCambiarInstrumento} nombre={this.state.nombreNota} />
                <StyledGrid templateColumns="repeat(9, 1fr)" gap={6} onKeyPress={this.handleKeyPress}>
                    {notas.map(nota => {
                        return (
                            <StyledBox key={nota.id} id={nota.id} className="drum-pad" onClick={() => {
                                /* eslint-disable-next-line */
                                localStorage.setItem('notaMusical', nota.sonido[this.state.instrumento]),
                                    /*eslint-enable-next-line */
                                    this.handleClickSonar(nota.id, nota.nombreNota)
                            }} >{nota.name}
                                <audio id={nota.id} src={nota.sonido[this.state.instrumento]} className="clip" />
                            </StyledBox>
                        )
                    })}
                </StyledGrid>
            </StyledContainer>
        )
    }
}

export default Caja