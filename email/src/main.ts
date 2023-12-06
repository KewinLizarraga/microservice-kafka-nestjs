import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'ms-email',
          brokers: [process.env.KAFKA_URL],
        },
      },
    },
  );

  app.listen();
  console.log('kafka -> ', process.env.KAFKA_URL);
  console.log('-- Email Microservice --');
}
bootstrap();
