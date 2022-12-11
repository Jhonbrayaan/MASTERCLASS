import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './../../.history/project-name/src/database/prisma.service_20221208210836';
import { PrismaRocketMembersRepository } from './repositories/prisma/prisma-rocket-members-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: RocketMemberRepository,
      useClass: PrismaRocketMembersRepository,
    },
  ],
})
export class AppModule {}
