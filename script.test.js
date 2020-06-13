const googleSearch = require('./script');

dbMock = [
  'dog.com',
  'dogpictures.com',
  'cheesepuff.com',
  'disney.com'
];

describe('googleSearch', () => {

})

it('is searching google', () => {
  expect(googleSearch(dbMock, 'test')).toEqual([]);
  expect(googleSearch(dbMock, 'dog')).toEqual(['dog.com', 'dogpictures.com']);
});

it('work with undefined and null input', () => {
  expect(googleSearch(dbMock, undefined)).toEqual([]);
  expect(googleSearch(dbMock, null)).toEqual([]);
})

it('does not return more than 3 matches', () => {
  expect(googleSearch(dbMock, '.com').length).toEqual(3);
})