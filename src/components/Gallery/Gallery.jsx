import galleryImages from "../../assets/galleryImages";
import "./index.css";

const Gallery = () => {
  return (
    <div className="Gallery">
      {galleryImages.map((photo) => (
        <img className="Gallery__photo" src={photo.url} alt="gallery image" />
      ))}
    </div>
  );
};

export default Gallery;
