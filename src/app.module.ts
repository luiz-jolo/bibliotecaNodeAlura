import { Module } from '@nestjs/common';
import { BooksController } from './Controllers/books/books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksService } from './Services/books/books.service';
import { BookRepository } from './mongo/Repositories/book.repository';
import { BookSchema } from './mongo/Schemas/book.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/biblioteca'),
    
    MongooseModule.forFeature([
      {name : 'book', schema : BookSchema}
    ])
  ],
  controllers: [BooksController],
  providers: [BooksService, BookRepository],
})
export class AppModule {}
