import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobCard from "../components/JobCard";
import AssignDetailCom from "../components/AssignDetailCom";

function AssignDetail() {
  const { id } = useParams();
  const [assignment, setAssignment] = useState(null);
  const [assignments, setAssignments] = useState([]);

  const fetchData = async () => {
    const res = await fetch("http://localhost/Book_UI/book_ui/src/API/api.php");
    const response = await fetch(
      `http://localhost/Book_UI/book_ui/src/API/api.php/${id}`
    );

    const assignments = await res.json();
    const assignment = await response.json();

    setAssignment(assignment);
    setAssignments(assignments);
    console.log(assignment);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="book-details">
      {assignment && (
        <div>
          <div className="2xl:w-8/12 2xl:mx-auto">
            <AssignDetailCom assignment={assignment} />
          </div>
          <div className="border-t py-12 px-10 2xl:px-0">
            <div className="2xl:w-8/12 2xl:mx-auto">
              <h1 className="max-w-full font-bold text-gray-900 text-2xl">
                Recommend
              </h1>
              <JobCard assignments={assignments} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default AssignDetail;
