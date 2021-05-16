import sonidoguitar1 from '../src/sounds/guitar/do.flac'
import sonidoguitar2 from '../src/sounds/guitar/re.flac'
import sonidoguitar3 from '../src/sounds/guitar/mi.flac'
import sonidoguitar4 from '../src/sounds/guitar/fa.flac'
import sonidoguitar5 from '../src/sounds/guitar/sol.flac'
import sonidoguitar6 from '../src/sounds/guitar/la.flac'
import sonidoguitar7 from '../src/sounds/guitar/si.flac'
import sonidoguitar8 from '../src/sounds/guitar/do.flac'

import sonidopiano1 from '../src/sounds/piano/do.wav'
import sonidopiano2 from '../src/sounds/piano/re.wav'
import sonidopiano3 from '../src/sounds/piano/mi.wav'
import sonidopiano4 from '../src/sounds/piano/fa.wav'
import sonidopiano5 from '../src/sounds/piano/sol.wav'
import sonidopiano6 from '../src/sounds/piano/la.wav'
import sonidopiano7 from '../src/sounds/piano/si.wav'
import sonidopiano8 from '../src/sounds/piano/do.wav'

const notas = [
    {
        "id": "Q",
        "name": "Q",
        "nombreNota": "Do",
        "sonido": [sonidoguitar1, sonidopiano1],
        "keyCode": 81
    },
    {
        "id": "W",
        "name": "W",
        "nombreNota": "Re",
        "sonido": [sonidoguitar2, sonidopiano2],
        "keyCode": 87
    },
    {
        "id": "E",
        "name": "E",
        "nombreNota": "Mi",
        "sonido": [sonidoguitar3, sonidopiano3],
        "keyCode": 69
    },
    {
        "id": "A",
        "name": "A",
        "nombreNota": "Fa",
        "sonido": [sonidoguitar4, sonidopiano4],
        "keyCode": 65
    },
    {
        "id": "S",
        "name": "S",
        "nombreNota": "Sol",
        "sonido": [sonidoguitar5, sonidopiano5],
        "keyCode": 83
    },
    {
        "id": "D",
        "name": "D",
        "nombreNota": "La",
        "sonido": [sonidoguitar6, sonidopiano6],
        "keyCode": 68
    },
    {
        "id": "Z",
        "name": "Z",
        "nombreNota": "Si",
        "sonido": [sonidoguitar7, sonidopiano7],
        "keyCode": 90
    },
    {
        "id": "X",
        "name": "X",
        "nombreNota": "Do2",
        "sonido": [sonidoguitar8, sonidopiano8],
        "keyCode": 88
    }, {
        "id": "C",
        "name": "C",
        "nombreNota": "Re2",
        "sonido": [sonidoguitar2, sonidopiano2],
        "keyCode": 67
    }
]

export default notas