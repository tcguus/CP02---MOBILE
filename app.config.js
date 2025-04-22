import 'dotenv/config';

export default {
  expo: {
    name: 'EcoApp',
    slug: 'ecoapp',
    version: '1.0.0',
    extra: {
      openWeatherApiKey: process.env.OPEN_WEATHER_API_KEY,
    },
  },
};
