import React from 'react';
import ImageUpload from './ImageUpload';
import Systems from './Systems';

export default function Main({ data }) {
  return (
    <div className="main">
      <Systems data={data} />
      <h2 className="image_upload_title">ADD SYSTEMS</h2>
      <div className="image_upload">
        <ImageUpload />
      </div>
    </div>
  );
}
