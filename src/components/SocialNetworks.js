import React from 'react';

const SocialNetworks = ({color}) => {
  const icoColor = color === "white" ? "text-white" : "text-dark"; 
  return (
    <ul className="list-inline social-networks">
      <li className="list-inline-item"><a href=" "><i className={`tf-ion-social-facebook ${icoColor}`}></i></a></li>
      <li className="list-inline-item"><a href=" "><i className={`tf-ion-social-twitter ${icoColor}`}></i></a></li>
      <li className="list-inline-item"><a href=" "><i className={`tf-ion-social-linkedin ${icoColor}`}></i></a></li>
      <li className="list-inline-item"><a href=" "><i className={`tf-ion-social-pinterest ${icoColor}`}></i></a></li>
      <li className="list-inline-item"><a href=" "><i className={`tf-ion-social-rss ${icoColor}`}></i></a></li>
    </ul>
  );
};

export default SocialNetworks;