import whats from './styles/images/contato.png'
import tel from './styles/images/telefone ligação.png'
import './styles/contato.css'

function Contato (){
    return(
      <>
    <div className='whatsapp'>
        <a href="https://wa.me//5541985163602?text=Olá tudo bem?
        Tenho interesse em fazer um orçamento.">
            <img src={whats} alt='whatsapp'></img>
            
            
        </a> 

    </div>
    <div className='telefone'>
                <a href="tel:+554133328000">
                    <img src={tel} alt='telefone'></img>

                    
                </a>
            </div>

     </>

    )
}


export default Contato