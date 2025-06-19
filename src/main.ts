import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

    // Global Validation Pipe for DTO validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,              
      forbidNonWhitelisted: true,   
      transform: true,            
    }),
  )


  const dataSource = app.get(DataSource);
  if (dataSource.isInitialized) { //true if DB connected successfully
    logger.log('✅ Database connection established successfully');
  } else {
    logger.error('❌ Database connection failed');
    process.exit(1);
  }

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));

  const port = parseInt(process.env.PORT || '4000', 10);
  await app.listen(port);
  logger.log(`🚀 Server is running at: http://localhost:${port}/graphql`);
}
bootstrap();
