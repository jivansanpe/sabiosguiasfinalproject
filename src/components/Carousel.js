import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

function ReactSimplyCarouselExample() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <div>
            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                    //here you can also pass className, or any other button element attributes
                    style: {
                        alignSelf: 'center',
                        background: 'black',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 30,
                    },
                    children: <span>{`>`}</span>,
                }}
                backwardBtnProps={{
                    //here you can also pass className, or any other button element attributes
                    style: {
                        alignSelf: 'center',
                        background: 'black',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 30,
                    },
                    children: <span>{`<`}</span>,
                }}
                responsiveProps={[
                    {
                        itemsToShow: 2,
                        itemsToScroll: 2,
                        minWidth: 768,
                    },
                ]}
                speed={400}
                easing="linear"
            >
                {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
                <div style={{ width: 300, height: 300, background: '#ff80ed' }}>
                    <img src='https://www.sabiosguiasinterpretes.com/wp-content/uploads/2018/04/image_content_3426722_201804281255531336381073.jpg'></img>
                </div>
                <div style={{ width: 300, height: 300, background: '#065535' }}>
                    <img src='https://www.sabiosguiasinterpretes.com/wp-content/uploads/2020/12/Grayscale-Horses-Twitter-Header-1030x343.png'></img>
                </div>
                <div style={{ width: 300, height: 300, background: '#000000' }}>
                    <img src='https://www.sabiosguiasinterpretes.com/wp-content/uploads/2019/03/Juncalillo-de-Ga%CC%81ldar.-Gu%CC%88nter-Kunkel.-1964.-1030x763.jpg'></img>
                </div>
                <div style={{ width: 300, height: 300, background: '#133337' }}>
                    <img src='https://www.sabiosguiasinterpretes.com/wp-content/uploads/2019/03/Barranco-hondo-de-abajo-1030x755.jpg'></img>
                </div>
                <div style={{ width: 300, height: 300, background: '#ffc0cb' }}>
                    <img src='https://www.sabiosguiasinterpretes.com/wp-content/uploads/2019/03/Fiesta-de-La-Rama-en-Juncalillo.-Coleccio%CC%81n-Ine%CC%81s-Sa%CC%81nchez-Sa%CC%81nchez.-1954-1963.-1030x603.jpg'></img>
                </div>
                <div style={{ width: 300, height: 300, background: '#ffffff' }}>
                    <img src='https://www.sabiosguiasinterpretes.com/wp-content/uploads/2020/10/Foto-1-3-1030x735.jpg'></img>
                </div>
                <div style={{ width: 300, height: 300, background: '#ffe4e1' }}>
                    <img src='https://www.sabiosguiasinterpretes.com/wp-content/uploads/2020/10/Foto-2-3-1030x725.jpg'></img>
                </div>
                <div style={{ width: 300, height: 300, background: '#008080' }}>
                    <img src='https://www.sabiosguiasinterpretes.com/wp-content/uploads/2019/03/Juncalillo-de-Ga%CC%81ldar.-Gu%CC%88nter-Kunkel.-1965.-1030x663.jpg'></img>
                </div>
                <div style={{ width: 300, height: 300, background: '#ff0000' }}>
                    <img src='https://www.sabiosguiasinterpretes.com/wp-content/uploads/2019/03/Casa-cueva-de-Juncalillo-de-Ga%CC%81ldar.-Gu%CC%88nter-Kunkel.-1965.-1030x688.jpg'></img>
                </div>
                <div style={{ width: 300, height: 300, background: '#e6e6fa' }}>
                    <img src='https://www.sabiosguiasinterpretes.com/wp-content/uploads/2020/10/Foto-3-3-1030x735.jpg'></img>
                </div>
            </ReactSimplyCarousel>
        </div>
    );
}

export default ReactSimplyCarouselExample;