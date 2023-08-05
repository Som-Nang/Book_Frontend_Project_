// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import img1 from "../assets/04.jpg";
function JobCard(props) {
  const { assignments } = props;
  // const [item, setItem] = useState([]);
  // useEffect(() => {
  //   fetch("http://127.0.0.1/API_assignment/api.php")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       // console.log(result);
  //       setItem(result);
  //     });
  // }, []);

  return (
    // <div>
    //   <table>
    //     <tbody>
    //       {item.map((item) => (
    //         <tr key={item.id}>
    //           <td>{item.ass_cover} </td>;<td>{item.ass_title} </td>;
    //           <td>{item.ass_group_name} </td>;<td>{item.subject_catag} </td>;
    //           <td>{item.release_date} </td>;<td>{item.rating} </td>;
    //           <td>{item.lecturer_aproval} </td>;
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    <div className="wrap">
      {assignments?.length > 0 &&
        assignments.map((assignment) => (
          <div className="box" key={assignment.ID}>
            <div className="box-top">
              <img className="box-image" src={img1} alt="Girl Eating Pizza" />
              <div className="title-flex">
                <h3 className="box-title uppercase">
                  {assignment.AssignmenttTitle}
                </h3>
                <p className="user-follow-info">{assignment.Marks}/100</p>
              </div>
              <p className="description">{assignment.SubmitDate}</p>
            </div>
            <Link
              to={`/assignDetail/${assignment.id}`}
              className="font-bold text-sm focus:outline-none text-blue-800"
            >
              {" "}
              Read more
            </Link>
            <Link className="focus:outline-none" to="/api">
              Click
            </Link>
          </div>
        ))}
    </div>
  );
}

// const jobs = [];
// function JobCard() {
//   return (
//     <div>
//       <ul className="w-full my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {jobs.length > 0 &&
//           jobs.map((job) => (
//             <li className="bg-white rounded shadow-sm w-full max-w-sm mx-auto">
//               <div className="relative">
//                 <img
//                   src={require(`../assets/${job.photoUrls[0]}`)}
//                   alt="Technology"
//                   className="w-full h-52 rounded-t object-cover object-center"
//                 />
//                 {job.featured && (
//                   <div className="absolute top-10 -right-2">
//                     <div className=" w-24 h-7 bg-red-500 text-white shadow rounded-l font-bold uppercase flex justify-center items-center">
//                       FEATURE
//                     </div>
//                     <div className="absolute right-0 arrow-top-right"></div>
//                   </div>
//                 )}
//               </div>
//               <div className="border-b border-gray-100 p-3 space-y-4">
//                 <p className="font-bold text-sm text-gray-400">
//                   {job.category}
//                 </p>
//                 <Link
//                   to="job detail page/job"
//                   className="font-bold text-x1 focus:outline-none"
//                 ></Link>
//                 <div className="flex justify-between items-center capitalize text-lg">
//                   <p className="text-gray-900">{job.address.city}</p>
//                   <p className="                                                                      main-color text-white px-1 py-px font-bold text-sm rounded">
//                     {job.jobType}
//                   </p>
//                 </div>
//               </div>
//               <div className="flex justify-between items-center p-3">
//                 <div className="flex items-center space-x-2  cursor-pointer  ">
//                   <div className="relative ">
//                     <svg
//                       data-bs-toggle="collapse"
//                       data-bs-target={`#tooltip-${job.id}`}
//                       aria-expanded="false"
//                       aria-controls={`tooltip-${job.id}`}
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={1.5}
//                       stroke="currentColor"
//                       className="w-6 h-6"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
//                       />
//                     </svg>
//                     <div
//                       id={`tooltip-${job.id}`}
//                       className="collapse absolute -top-52 -left-10 bg-gray-900 text-white rounded py-5 px-6 space-y-2 text-center text-xs"
//                     >
//                       <QRCodeSVG
//                         value={job.companywebsite}
//                         className=" border-2 border-white p-px"
//                       />
//                       <p>Scan QR code to view on mobile device.</p>
//                       <div className="absolute -bottom-1 left-10 arrow-bottom"></div>
//                     </div>
//                   </div>

//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="blue"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//                     />
//                   </svg>
//                 </div>
//                 <div className="flex items-center ">
//                   <p className="font-bold text-lg">
//                     ${job.salary}{" "}
//                     <span className="text-xs">
//                       {job.salaryType === "annually"
//                         ? "P.A"
//                         : job.salaryType === "monthly"
//                         ? "P.M"
//                         : "P.H"}
//                     </span>
//                   </p>
//                 </div>
//               </div>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }
export default JobCard;
