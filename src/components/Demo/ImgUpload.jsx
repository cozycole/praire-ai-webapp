import React, { useState, useEffect } from "react";
import houseImg from "../../assets/distressedHouse.png";

export default function ImgUpload() {
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
      console.log(objectUrl)
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
  };

  return (
    <div>
      {selectedFile && <img src={preview} />}
      <input type="file" onChange={onSelectFile} />
    </div>
  );
};
