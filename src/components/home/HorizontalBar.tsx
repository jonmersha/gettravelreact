import React from 'react';

// Sample data for travel-related ads
const adsData = {
  ad1: "Explore the world! Special offer: 25% off on all international travel packages.",
  ad2: "Book now and get exclusive discounts on all domestic travel packages. Limited time only!",
};

const HorizontalBar = () => {
  return (
    <div style={{ width: '100%', padding: '20px', backgroundColor: 'black', color: 'white' }}>
      {/* Ads Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        <div style={{ backgroundColor: '#333', padding: '10px', borderRadius: '4px', width: '48%' }}>
          <h3>Travel Package Offer</h3>
          <p>{adsData.ad1}</p>
        </div>
        <div style={{ backgroundColor: '#333', padding: '10px', borderRadius: '4px', width: '48%' }}>
          <h3>Exclusive Travel Discounts</h3>
          <p>{adsData.ad2}</p>
        </div>
      </div>

      {/* Horizontal Bar for Ad 1 */}
      

      {/* Horizontal Bar for Ad 2 */}
      
    </div>
  );
};

export default HorizontalBar;
