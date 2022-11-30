import './destaque.css';

function Destaque() {
    return (
        <div className='conteudo-principal'>
            <div>
                <h1>A melhor do Brasil</h1>
                <p>Hexa!! Pela quinta vezes consecutiva IceCream foi eleita a melhor sorveteria do Brasil typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s</p>
            </div>

            <div>
                <img className='sorveteria' src="imagens/sorveteria.jpg" alt="imagem de sorveteria" />
            </div>

        </div>
    )
}

export default Destaque;