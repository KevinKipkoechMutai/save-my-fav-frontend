import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const initialState = {
  title: "",
  category: "",
  description: "",
  image_url: ""
}

export default function CreateData({onAddItem}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = React.useState(initialState)


  function handleChange(e) {
    setFormData({...formData, [e.target.id]: e.target.value})
  }

  function handlePost(e) {
    e.preventDefault()
    fetch('https://my-backend-production-cc33.up.railway.app/my_favorites', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content_Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    setFormData({
      title: "",
      category: "",
      description: "",
      image_url: ""
    })
    onAddItem(formData)
    console.log(formData)
  }


  return (
    <>
      
      <button className="btn btn-primary" onClick={handleShow}>Add New Fav</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Fav</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id='editform' onSubmit={handlePost}>
          <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="title">
                    Title
                </label>
                </div>
                <div className="md:w-2/3">
                <input onChange={
                  handleChange
                } className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="title" type="text" value={formData.title} name="title" required/>
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="category">
                    Category
                </label>
                </div>
                <div className="md:w-2/3">
                <input onChange={
                  handleChange
                } className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="category" type="text" value={formData.category} name="category" required/>
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="description">
                    Description
                </label>
                </div>
                <div className="md:w-2/3">
                <input onChange={
                  handleChange
                } className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="description" type="text" value={formData.description} name="category" required/>
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="image_url">
                    Image Url
                </label>
                </div>
                <div className="md:w-2/3">
                <input onChange={
                  handleChange
                } className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="image_url" type="text" value={formData.image_url} name="image_url" required/>
                </div>
            </div>
            <button className='btn btn-primary' type='submit' form='editmodal' onClick={handlePost}>Create</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}