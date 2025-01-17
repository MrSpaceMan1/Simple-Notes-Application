import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe({transform: true}))
  console.log(["http://localhost:8080"]);
  app.enableCors({
    origin: true
  })
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
