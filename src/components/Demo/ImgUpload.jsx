import React, { useState, useEffect } from "react";
import houseImg from "../../assets/distressedHouse.png";

export default function ImgUpload(props) {
  const [selectedFile, setSelectedFile] = useState(true);
  const [preview, setPreview] = useState(houseImg);
   
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    if (selectedFile instanceof String) {
      setPreview(selectedFile);
      return;
    }

    if (selectedFile instanceof File) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } 

  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);

    // send api request
    const formData = new FormData();
    // it's critical that the image name here is the same
    // as the one specified by the one in the multer middleware
    // on the image eval api server ("image")
    formData.append("image", selectedFile);
    fetch(
      "/api",
      {
        method : "POST",
        body : formData
      }
    ).then((res)=>res.json())
    .then((res) => {
      console.log(res)
      props.onEval(res);
    })
    .catch((err) => {
      console.error("Error receiving image eval score");
      console.error(err)
    })
  };

  return (
    <div className="imgDiv">
      {selectedFile && <img src={preview} />}
      <form method="post" encType="multipart/form-data" action="localhost:3001/api">
        <label htmlFor="fileInput" className="fileUploadLabel">Upload Image</label>
        <input id="fileInput" type="file" accept="image/*" onChange={onSelectFile} />
      </form>
    </div>
  );
};
