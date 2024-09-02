import React from "react";
import { userService } from "../../_services/user.service";
import { useParams, useNavigate } from "react-router-dom";

const FileUpload = () => {
  let navigate = useNavigate();

  const handleFileUpload = (event) => {
    // get the selected file from the input
    const image = event.target.files[0];
    // create a new FormData object and append the file to it
    const formData = new FormData();
    formData.append("img_profil", image);

    // make a POST request to the File Upload API with the FormData object
    // userService
    //   .addUser(formData)
    //   .then((res) => navigate("../home"))
    //   .catch((err) => console.log(err));

    //console.log d'un tableau formData
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
  };

  // render a simple input element with an onChange event listener that calls the handleFileUpload function
  return (
    <div className="group">
      <label htmlFor="img_profil">Photo de profil</label>
      <input
        type="file"
        id="fileInput"
        name="img_profil"
        onChange={handleFileUpload}
      />
    </div>
  );
};
export default FileUpload;
