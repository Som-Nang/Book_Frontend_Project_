<?php 
include_once ("core.php");
    $con = mysqli_connect("localhost", "root", "", "ocasdb");

    $sql = "SELECT 
    
    tbluploadass.ID, 
    tbluploadass.AnswerFile, 
    tbluploadass.SubmitDate, 
    tbluploadass.Marks, 
    tblassigment.AssignmenttTitle,
    tbluser.FullName 

    FROM tbluploadass 
    INNER JOIN tblassigment ON tbluploadass.ID = tblassigment.ID
    INNER JOIN tbluser ON tbluploadass.UserID = tbluser.ID
    WHERE Marks BETWEEN 0 AND 100 
    ORDER BY SubmitDate DESC"; 
    
    $result = mysqli_query($con, $sql);
    $data = array();
    
    while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
    }


    // if ($con){
    //     $sql = "SELECT * FROM tbluploadass 
    //     INNER JOIN tblassigment ON tbluploadass.AssId =  tblassigment.ID 
    //     INNER JOIN tblcourse on tblassigment.Cid = tblcourse.ID 
    //     INNER JOIN tblsubject on tblcourse.ID = tblsubject.CourseID";
    //     $result = mysqli_query($con, $sql);
    //     if($result){
    //         header("content-type: JSON");
    //         $i = 0;
    //         while($row  = mysqli_fetch_assoc($result)){
    //             $response[$i]['id'] = $row ['ID'];
    //             // $response[$i]['ass_cover'] = $row ['ass_cover'];
    //             $response[$i]['Assign_Title'] = $row ['AssignmenttTitle'];
    //             $response[$i]['Assign_Desc'] = $row ['AssignmentDescription'];
    //             $response[$i]['Assign_File'] = $row ['AssignmentFile'];
    //             $response[$i]['SubmissionDate'] = $row ['SubmissionDate'];
    //             $response[$i]['Total_Marks'] = $row ['Marks'];
    //             $response[$i]['CourseName'] = $row ['CourseName'];
    //             $response[$i]['SubjectFullname'] = $row ['SubjectFullname'];
    //             // $response[$i]['lecturer_aproval'] = $row ['lecturer_aproval'];
    //             $i++;
    //         }
    //         echo json_encode($response,JSON_PRETTY_PRINT);
    //     }
        
    // }else{
    //     echo "DB not connected";
    // }
    $json = json_encode($data);

// Set the appropriate HTTP headers
header('Content-Type: application/json');

// Echo the JSON-encoded results
echo $json;
?>
