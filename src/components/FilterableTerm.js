import { useRef } from "react";
import FilterableCategory from "./FilterableCategory";
import FilterableCourse from "./FilterableCourse";
import FilterableCollege from "./FilterableCollege";
import FilterableType from "./FilterableType";
import FilterableKeyword from "./FilterableKeyword";
import Term from "./Term";

function FilterableTerm(props) {
  const {
    showcategoryForm,
    toggleCategoryForm,
    showCourseForm,
    toggleCourseForm,
    showCollegeForm,
    toggleCollegeForm,
    showTypeForm,
    toggleTypeForm,
    toggleKeyworkForm,
    showKeywordForm,
    catagories,
    handSetCatagory,
    courses,
    handSetCourse,
    handSetCollege,
    colleges,
    inputKeyword,
    handSetInputKeyword,
    handSetKeyword,
    terms,
    handRemoveTerm,
  } = props;

  const ref = useRef();
  const closePopupWithRef = (e) => {
    if (!ref.current.contains(e.target)) {
      toggleTypeForm(false);
    }
  };
  return (
    <div>
      <div
        onClick={closePopupWithRef}
        className={`${
          showcategoryForm ||
          showCourseForm ||
          showCollegeForm ||
          showTypeForm ||
          showKeywordForm
            ? "fixed inset-0 w-full bg-gray-900 bg-opacity-30 flex justify-center transition-all duration-300 z-40"
            : "w-0 h-0 overflow-hidden"
        }`}
      >
        <div
          ref={ref}
          className="w-full max-w-xl mt-[15vh] h-fit p-2 bg-gray-100 bg-opacity-20 rounded"
        >
          {showcategoryForm ? (
            <FilterableCategory
              toggleCategoryForm={toggleCategoryForm}
              catagories={catagories}
              handSetCatagory={handSetCatagory}
            />
          ) : showCourseForm ? (
            <FilterableCourse
              toggleCourseForm={toggleCourseForm}
              courses={courses}
              handSetCourse={handSetCourse}
            />
          ) : showCollegeForm ? (
            <FilterableCollege
              toggleCollegeForm={toggleCollegeForm}
              handSetCollege={handSetCollege}
              colleges={colleges}
            />
          ) : showTypeForm ? (
            <FilterableType ref={ref} />
          ) : showKeywordForm ? (
            <FilterableKeyword
              toggleKeyworkForm={toggleKeyworkForm}
              handSetKeyword={handSetKeyword}
              inputKeyword={inputKeyword}
              handSetInputKeyword={handSetInputKeyword}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold">
          Explore: {""} <span className="italic">21 result</span>
        </p>
        <div className="flex items-center space-2-x cursor-pointer">
          <p className="font-bold ">Sponsored Aid </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        </div>
      </div>

      <div className="space-y-7">
        <div
          onClick={toggleKeyworkForm}
          className="flex justify-between items-center p-3 border rounded shadow font-bold cursor-pointer "
        >
          <p>Input</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5"
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="space-y-7">
          <div className="grid grid-cols-3 gap-4 items-center">
            <div
              onClick={toggleCategoryForm}
              className="flex justify-between items-center p-3 border rounded shadow font-bold cursor-pointer "
            >
              <p>Category</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div
              onClick={toggleCollegeForm}
              className="flex justify-between items-center p-3 border rounded shadow font-bold cursor-pointer "
            >
              <p>college</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div
              onClick={toggleCourseForm}
              className="flex justify-between items-center p-3 border rounded shadow font-bold cursor-pointer "
            >
              <p>Department</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Delete */}
            {/* <div
              onClick={() => toggleTypeForm(true)}
              className="flex justify-between items-center p-3 border rounded shadow font-bold cursor-pointer "
            >
              <p>Type</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div> */}
          </div>

          <div>
            <Term terms={terms} handRemoveTerm={handRemoveTerm} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default FilterableTerm;
