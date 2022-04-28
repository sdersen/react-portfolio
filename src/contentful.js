const contentful = require("contentful");
const { REACT_APP_SPACE_ID, REACT_APP_ACCESS_TOKEN } = process.env;

const client = contentful.createClient({
  space: REACT_APP_SPACE_ID,
  accessToken: REACT_APP_ACCESS_TOKEN,
});

export default client;
