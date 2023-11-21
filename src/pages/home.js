// home.js

import React from 'react';
import dcLogo from '../assets/logos/logoDC.png';


import movie from '../assets/images/img12.png';
import firstarrow from '../assets/icones/Polygon-1.png';
import lastarrow from '../assets/icones/Polygon.png';
import trailer from '../assets/images/img15.png';
import guillemet from '../assets/icon_guillemets_1.png';
import guillemets from '../assets/icon_guillemets_2.png';


const Home = () => {
    return ( 
        <div className="div">
            <div id="intro" className='page'>
                <div className="dc"><img src={dcLogo} alt="" /></div>
                <div className="titref">
                    <h1>SUPERMAN</h1>
                    <h2>L'homme d'Acier</h2>
                </div>
            </div>

            <div id="cine">
                <div className="text-block">
                    <h3>SUPERMAN AU CINEMA</h3>
                    <p>
                        Dans la version actuelle de son histoire, Superman est né sur la planète Krypton sous le nom de « Kal-El ». Encore bébé, il fut placé dans un 
                        vaisseau spatial par son père, le scientifique Jor-El, et sa mère, Lara, car la planète était sous la menace d'une destruction totale.Le vaisseau quitta 
                        Krypton juste avant l'explosion fatidique... Au terme d'un très long voyage, il atterrit sur la planète Terre. Kal-El est trouvé par un couple de 
                        fermiers de Smallville, (Kansas). Jonathan et Martha Kent, qui n'ont pas d'enfant, décident alors de l'adopter et de garder le secret sur son origine. <br /> <br />

                        Kal-El est rebaptisé « Clark Joseph Kent » et grandit entouré de ses amis Lana Lang (son premier amour) et Pete Ross jusqu'à ce que ses pouvoirs 
                        se révèlent à lui au moment de son adolescence.Jeune adulte, Clark décide de s'installer à Metropolis pour devenir journaliste. Il y est engagé par 
                        Perry White, le rédacteur en chef du Daily Planet. Pour sauver les personnes qui lui sont chers ainsi que les habitants de la Terre, Clark revêt son 
                        costume et devient Superman, l’homme d’acier aux yeux du monde
                    </p>
                </div>
                <div className="img-block">
                    <div><img src="" alt="" /></div>
                    <div><img src="" alt="" /></div>
                    <div><img src="" alt="" /></div>
                </div>
            </div>
            <div id="enemy">
                <div className="text-block">
                    <h3>NÉMÉSIS</h3>
                    <p>
                        Superman mène une lutte sans fin contre de nombreux adversaires, son adversaire le plus connu étant le milliardaire Lex Luthor, 
                        fils de Lionel Luthor, qui déteste tout ce qu'incarne Superman et finira notamment par devenir président des États-Unis, ce qui 
                        participera à faire de lui le pire ennemi de Clark. Doomsday, une abomination génétique qui souhaite tout détruire sur son 
                        passage, sera celui qui réussira à tuer Superman. Zod est un kryptonien qui fut condamné à l'emprisonnement dans la Zone 
                        Fantôme pour s'être insurgé contre les autorités. Il est libéré et vient sur Terre pour la conquérir mais est arrêté par Superman. 
                        Étant kryptonien, Zod possède les mêmes pouvoirs que Superman, et constitue donc l'un de ses plus dangereux adversaires
                    </p>
                </div>
                <div className="img-block">
                    <div><img src="" alt="" /></div>
                    <div><img src="" alt="" /></div>
                    <div><img src="" alt="" /></div>
                </div>
            </div>
            <div id="ally">
                <div className="text-block">
                    <h3>ALLIÉS</h3>
                    <p>
                        Jor-El était le père biologique de Kal-El, ainsi que le savant le plus célèbre de Krypton et un membre influent du Conseil des 
                        Sciences. Lorsque Krypton s’effondre il place une version impuissante de lui même dans le vaisseau emportant Kal-El vers la 
                        Terre afin de lui apporter les réponses à ses questions quand il grandira. Sur Terre Clark est pris en charge par Jonathan et 
                        Martha Kent qui l’élèvent comme leur propre fils. Lorsque John sera mort, Clark pourra compter sur le soutien indéféctible de sa 
                        mère. Une fois engagé au Daily Planet, il rencontrera Loïs Lane qui deviendra sa partenaire et son seul “véritable amour 
                    </p>
                </div>
                <div className="img-block">
                    <div><img src="" alt="" /></div>
                    <div><img src="" alt="" /></div>
                    <div><img src="" alt="" /></div>
                </div>
            </div>
            <div id="versus">
                <div className="versus-block">
                    <h3>BATMAN VS SUPERMAN</h3>
                    <p>
                        Le monde n’est pas assez grand pour deux super héros. Alors que Superman se battait contre Zod, l’affrontement fait des dégats 
                        et détruit partiellement la ville de Métropolis. Bruce Wayne alors présent dans la ville assiste, impuissant, à l’effondrement de la 
                        ville qui fait beaucoup de victimes. Wayne est alors persuadé que Superman causera un jour la perte de l'Humanité et qu'il est 
                        inévitable de se préparer à l'éliminer. Devenu méfiant il se demande si l'homme de fer, cet extraterrestre de Krypton, qui peut à lui 
                        seul détruire le monde d'une simple pichenette, décidera un jour de ne plus défendre la Terre, voire même de causer sa perte. <br /> <br />

                        De son côté Superman d’une part cherche à se défendre mais retourne l’offensive contre Batman. Ce dernier n'est plus que 
                        l'ombre de lui-même. Devenu un justicier impitoyable, mégalomane et cruel à la suite du meurtre de son ancien partenaire Robin 
                        par le Joker, il n'hésite plus à violer son code moral en éliminant et marquant au fer les criminels. Superman souhaite simplement 
                        lui rappeler le code moral des “justicier” en usant de la force s’il le faut pour que Batman cesse son comportement abusif.
                    </p>
                </div>
            </div>

          


           

            <div id="quotes">
                <div class="leftg">
                    <img src={guillemet} alt=""/>
                </div>
                <div class="quotes">
                    <div> <p style={{fontWeight: 'bold'}}>- Que représente le S ? <br/> - Ce n’est pas un S. Sur ma planète cela signifie espoir.<br/></p></div> 
                    <div style={{paddingTop: '3%', fontSize: '0.8em'}}><p>Man Of Steel, Lois Lane et Clark Kent.</p></div>
                </div>
                <div class="point">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot" style={{background: '#429ef5'}}></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
                <div class="rightd">
                    <img src={guillemets} alt=""/>
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default Home;
