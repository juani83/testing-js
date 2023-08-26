const { generateManyBooks } = require('../fakes/book.fake');
const BooksService = require('./books.service');

// Fakes - Datos falsos de libros
/*
const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter',
  },
];
*/

// Spy
const mockGetAll = jest.fn();

// Stub - Simula comportamiento de los metodos para obtener todos los libros y para crearlos
/*
const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => {},
};
*/

// Implementacion del mock de la libreria que establece la conexion con la base de datos y luego
// realiza los request a base de datos
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks(); // Limpia los mocks antes de cada caso de prueba
  });

  describe('test for getBooks', () => {
    test('should return a list book', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return the name of a book', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(4);
      /*
      mockGetAll.mockResolvedValue([
        {
          _id: 1,
          name: 'Harry Potter 2',
        },
      ]);
      */
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks();
      console.log(books);
      // Assert
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
