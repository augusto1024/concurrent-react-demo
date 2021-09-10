const FETCH_AUTHOR_DELAY = 1000;
const FETCH_QUOTES_DELAY = 1500;

const authors = [
  { id: 0, name: 'Martin Luther King Jr', birthYear: 1929, deathYear: 1968 },
  { id: 1, name: 'Carlitos Tévez', birthYear: 1910, deathYear: 1997 },
];

const quotes = [
  { id: 0, auth_id: 0, quote: 'Injustice anywhere is a threat to justice everywhere.'},
  { id: 1, auth_id: 0, quote: 'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.'},
  { id: 2, auth_id: 0, quote: 'The time is always right to do what is right.'},
  { id: 3, auth_id: 1, quote: 'A medida que uno gana cosas uno se hamburguesa.'},
  { id: 4, auth_id: 1, quote: 'Very difficult.'},
  { id: 5, auth_id: 1, quote: 'Es..., eh, is una emocion to beach for me.'},
];

export const fetchAuthor = (authorId) => new Promise((resolve, reject) => {
  console.log('Fetching Author...');
  setTimeout(() => {
    const author = authors.find(author => author.id === authorId);
    resolve(author);
    console.log('Author fetched...');
  }, FETCH_AUTHOR_DELAY);
});

export const fetchQuotes = (authorId) => new Promise((resolve, reject) => {
  console.log('Fetching Quotes...');
  setTimeout(() => {
    const authorQuotes = quotes.filter(quote => quote.auth_id === authorId);
    resolve(authorQuotes);
    console.log('Quotes fetched...');
  }, FETCH_QUOTES_DELAY);
});
