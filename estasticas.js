const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
--------------------------------------------------------------------------

pecas

(bracos: {-}, blindagens: {-}, nucleos:{-}, pernas: {-}, foguetes{-})
------------------------------------------------------------------------------
pecas.bracos
    {forca: 29, poder: 35, energia: -21, velocidade: -5}
        "energia": -21,
        "forca": 29,
        "poder": 35,
        "velocidade": -5
            [[Prototype]]: Objetc


--------------------------------------------------------------------
pecas.braco.energia
-21

------------------------------------------------------------------
pecas["bracos"]
    {forca: 29, poder: 35, energia: -21, velocidade: -5}

------------------------------------------------------------------------
<section class="box estatistica">
    <div class="estatistica">
        <p class="estatistica-titulo">Força</p>
        <div class="estatistica-valor"
            <p class="estatistica-numero" data-estatistica="forca">768</p>
        </div>
    </div>
    <div class="estatistica"
        <p class="estatistica-titulo">Poder</p>
        <div class="estatistica-valor"
            <p class="estatistica-numero" data-estatistica="poder">630</p>
        </div>
    </div>
    <div class="estatistica"
        <p class="estatistica-titulo">Energia</p>
        <div class="estatistica-valor"
            <p class="estatistica-numero" data-estatistica="energia">286</p>
        </div>
    </div>
    <div class="estatistica"
        <p class="estatistica-titulo">Velocidade</p>
        <div class="estatistica-valor"
            <p class="estatistica-numero" data-estatistica="velocidade">597</p>
        </div>
    </div>
<section>

