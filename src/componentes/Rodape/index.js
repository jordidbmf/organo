import './Rodape.css'
import React from 'react';

const Rodape = () => {
    return (<footer className='footer'>
        <section>
            <ul>
                <li>
                    <a href='facebook.com' target='_blank'>
                        <img src='/imagens/fb.png' alt='Logo facebook'/>
                    </a>
                </li>
                <li>
                    <a href='twitter.com' target='_blank'>
                        <img src='/imagens/tw.png' alt='Logo twitter'/>
                    </a>
                </li>
                <li>
                    <a href='instagram.com' target='_blank'>
                        <img src='/imagens/ig.png' alt='Logo instagram'/>
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src='/imagens/logo.png'alt='Logo organo'/>
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
    </footer>)
}

export default Rodape