import React from 'react';
import img from './dd.jpg';

function Home()
{
    return(
        <div className="section">
            <h1>Home Page</h1>
            <div className="box">
                <div className="image">
                    <img src={img}></img>
                </div>
                <div className="para">
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima autem voluptate optio libero sunt numquam iusto quam odio! Sint unde repellendus laboriosam similique quis vero, optio sapiente sunt qui nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laboriosam modi voluptas, vel culpa aliquid error. Quisquam molestias hic porro totam! Sequi totam consectetur nulla accusamus eum quia, voluptates praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur unde, debitis minima magni sed beatae perferendis excepturi, enim facere magnam nostrum et sit nemo repellendus? Quasi aspernatur provident quae eligendi.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;