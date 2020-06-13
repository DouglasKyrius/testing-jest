const googleDatabase = require('./dataBase/googleDatabase');

const googleSearch = (dataBase, searchInput) => {
  const matches = dataBase.filter(website => {
    return website.includes(searchInput);
  });

  return matches.length > 3 ? matches.slice(0, 3) : matches;
}

// console.log(googleSearch(googleDatabase, 'cat'));

module.exports = googleSearch;