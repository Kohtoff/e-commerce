import React from 'react';
import '../../scss/brands-block.scss'

export default function BrandsBlock() {
  const brands = [
    { name: 'brandName', logo: 'brand1' },
    { name: 'brandName', logo: 'brand2' },
    { name: 'brandName', logo: 'brand3' },
    { name: 'brandName', logo: 'brand4' },
    { name: 'brandName', logo: 'brand5' },
  ];

  const BrandLogo = (props) => {
    const { logo } = props;
    return (
      <img className="brands-block__logo" src={process.env.PUBLIC_URL + logo + '.png'} alt="" />
    );
  };

  return (
    <div className="brands-block">
      <h2 className="brands-block__title">Popular brands</h2>
      <div className='brands-block__logo-container'>
        {brands.map((item, index) => (
          <BrandLogo logo={item.logo} key={index} />
        ))}
      </div>
    </div>
  );
}
