import {registerAs} from '@nestjs/config';

export default registerAs('mongodb', () => {
  const option = {
    host: process.env.MONGODB_HOST,
    port: parseInt(process.env.MONGODB_PORT, 10),
    name: process.env.MONGODB_DATABASE,
    user: process.env.MONGODB_USERNAME,
    pwd: process.env.MONGODB_PASSWORD,
    uri: process.env.MONGODB_URI,
  };
  return {
    ...option,
    uri: `mongodb://${option.user}:${option.pwd}@${option.host}:${option.port}/${option.name}`,
  };
});
