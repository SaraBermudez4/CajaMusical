import React from 'react'
import notas from '../bdNotas'
import styled from 'styled-components'
import { Box, Center } from '@chakra-ui/layout'

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
    width:100px;
`

const Nota = (porps) => {
    return (
        <>
            {notas.map(nota => {
                return (
                    <StyledBox id={nota.id} onClick={
                        localStorage.setItem('notaMusical', `${nota.sonido[0]}`), this.handleClickSonar
                    }>{nota.name}</StyledBox>
                )
            })}
        </>
    )
}

export default Nota
