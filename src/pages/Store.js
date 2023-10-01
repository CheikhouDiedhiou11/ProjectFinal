import React, { useState, useEffect } from 'react';
import { Row, Col, InputGroup, FormControl, } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { produitsArray } from '../produitstore';
import ProduitCard from '../components/ProduitCard';
import './store.css';

function Store() {
    const image1Url = 'https://th.bing.com/th/id/R.21ef5947a01af65cddd378d82fb11bc7?rik=YbuTE39IkeruIg&riu=http%3a%2f%2fngn-mag.com%2fwp-content%2fuploads%2f2019%2f12%2fArticle-3-vente-en-ligne.jpg&ehk=3dfL0rin%2byvJX3GsEpmKiXThMsH4CcdgQsBWtXCAieY%3d&risl=&pid=ImgRaw&r=0';
    const image2Url = 'https://tech-ish.com/wp-content/uploads/2021/06/Phantom-X-Thumbnail.jpg';
    const image3Url = 'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/3fe1847a-3dc4-432d-a10a-54e6ff8016b4._CR0,38,1920,1005_SX460_QL70_.jpg';

    const [showAnimation, setShowAnimation] = useState(false);
    const [searchTitle, setSearchTitle] = useState('');
    const [filteredProduits, setFilteredProduits] = useState([]);

    useEffect(() => {
        // Déclenchez l'animation après un court délai (par exemple, 500 ms)
        setTimeout(() => {
            setShowAnimation(true);
        }, 100);
    }, []);

    useEffect(() => {
        // Filtrer les produits en fonction du titre saisi par l'utilisateur
        const filtered = produitsArray.filter((produit) =>
            produit.titre.toLowerCase().includes(searchTitle.toLowerCase())
        );
        setFilteredProduits(filtered);
    }, [searchTitle]);

    // Fonction pour déclencher la recherche lorsque le bouton est cliqué
    const handleSearchClick = () => {
        const filtered = produitsArray.filter((produit) =>
            produit.titre.toLowerCase().includes(searchTitle.toLowerCase())
        );
        setFilteredProduits(filtered);
    };

    return (
        <>
            <div className="header-slider">
                <Carousel infiniteLoop autoPlay>
                    <div>
                        <img src={image1Url} alt="ps5" />
                    </div>
                    <div>
                        <img src={image2Url} alt="" />
                    </div>
                    <div>
                        <img src={image3Url} alt="" />
                    </div>
                </Carousel>
            </div>
            <h1
                align="center"
                className={`p-3 ${showAnimation ? 'fade-in active' : 'fade-in'}`}
            >
                BIENVENUE DANS LA BOUTIQUE !
            </h1>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="RECHERCHE PAR NOM"
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                />
               
            </InputGroup>
            <Row xs={1} md={3} className='g-4'>
                {filteredProduits.map((produit, idx) => (
                    <Col align="center" key={idx}>
                        <h1>{produit.titre}</h1>
                        <ProduitCard produit={produit} />
                    </Col>
                ))}
            </Row>
            <footer className="bg-primary text-white">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Contactez-nous</h3>
                            <p>Adresse : 123 Rue de la Boutique</p>
                            <p>Téléphone : (123) 456-7890</p>
                            <p>Email : contact@votre-boutique.com</p>
                        </div>
                        {/* Ajoutez d'autres colonnes Bootstrap ici si nécessaire */}
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Store;
