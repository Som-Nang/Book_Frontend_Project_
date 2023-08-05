import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";

function Home() {
  const [assignments, setAssignments] = useState([]);
  const fetchData = async () => {
    const res = await fetch("http://localhost/Book_UI/book_ui/src/API/api.php");
    const assignments = await res.json();

    setAssignments(assignments);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="px-10 2xl:px-0 2xl:w-8/12 2xl:mx-auto">
        <JobCard assignments={assignments} />
      </div>
    </div>
  );
}
export default Home;
