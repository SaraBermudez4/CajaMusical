import React from 'react'
import { Form } from "react-bootstrap";
import { Button, Switch, FormLabel, Text, Grid, GridItem } from '@chakra-ui/react'
import styled from 'styled-components'

const StyledForm = styled(Form)`
    background: #545b62;
    padding: 2%;
    border-radius: 15px;
    margin-bottom: 15px;
`

const StyledGridItem = styled(GridItem)`
    padding-right:5%;
    padding-left:5%;
    border-radius:5%;
    text-align:center;
`

const StyledText = styled(Text)`
    font-size :40px;
    color: black;
    text-align: center;
    padding-top: 0px !important; 
`

const StyledButton = styled(Button)`
    width: 70%; 
    height:110%; 
    font-size :23px !important;
    padding: 8%;
    &:active{
        background-color: #5bb7ec !important;
    }

     @media screen and (max-width: 480px) {
        width: 155% !important;
        height: 90% !important;
    }
`

const StyledFormLabel = styled(FormLabel)`
    font-size :23px !important;
`

const StyledGrid = styled(Grid)`
     @media screen and (max-width: 480px) {
        grid-template-rows: repeat(3, 1fr) !important;
        grid-template-columns: repeat(4, 4fr) !important;
        height :270px !important;       
}
`

function FormCaja(props) {
    return (
        <StyledForm id="display">
            <StyledGrid
                h="150px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={4}>
                <StyledGridItem rowSpan={2} textAlign="left" color="white">
                    <StyledFormLabel htmlFor="email-alerts" mb="0" >
                        On / Of
                    </StyledFormLabel>
                    <Switch colorScheme="linkedin" size="lg" defaultChecked onChange={() => {
                        localStorage.setItem('encendido', `${!props.estado}`)
                        props.cambiarEstado()
                    }} />
                    <StyledFormLabel>Volumen</StyledFormLabel>
                    <Form.Control type="range" min="0" max="1" step="0.01" onChange={(target) => { props.onChange(target) }} defaultValue="0.3" custom />
                </StyledGridItem>
                <StyledGridItem colSpan={2} >
                    <StyledButton onClick={(e) => {
                        props.onClick(e, 0)
                    }}>
                        Guitarra
                    </StyledButton >
                </StyledGridItem>
                <StyledGridItem colSpan={2} >
                    <StyledButton onClick={(e) => {
                        props.onClick(e, 1)
                    }}>
                        Piano
                    </StyledButton>
                </StyledGridItem>
                <StyledGridItem colSpan={4} bg="#808080">
                    <StyledText isTruncated>
                        {props.nombre}
                    </StyledText>
                </StyledGridItem>
            </StyledGrid>
        </StyledForm>
    )
}

export default FormCaja
