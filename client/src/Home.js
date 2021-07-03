import React from "react"
import "./Home.css"
import Product from "./Products"


function Home(){
    return (
        <div className="home">


        <div className="home_container">
        <img alt="prime-add" className="home_img" 
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/HeroPC_1500x600_CBCC._CB667391209_.jpg" 

        />


        <div className="home_products">
        <Product 
            id="1"
            image="https://images-na.ssl-images-amazon.com/images/I/711Q-T2qYBS._SL1500_.jpg"
            title="The FlexBell - The Ultimate Adjustable Dumbbells (Single Piece - 15 adjustments from 2.5kg to 24kg) by Shapes Fitness"
            seller="SHAPES FITNESS"
            price="2999.00" 
            rating={5}
             />

<Product 
            id="2"
            image="https://images-na.ssl-images-amazon.com/images/I/7199N-Uz2AL._SL1500_.jpg"
            title="Google Pixel 4a (Just Black, 6GB RAM, 128GB Storage)"
            seller="GOOGLE"
            price="53400.00" 
            rating={5}
             />

<Product 
            id="3"
            image="https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg"
            title="New Apple iPhone 12 (128GB) - Purple"
            seller="APPLE STORE"
            price="80499.00" 
            rating={5}
             />
        </div>



        
        <div className="home_products">
             <Product 
            id="4"
            image="https://images-na.ssl-images-amazon.com/images/I/81lyNVQ6iXL._SL1500_.jpg"
            title="Samsung Galaxy Note 20 Ultra 5G (Mystic Bronze, 12GB RAM, 256GB Storage)"
            seller="SAMSUNG"
            price="91999.00" 
            rating={5}
             />

             <Product 
            id="5"
            image="https://images-na.ssl-images-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg"
            title="
2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 512GB SSD) - Space Grey"
            seller="APPLE STORE"
            price="138690.00" 
            rating={5}
             />

<Product 
            id="6"
            image="https://images-na.ssl-images-amazon.com/images/I/71kUmXbef5S._SL1500_.jpg"
            title="Savya Home® APEX Chairs™ Apollo Chrome Base HIGH Back Office CHAIR2"
            seller="SAVYA HOME STORE"
            price="6989.00" 
            rating={3}
             />
             </div>







             <div className="home_products">
             <Product 
            id="7"
            image="https://images-na.ssl-images-amazon.com/images/I/71lVwl3q-kL._SL1500_.jpg"
            title="Mi Power Bank 3i 20000mAh | 18W Fast PD Charging | Input- Type C and Micro USB| Triple Output | Sandstone Black"
            seller="MI"
            price="1699.00" 
            rating={5}
             />

<Product 
            id="8"
            image="https://images-na.ssl-images-amazon.com/images/I/71qMIJnrhFL._SL1500_.jpg"
            title="
New Apple Watch Series 6 (GPS + Cellular, 44mm) - Space Grey Aluminium Case with Black Sport Band"
            seller="APPLE STORE"
            price="48990.00" 
            rating={4}
             />

<Product 
            id="9"
            image="https://images-na.ssl-images-amazon.com/images/I/6125kwHG4gL._SL1500_.jpg"
            title="Sony WH-1000XM3 Industry Leading Wireless Noise Cancelling Headphones"
            seller="SONY STORE"
            price="20929.00" 
            rating={4}
             />
             
             </div>

             <div className="home_products">
             <Product 
            id="10"
            image="https://images-na.ssl-images-amazon.com/images/I/61-COaSmn3L._SL1500_.jpg"
            title="OnePlus Buds (Nord Blue)"
            seller="ONEPLUS STORE"
            price="50900.00" 
            rating={4}
             />

        </div>
          
        
        </div>
        </div>
        

    );
}

export default Home