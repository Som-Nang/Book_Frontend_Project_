import "../css/AssignDetailCom.css";
import img from "./06.jpg";

function AssignDetailCom(props) {
  const { assignment } = props;
  // const [item, setItem] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost/Book_UI/book_ui/src/API/api.php")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       // console.log(result);
  //       setItem(result);
  //     });
  // }, []);
  console.log(typeof assignment);

  return (
    assignment && (
      <div className="book-details-content grid">
        <div className="book-details-img">
          <img src={img} alt="cover img" />
        </div>
        <div className="book-details-info">
          <div className="book-details-item font-semibold uppercase text-gray-700 text-lg title">
            <span className="fw-6 fs-24">Title: {assignment.ID}</span>
          </div>
          <div className="book-details-item description">
            <span>
              {" "}
              3,351 views May 9, 2023 Discover the best React project series
              ever created for beginners! Follow along as we guide you through
              10 engaging projects that use Figma design to create stunning UI.
              From building a to-do list app to a weather app, you'll learn the
              fundamentals of React while developing real-world web apps. With
              our step-by-step tutorials, you'll become a React pro in no time!
              So join us now and unlock the secrets of building awesome web apps
              with React and Figma
            </span>
          </div>
          <div className="book-details-item">
            <span className="fw-6">Subject Places: </span>
            <span className="text-italic">TEAM A</span>
          </div>
          <div className="book-details-item">
            <span className="fw-6">Subject Times: </span>
            <span className="text-italic">22 Jan 2023</span>
          </div>
          <div className="book-details-item">
            <span className="fw-6">Subjects: </span>
            <span>Computer Science</span>
          </div>
        </div>
      </div>
    )
  );
}
export default AssignDetailCom;
