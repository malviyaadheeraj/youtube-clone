const API_KEY = "AIzaSyCj4rqYv9bTDKyfPYj2v7mdRiU3hs3Fb4M";

const requests = {
  fetchVideo: `/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=${API_KEY}`,
  fetchMultipleVideo: `/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=${API_KEY}`,
  fetchMostPopularVideo: `/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${API_KEY}`,
  fetchLikedVideo: `/videos?part=snippet%2CcontentDetails%2Cstatistics&myRating=like&key=${API_KEY}`,
};

export default requests;
