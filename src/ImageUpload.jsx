import { useRef, useState } from "react";
import "./ImageUpload.css";

function ImageUpload() {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="upload-container">
      <div className="image-box" onClick={handleIconClick}>
        {image ? (
          <img src={image} alt="Uploaded" />
        ) : (
          <span className="icon">📷</span>
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        hidden
      />
    </div>
  );
}

export default ImageUpload;
