function Term(props) {
  const { terms, handRemoveTerm } = props;
  return (
    <ul className="grid grid-cols-7 gap-2">
      {terms.map((term, i) => (
        <li
          onClick={() => handRemoveTerm(i)}
          key={term}
          className="flex items-center justify-center py-1 space-x-2 border rounded shadow cursor-pointer bg-blue-800 text-white"
        >
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 p-px fit"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <p className="lowercase tracking-wider text-white">{term}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default Term;
