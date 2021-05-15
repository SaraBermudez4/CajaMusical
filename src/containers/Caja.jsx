import { Box, Center, Container } from '@chakra-ui/layout'
import { Grid } from '@chakra-ui/layout'
import { Button, ChakraProvider, Switch, Row, Col, FormControl, FormLabel } from '@chakra-ui/react'
import React, { Component } from 'react'
import styled from 'styled-components'
import { Form } from "react-bootstrap";

/*import sonido1 from '../sounds/guitar/do.flac'
import sonido2 from '../sounds/guitar/re.flac'
import sonido3 from '../sounds/guitar/mi.flac'
import sonido4 from '../sounds/guitar/fa.flac'
import sonido5 from '../sounds/guitar/sol.flac'
import sonido6 from '../sounds/guitar/la.flac'
import sonido7 from '../sounds/guitar/si.flac'
import sonido8 from '../sounds/guitar/do.flac'*/

//import Nota from "../components/Nota";
import notas from '../bdNotas'
localStorage.setItem('notaMusical', "do")
localStorage.setItem('volumen', 0)

const StyledBox = styled(Box)`
    background-color: #89ec5b;
    box-shadow: black 3px 3px 5px;
    height: 80px;
    margin-right: 10px;
    border-radius: 5px;
    padding-top: 35px;
    box-sizing: border-box;
    cursor: pointer;
    text-align: center;
    //width:100px;
    &:active{
        background-color: #5bb7ec;
    }
`
const StyledGrid = styled(Grid)`
    background: #89ec5b;
    padding: 5%;
    border-radius: 15px;
    //width:108%;
`
const StyledContainer = styled(Container)`
    background:pink;
    width:90%;
    padding: 5%;
`

class Caja extends Component {

    constructor() {
        super()
        this.state = {
            nota: null,
            instrumento: 0,
            volumen: 0.8,
            encendido: false
        }
        this.handleClickSonar = this.handleClickSonar.bind(this);
    }
    fetchNotaData = () => {
        this.setState({
            nota: localStorage.getItem('notaMusical')
        })
    }

    cargarSonido = (fuente) => {
        var sonido = document.createElement("audio")
        sonido.src = fuente
        sonido.style.display = "none"
        sonido.muted = this.state.encendido
        sonido.play()
        //sonido.setAttribute("controls", "true");
        sonido.volume = this.state.volumen
    }

    cambiarVolumen = ({ target }) => {
        localStorage.setItem("volumen", target.value)
        this.setState({
            volumen: parseFloat(localStorage.getItem('volumen'))
        })
    }

    handleClickSonar() {
        this.fetchNotaData()
        this.cargarSonido(localStorage.getItem("notaMusical"));
    }

    render() {
        return (
            <ChakraProvider>
                <Center>
                    <StyledContainer>
                        <Form>
                            <Form.Group controlId="formBasicRangeCustom" >
                                <FormControl display="flex" alignItems="center" justifyContent="center">
                                    <FormLabel htmlFor="email-alerts" mb="0">
                                        On / Of
                                    </FormLabel>
                                    <Switch colorScheme="teal" size="lg" defaultChecked onChange={() => {
                                        this.setState({
                                            encendido: !this.state.encendido,
                                        })
                                    }} />
                                    <Button marginRight="3%" marginLeft="3%" marginBottom="5%" onClick={() => {
                                        this.setState({
                                            instrumento: 0
                                        })
                                    }}>
                                        Cambiar a guitarra
                                    </Button >
                                    <Button marginBottom="5%" marginRight="3%" onClick={() => {
                                        this.setState({
                                            instrumento: 1
                                        })
                                    }}>
                                        Cambiar a piano
                                    </Button>
                                </FormControl>
                                <Form.Label>Volumen</Form.Label>
                                <Form.Control type="range" min="0" max="1" step="0.01" onChange={this.cambiarVolumen} custom />
                            </Form.Group>
                        </Form>
                        <StyledGrid templateColumns="repeat(3, 1fr)" gap={6}>
                            {notas.map(nota => {
                                return (
                                    <StyledBox key={nota.id} id={nota.id} onClick={() => {
                                        /* eslint-disable-next-line */
                                        localStorage.setItem('notaMusical', nota.sonido[this.state.instrumento]),
                                            /*eslint-enable-next-line */
                                            this.handleClickSonar()
                                    }}>{nota.name}
                                    </StyledBox>
                                )
                            })}
                            <Box>:)</Box>
                        </StyledGrid>
                    </StyledContainer>
                </Center>
            </ChakraProvider>
        )
    }
}

export default Caja
/*
<StyledBox id={nota.id} onClick={() => {
                                    localStorage.setItem('notaMusical', `${nota.sonido[1]}`)
                                    this.handleClickSonar
                                }} >{nota.name}</StyledBox>


<StyledBox onClick={sonarRe}>Re</StyledBox>
<StyledBox onClick={sonarMi}>Mi</StyledBox>
<StyledBox onClick={sonarFa}>Fa</StyledBox>
<StyledBox onClick={sonarSol}>Sol</StyledBox>
<StyledBox onClick={sonarLa}>La</StyledBox>
<StyledBox onClick={sonarSi}>Si</StyledBox>
<StyledBox onClick={sonarDo2}>Do</StyledBox>*/