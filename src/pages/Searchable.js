import { useEffect, useState } from "react";
import FilterableTerm from "../components/FilterableTerm";
import JobCard from "../components/JobCard";
import Pagination from "../components/Pagination";

function Searchable() {
  const [assignments, setAssignment] = useState([]);
  const [terms, setTerms] = useState([]);
  const [cards, setCards] = useState([]); /** Cards == Assignment Card */

  const handRemoveTerm = (index) => {
    switch (terms[index]) {
      case catagory:
        setCatagry(null);
        break;
      case course:
        setCourse(null);
        break;
      case college:
        setCollege(null);
        break;
      default:
        setKeyword(null);
    }
    setTerms(terms.filter((term, i) => i !== index));
  };

  // Catagory or department
  const [showcategoryForm, setShowCategoryForm] = useState(false);
  const toggleCategoryForm = () => {
    setShowCategoryForm(!showcategoryForm);
  };
  const [catagory, setCatagry] = useState(null);
  const handSetCatagory = (value) => {
    setCatagories(value);
    setTerms((prev) => [...prev, value]);
  };
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    const results = [];
    assignments.forEach((assignments) => {
      const index = results.findIndex((ele) => assignments.Marks === ele.Mark);
      if (index === -1) {
        results.push(assignments.Marks);
      }
    });
    setCatagories(results);
  }, [assignments]);

  //Course
  const [showCourseForm, setShowCourseForm] = useState(false);
  const toggleCourseForm = () => {
    setShowCourseForm(!showCourseForm);
  };
  const [course, setCourse] = useState(null);
  const handSetCourse = (value) => {
    setCourse(value);
    setTerms((prev) => [...prev, value]);
  };

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const results = [];
    assignments.forEach((assignments) => {
      const index = results.findIndex(
        (ele) => assignments.AssignmenttTitle === ele.AssignmenttTitle
      );
      if (index === -1) {
        results.push(assignments.AssignmenttTitle);
      }
    });
    setCourses(results);
  }, [assignments]);

  //  college
  const [showCollegeForm, setShowCollegeForm] = useState(false);
  const toggleCollegeForm = () => {
    setShowCollegeForm(!showCollegeForm);
  };
  const [college, setCollege] = useState(null);
  const handSetCollege = (value) => {
    setCollege(value);
    setTerms((prev) => [...prev, value]);
  };
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    const results = [];
    assignments.forEach((assignments) => {
      const index = results.findIndex(
        (ele) => assignments.AssignmenttTitle === ele.AssignmenttTitle
      );
      if (index === -1) {
        results.push(assignments.AssignmenttTitle);
      }
    });
    setColleges(results);
  }, [assignments]);
  // Key word
  const [showKeywordForm, setShowKeywordForm] = useState(false);
  const toggleKeyworkForm = () => {
    setShowKeywordForm(!showKeywordForm);
  };
  const [inputKeyword, setInputKeyword] = useState(null);
  const handSetInputKeyword = (value) => {
    setInputKeyword(value);
  };
  const [keyword, setKeyword] = useState(null);
  const handSetKeyword = (value) => {
    setKeyword(value);
    setTerms((prev) => [...prev, value]);
  };

  const [showTypeForm, setShowTypeForm] = useState(false);
  const toggleTypeForm = (isToggle) => {
    setShowTypeForm(isToggle);
  };

  // Pagination
  const [activeIndex, setActiveIndex] = useState(1);
  const [from, setFrom] = useState(0); //Show 4 Items for 1 page start from 0
  const [to, setTo] = useState(11); //Show 4 Items for 1 page  end from 4
  const handlePrev = () => {
    setFrom((prev) => prev - 12);
    setTo((prev) => prev - 12);
    setActiveIndex((prev) => prev - 1);
  };
  const handleNext = () => {
    setFrom((next) => next + 12);
    setTo((next) => next + 12);
    setActiveIndex((next) => next - 1);
  };

  //  Fetching data for user filterable
  useEffect(() => {
    const fetchData = async () => {
      let cards = [];
      let result = await (
        await fetch("http://localhost/Book_UI/book_ui/src/API/api.php/")
      ).json();
      if (catagory) {
        result = result.filter((assignment) => assignment.Marks === catagory);
      }
      if (keyword) {
        result = result.filter((assignment) =>
          assignment.AssignmenttTitle.includes(keyword.toLowerCase())
        );
      }
      if (college) {
        result = result.filter(
          (assignment) => assignment.AssignmenttTitle === college
        );
      }

      // if (course) {
      //   result = result.filter(
      //     (assignment) => assignment.AssignmenttTitle === course
      //   );
      // }
      // if (college) {
      //   result = result.filter(
      //     (assignment) => assignment.AssignmenttTitle === college
      //   );
      // }

      //pagination push card to show up
      result.forEach((assignment, i) => {
        if (i >= from && i <= to) {
          cards.push(assignment);
        }
      });
      setCards(cards);

      setAssignment(result);
    };
    fetchData();
  }, [catagory, keyword, college, to, from]);

  return (
    <div className="bg-gray-50 border-t py-12 px-10 2xl:px-0">
      <div className="2xl:w-8/12 2xl:mx-auto space-y8">
        <div>
          <FilterableTerm
            toggleCategoryForm={toggleCategoryForm}
            showcategoryForm={showcategoryForm}
            toggleCourseForm={toggleCourseForm}
            showCourseForm={showCourseForm}
            showCollegeForm={showCollegeForm}
            toggleCollegeForm={toggleCollegeForm}
            showTypeForm={showTypeForm}
            toggleTypeForm={toggleTypeForm}
            toggleKeyworkForm={toggleKeyworkForm}
            showKeywordForm={showKeywordForm}
            catagories={catagories}
            handSetCatagory={handSetCatagory}
            handSetCourse={handSetCourse}
            courses={courses}
            handSetCollege={handSetCollege}
            colleges={colleges}
            handSetKeyword={handSetKeyword}
            handSetInputKeyword={handSetInputKeyword}
            inputKeyword={inputKeyword}
            terms={terms}
            handRemoveTerm={handRemoveTerm}
          />
        </div>
        {assignments.length > 0 ? (
          <div>
            <JobCard assignments={cards} />
          </div>
        ) : (
          <div className="text-gray-400 text-xl text-center">
            There is no found
          </div>
        )}
        <div>
          <Pagination
            assignments={assignments}
            handleNext={handleNext}
            handlePrev={handlePrev}
            activeIndex={activeIndex}
          />
        </div>
      </div>
    </div>
  );
}
export default Searchable;
