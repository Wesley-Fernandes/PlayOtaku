import React from 'react'
import { ButtonNormal, ButtonGradient, ButtonTrailer } from '../Buttons'
import Item from './Item'
import './style.sass'

export default function Catalog() {
  return (
    <div className='Catalog'>
        <div className='Catalog-main'>
            <div className='Catalog-mainContent'>
                <div className='TransparentGradientImage'></div>
                <div className='About-MainContent'>
                    <ButtonNormal>
                        1 Temporada
                    </ButtonNormal>
                    <h2>Kimetsu no yaiba</h2>
                    <p>Ambientada no Japão durante o Período Taishō (1912-1926), a história gira ao entorno de Tanjirō Kamado, um garoto bondoso e inteligente que vive junto com sua mãe e seus irmãos, ganhando dinheiro vendendo carvão, assim como seu falecido pai. Certo dia, ao voltar para casa após ter ido a uma cidade vender carvão, Tanjiro descobre que toda sua família foi atacada por onis, sendo que uma de suas irmãs, Nezuko, é a única que sobreviveu ao ataque. Nezuko então passa a ser um oni, mas ela surpreendentemente ainda demonstra sinais de emoções e pensamentos humanos. Tanjirō decide então se tornar um caçador de onis, e com a ajuda de Nezuko, passa a sair em jornadas pelo Japão a fim de impedir que a mesma tragédia que afetou sua família aconteça com outras pessoas, enquanto que ele busca uma maneira de tornar Nezuko humana novamente.</p>
                    <div className="Options-MainContent">
                        <ButtonGradient>Assistir Anime</ButtonGradient>
                        <ButtonTrailer/>
                    </div>
                </div>
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEP35guHXTOFmNq4Xpug0dNOlU5_lrSDSqXU5YisCpj5iSoDKgYpyo_jJ9b0Gej6Q_uFTSGbXGs8KlQZCcllq5atDR3-7_ycWq8CvSdt7-UDAhb6rIa8CI3IfS3jfSBLhJMvzrKaE-iSYb5FP4vcKCi3m3cfAr5ZzTezTtNFJF8Tru2B1HxRCLrnQ3LQ/s2233/demon-slayer-hinokami-chronicles-capa.jpg" alt="Imagem de anime"/>
            </div>
        </div>
        <div className='Catalog-side'>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
    </div>
  )
}
