import React from "react";
import MainBox from "./MainBox";
export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainProducts: [
        {
          name: "Safavieh Couture",
          img: "./images/main/main-box/Bitmap-1.png",
          price: 899,
          realPrice: 1350,
          rating: 0,
        },
        {
          name: "Fair Trade Ghana",
          img: "./images/main/main-box/Bitmap-2.png",
          price: 34,
          realPrice: 0,
          rating: 0,
        },
        {
          name: "KingSo Round Table",
          img: "./images/main/main-box/Bitmap-3.png",
          price: 44.99,
          realPrice: 0,
          rating: 0,
        },
        {
          name: "Porthos Dining Chair",
          img: "./images/main/main-box/Bitmap-4.png",
          price: 120,
          realPrice: 350,
          rating: 0,
        },
        {
          name: "Trade Folding Stool",
          img: "./images/main/main-box/Bitmap-5.png",
          price: 31.49,
          realPrice: 0,
          rating: 0,
        },
        {
          name: "Rivet Accent Chair",
          img: "./images/main/main-box/Bitmap-6.png",
          price: 120,
          realPrice: 350,
          rating: 0,
        },
        {
          name: "Armen Living Chair ",
          img: "./images/main/main-box/Bitmap-7.png",
          price: 110,
          realPrice: 312,
          rating: 0,
        },
        {
          name: "Knight Chair",
          img: "./images/main/main-box/Bitmap.png",
          price: 149,
          realPrice: 200,
          rating: 0,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="text-center text-3xl font-bold text-text-primary mb-14.5">
          <h3 className="">Explore All Products</h3>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-7.5">
          {this.state.mainProducts.map((product) => {
            return (
              <MainBox
                key={product.name}
                name={product.name}
                img={product.img}
                price={product.price}
                realPrice={product.realPrice}
                rating={product.rating}
              />
            );
          })}
        </div>

        <div className="text-center text-2 font-bold text-text-primary mt-22 mb-34">
          <h3 className="">
            <a className="hover:opacity-85 transition-opacity" href="">
              Check all products
            </a>
          </h3>
        </div>
      </div>
    );
  }
}
