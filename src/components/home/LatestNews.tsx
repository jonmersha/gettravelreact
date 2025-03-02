import React, { useState } from 'react';

const LatestNews = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  // Example news data with introductory description and image
  const newsList = [
    {
      id: 1,
      title: 'Tigray region’s tourism',
      content: 'The tourist destinations in the Tigray region, which had been closed for nearly three years due to security concerns, are set to reopen and welcome tourists starting this week. Since 2020, the tourist sites in Tigray have been inaccessible to visitors due to security risks, causing significant harm to the hotels and hospitality industry. The Tigray conflict, which ended in November 2022, had a tremendous impact on Ethiopia’s tourism sector, accounting for nearly 10% of the national economy. Tigray is home to numerous tourist attractions in Ethiopia, such as the Axum Obelisks, Gheralta Mountains, Debre Damo Monastery, and Nejashi, one of Africa’s oldest mosques.',
      intro: 'Tigray region’s tourism destinations to reopen after years of closure ',
      image: 'https://addisstandard.com/wp-content/uploads/2023/11/Tourism-2-1024x546.jpg',
    },
    {
      id: 2,
      title: 'cautions against travel advisories',
      content: `Despite six years of militarized conflict in the Oromia region, Lelise Dhugaa, Commissioner of the Oromia Tourism Commission, has urged the international community to reconsider travel advisories on Ethiopia, stating they can “unintentionally harm the image of Ethiopia.”

      In an open letter released prior to the global observance of World Tourism Day on 27 September, 2024, under the theme “Tourism and Peace,” Lelise acknowledged recent “challenges” in Ethiopia while highlighting efforts toward national reconciliation.',
      intro: 'Tourism Commissioner cautions against travel advisories, says they are "outdated" amid ongoing conflict`,
      image: 'https://addisstandard.com/wp-content/uploads/2024/09/Lelise-Dhugaa-1024x620.jpeg',
    },
    
   
   
  ];

  const handleClick = (news) => {
    setSelectedNews(news);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      {/* News Details (Left side) */}
      <div style={{ width: '70%', padding: '20px' }}>
        {selectedNews ? (
          <div>
            <h2>{selectedNews.title}</h2>
            <img
              src={selectedNews.image}
              alt={selectedNews.title}
              style={{ width: '100%', maxWidth: '500px', marginBottom: '10px' }}
            />
            <p>{selectedNews.content}</p>
          </div>
        ) : (
          <p>Select a news item to see the details</p>
        )}
      </div>

      {/* News List (Right side) */}
      <div
        style={{
          width: '30%',
          overflowY: 'scroll',
          padding: '10px',
          borderLeft: '1px solid #ddd',
        }}
      >
        <h2>Latest News</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {newsList.map((news) => (
            <li
              key={news.id}
              style={{
                marginBottom: '15px',
                cursor: 'pointer',
                backgroundColor: selectedNews?.id === news.id ? '#e0e0e0' : 'transparent',
                padding: '10px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
              }}
              onClick={() => handleClick(news)}
            >
              <img
                src={news.image}
                alt={news.title}
                style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '4px' }}
              />
              <div>
                <h3>{news.title}</h3>
                <p style={{ fontSize: '0.9em', color: '#666' }}>{news.intro}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LatestNews;
