export const createBook = (s) => {

  return {
    type: 'CREATE_BOOK',
    book: s.title ,
    auth :s.bauthor
  }
};
