const initState = {
  books:{}
}

export default (state = initState, action) => {
  switch (action.type){
    case 'CREATE_BOOK':
      /*const date = (new Date).getTime();
      const newBook = {id:date ,title:action.book,author:action.auth}
      return {...state, ...{books:newBook}}*/

      const id =  (new Date).getTime();
      const bookObj = {...state.books}
      const newBook = {title:action.book,author:action.auth}
      bookObj[id] = newBook
      console.log("from reducer", {...state,...{books:bookObj}})
      return {...state,...{books:bookObj}}
      /*const bookKeys  = Object.keys(state.books);
        let uniqueKey
        if(bookKeys.length === 0)
          uniqueKey = 1
        else
          uniqueKey = parseInt(bookKeys[bookKeys.length-1]) + 1
        const newBookList = {...state.books, ...{[uniqueKey]:action.book}}
        return {...state , ...{books: newBookList}} */
    default:
          return state;
  }
};
