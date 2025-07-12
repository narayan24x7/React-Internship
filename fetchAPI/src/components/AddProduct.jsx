import React, { useState } from 'react';
import ImagePreview from './ImagePreview';

function AddProduct({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: ""
  });
  const [previewUrl, setPreviewUrl] = useState("");

  const handelChange = (e) => {
    let { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (name === "image") {
      setPreviewUrl(value);
    }
  };

  const handelImageChange = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
      setFormData((prev) => ({
        ...prev,
        image: imageFile,
      }));
      setPreviewUrl(URL.createObjectURL(imageFile));
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    let { title, price, description, category, image } = formData;

    if (!title || !price || !description || !category || !image) {
      alert("All fields are required!");
      return;
    }

    onSubmit(formData);

    setFormData({
      title: "",
      price: 0,
      description: "",
      category: "",
      image: ""
    });
    setPreviewUrl("");
  };

  return (
    <div>
      <form onSubmit={handelSubmit} className="grid gap-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handelChange}
          placeholder="Product Title"
          className="border rounded-md"
        />

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handelChange}
          placeholder="Enter Price"
          className="border rounded-md"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handelChange}
          placeholder="Enter product description"
          className="border rounded-md"
        ></textarea>

        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handelChange}
          placeholder="Product Category"
          className="border rounded-md"
        />

        <input
          type="file"
          name="image"
          onChange={handelImageChange}
          placeholder="Product Image"
          className="border rounded-md"
        />

        {previewUrl && (
          <div>
            <img src={previewUrl} alt="uploaded file" className="mt-4" />
          </div>
        )}

        <input
          type="submit"
          value="Add Product"
          className="bg-blue-500 text-white rounded-md p-2"
        />
      </form>
    </div>
  );
}

export default AddProduct;
