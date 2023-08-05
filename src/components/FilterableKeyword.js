function FilterableKeyword(props) {
  const {
    toggleKeyworkForm,
    handSetInputKeyword,
    inputKeyword,
    handSetKeyword,
  } = props;

  const handleOnChange = ({ target }) => {
    handSetInputKeyword(target.value);
  };
  const handleContinue = () => {
    if (inputKeyword !== null) {
      handSetKeyword(inputKeyword);
      handSetInputKeyword(null);
      toggleKeyworkForm();
    } else {
      toggleKeyworkForm();
    }
  };
  return (
    <div>
      <div className="relative h-96 bg-white rounded overflow-hidden flex flex-col items-center">
        {" "}
        {/*  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24" //0 0 1440 320
          fill="currentColor"
          className="w-5 absolute top-0 "
        >
          <path
            fillRule="evenodd"
            d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
            clipRule="evenodd"
          />
        </svg>
        <h1 className="absolute top-10 font-bold text-4xl text-white capitalize">
          Input
        </h1>
        <div className="px-5 w-full">
          <input
            type="text"
            placeholder="Key work..."
            className="w-full p-2 text-xl rounded border focus:outline-none"
            onChange={handleOnChange}
          />
        </div>
        <button
          onClick={handleContinue}
          className="absolute left-5 bottom-5 bg-blue-900 text-white py-2 px-12 rounded hover:red"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
export default FilterableKeyword;
