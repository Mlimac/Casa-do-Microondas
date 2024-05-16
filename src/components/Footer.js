import React from 'react';
import fb from './styles/images/facebook icone.png'; // Certifique-se de que o caminho para a imagem está correto
import ig from './styles/images/Instagram logo.png'
import './styles/footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="rodape">
                    <div className="info">
                        <h3>Casa do Microondas</h3>
                        <p>Criado pela equipe 7</p>
                    </div>
                </div>
            </div>
            <div className="copyright">
                &copy; 2024 Todos os Direitos Reservados - Casa do Microondas
            </div>
            

            <div className="social-container">
                <a href="https://www.facebook.com/felipe.dolberth/" className="social-button facebook-button" target="_blank">
                    <img src={fb} alt="Facebook" />
                </a>
        
                <a href="https://www.instagram.com/eu.lipehenr/#" className="social-button instagram-button" target="_blank">
                    <img src={ig} alt="instagram"/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;