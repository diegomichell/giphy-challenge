const ENV = {
  dev: {
    giphyApi: {
      url: 'https://api.giphy.com/v1',
      apiKey: 'gdwjphWDU038gRbOZBeOX0oNWQZEdPGM'
    },
  },
  prod: {
    giphyApi: {
      url: 'https://api.giphy.com/v1',
      apiKey: 'gdwjphWDU038gRbOZBeOX0oNWQZEdPGM'
    }
  }
};

function getEnvVars(env = 'dev') {
  return ENV[env];
}

export default getEnvVars;
