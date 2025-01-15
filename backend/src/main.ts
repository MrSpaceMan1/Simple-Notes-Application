import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { AppDataSource } from './data-source';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  await AppDataSource.initialize();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
