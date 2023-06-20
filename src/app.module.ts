import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://0.0.0.0/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
