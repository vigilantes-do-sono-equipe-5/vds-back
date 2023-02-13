import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap (): Promise<void> {
  const app = await NestFactory.create(AppModule)

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
  SwaggerModule.setup('api', app, document)

  await app.listen(3000)
}
void bootstrap()
