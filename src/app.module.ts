import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(), 
    ApiModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
