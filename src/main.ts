import { INestApplication, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { Server } from 'http'
import { AppModule } from './app.module'

export const port = process.env.PORT ?? 3000

async function bootstrap (): Promise<void> {
  const app = await NestFactory.create<INestApplication>(AppModule, {
    cors: true
  })

  app.useGlobalPipes(new ValidationPipe())

  const config = new DocumentBuilder()
    .setTitle('Vigilantes do Sono API')
    .setDescription('Aplicação para geração de gráficos dos usuários do aplicativo.')
    .setVersion('1.0.0')
    .addTag('status')
    .addTag('companies')
    .addTag('users')
    .addTag('user-program-sessions')
    .addTag('sleep-diaries')
    .addTag('tags')
    .addTag('ratings')
    .addTag('isi')
    .addTag('gad')
    .addTag('phq')
    .addTag('productivities')
    .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('docs', app, document)

  const server: Server = await app.listen(port, () => {
    console.log(`Application running on ${!process.env.PORT ? `http://localhost:${port}` : `port ${port}`}`)
  })

  process.on('SIGINT', () => {
    server.close()
    console.log('Finished Application')
  })
}
void bootstrap()
