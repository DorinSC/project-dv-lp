import React from "react";

const GMap: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        title="Office Location"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11371.117786320665!2d27.904786992024466!3d47.76615930093167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDQ1JzU4LjIiTiAyN8KwNTQnMTcuMiJF!5e0!3m2!1sen!2s!4v1713179600000!5m2!1sen!2s"
      ></iframe>
    </div>
  );
};

export default GMap;
