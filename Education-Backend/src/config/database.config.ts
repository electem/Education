// src/config/database.config.ts
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const mongooseConfig: MongooseModuleOptions = {
  uri: 'mongodb://localhost/school-management',  // Your MongoDB URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
