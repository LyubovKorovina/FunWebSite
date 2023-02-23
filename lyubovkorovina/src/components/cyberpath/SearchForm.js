import React, {useState} from 'react';

const SearchForm = () => {
  const [text, setText] = useState('')

  return (
    <div>
        <form>
            <input type="text" placeholder='e.g. weather'></input>
            <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default SearchForm