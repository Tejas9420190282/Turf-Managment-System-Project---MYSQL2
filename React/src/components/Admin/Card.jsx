
import React from 'react';

const Card = ({ title, value, children }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold">{title}</h2>
      {value && <p className="text-2xl font-bold">{value}</p>}
      {children}
    </div>
  );
};

export default Card;