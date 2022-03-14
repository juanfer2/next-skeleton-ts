import React from 'react'

const stylesSearch = {
  form: 'flex justify-center mb-20',
  divInput: `flex relative p-1  bg-gradient-to-tr from-purple-600 to-blue-300 rounded-full w-2/6`,
  input: 'flex-1 p-2 pl-4 rounded-full w-full'
}

function Search() {
  return (
    <form className={stylesSearch.form}>
      <div className={stylesSearch.divInput}>
        <input type="text" className={stylesSearch.input} />
      </div>
    </form>
  )
}

export default Search
