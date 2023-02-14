import UploadWidget from "../components/UploadWidget";

function UploadWidgetPage() {
 
  return (
    <div>
      <h1>Upload with <a style={{color:"black", "textDecoration":"underline"}} href="https://cloudinary.com/documentation/upload_widget#unsigned_uploads">Unsigned Preset</a></h1>
      <UploadWidget />
    </div>
  );
}

export default UploadWidgetPage;
