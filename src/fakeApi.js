const FETCH_AUTHOR_DELAY = 1000;
const FETCH_QUOTES_DELAY = 1500;

const author = { id: 0, name: 'Martin Luther King Jr', birthYear: 1929, deathYear: 1968 };

const quotes = [
  { id: 0, auth_id: 0, quote: 'Injustice anywhere is a threat to justice everywhere.'},
  { id: 1, auth_id: 0, quote: 'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.'},
  { id: 2, auth_id: 0, quote: 'The time is always right to do what is right.'},
];

export const fetchAuthor = () => new Promise((resolve, reject) => {
  console.log('Fetching Author...');
  setTimeout(() => {
    resolve(author);
    console.log('Author fetched...');
  }, FETCH_AUTHOR_DELAY);
});

export const fetchQuotes = () => new Promise((resolve, reject) => {
  console.log('Fetching Quotes...');
  setTimeout(() => {
    resolve(quotes);
    console.log('Quotes fetched...');
  }, FETCH_QUOTES_DELAY);
});
