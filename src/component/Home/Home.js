import React from 'react'
import "./Home.css"
import ReactWhatsapp from 'react-whatsapp';
function Home() {
    return (
        <div className='container cont-width d-flex justify-content-center align-items-center'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-7  col-11'>
                    <h3 className='home-h3'>My name Is Mian Zahid Ali</h3>
                    <p className='home-p'>I have over 4+ Years of experience in blockchain development , building cryptocurrencies, NFT staking, minting and marketplace dapps, defi dapps, decentralized exchange, decentralized donation platform, and much more. I have strong knowledge of solidity, and I keep myself up to date with the latest trends in the defi and NFT space. I've spent considerable amount of time designing projects from scratch, solving complex problems, rapid iterative prototyping and implementing changes.

                        I will be glad to work with you. If you have any queries feel free to ask, I am available 24/7 to discuss details.
                        Here you can see the details of my completed projects.</p>

                    <div class="button-container-2">
                        <span class="mas">Contact Me</span>
                        <ReactWhatsapp number="+92 345 6810053" message="Hello World!!!" style={{ backgroundColor: "transparent" }} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home