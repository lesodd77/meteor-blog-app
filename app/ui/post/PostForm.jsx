// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { ErrorAlert } from '../components/alerts/ErrorAlert';
import { SuccessAlert } from '../components/alerts/SuccessAlert';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Cloudinary } from 'meteor/socialize:cloudinary';
import { useFind } from 'meteor/react-meteor-data'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const PostForm = () => {
  const [title, setTitle] = useState(''); 
  const [url, setUrl] = useState('');
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [description, setDescription] =  useState('');
  const [success, setSuccess] = useState('');

  const uploads = useFind(() => Cloudinary.collection.find());

  const showError = ({ description }) => {
    setError(description);
    setTimeout(() => {
      setError('');
    }, 5000);
  };

  // eslint-disable-next-line no-shadow
  const showSuccess = ({ description }) => {
    setSuccess(description);
    setTimeout(() => {
      setSuccess('');
    }, 5000);
  };

  const savePost = () => {
    Meteor.call(
      'posts.insert',
      { title, 
        image, 
        description, 
        author,
         url, 
         category,
         date,
         },
      errorResponse => {
        if (errorResponse) {
          showError({ message: errorResponse.error });
        } else {
          setTitle('');
          setUrl('');
          setImage('');
          setDate('');
          setAuthor('');
          setDescription('');
          
          showSuccess({ message: 'Your Post saved and publish.' });
        }
      }
    );
  };


  useEffect(() => {
    AOS.init(
      {
        delay: 200,
        duration: 1200,
        once: false,
        // @ts-ignore
      },
      []
    );
  });


  const handleImage = (files) => {
    const uploads = Cloudinary.uploadFiles(files);
    uploads.forEach(async (response) => {
      const photoData = await response;
      console.log(photoData);
      setImage(photoData.public_id);
    });
};
  return (
<>
      <section
        className="pt-10 pb-36 px-8 bg-transparent dark:bg-slate-900 rounded-lg py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mt-20 text-primary dark:text-tertiaryOne"
            data-aos="fade-left"
          >
            Post Form
          </h2>

        </div>
       

        <div className="relative max-w-4xl mx-auto shadow-sm shadow-cyan-900/50">
          <div className="relative z-20 bg-primary dark:bg-slate-900 rounded-lg p-8">
            <form action="" data-aos="fade-up">
              {error && <ErrorAlert description={error} />}
              {success && <SuccessAlert description={success} />}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
      <input 
       type="url"
       label='Image Url'
       id="url"
       value={url}
       placeholder='Image Url'
     
       onChange={e => setUrl(e.target.value)}
        />
       <input 
        id='category'
        label='Category'
        type='text'
        placeholder='category'
      
        value={category}
        onChange={e => setCategory(e.target.value)}
        />
        
       <input 
        id='title'
        label='title'
        type='text'
        placeholder='Title'
      
        value={title}
        onChange={e => setTitle(e.target.value)}
        />
        
<textarea
        id='description'
        label='Message'
        type='description'
        rows={2}
      
        placeholder='Add your Message'         
        value={description}
        onChange={e => setDescription(e.target.value)}
       
        />
          
        <input 
        id='author'
        label='Author'
        type='text'
        placeholder='Author'
      
        value={author}
        onChange={e => setAuthor(e.target.value)}

        />
     
     <input 
          type="file"
          id="image/*"
          accept='image/*, video/*'
            onChange={(e) => handleImage(e.target.files)}
            placeholder="Image"
        />
  <input 
        id='date'
        label='Date'
        type='date'
        placeholder='Date'
      
        value={date}
        onChange={e => setDate(e.target.value)}
/>     
<ul>
                  {uploads.map((upload) => (
                    <li key={upload._id}>
                      <img src={upload.preview} className="max-w-10 max-h-10" />
                      {upload.percent_uploaded}%
                    </li>
                  ))}
                    </ul> 
    </div> 
    <button
          type="button"
         
          onClick={savePost}
          data-aos="fade-left"
          className='mt-4 py-2 px-3 font-serif font-medium text-[18px] text-white bg-tertiaryOne rounded-[10px] outline-none hover:text-white hover:bg-opacity-40 transition ease-in-out duration-150'
         >
          <span>Publish</span>
          </button>
             
            </form>
          </div>
        </div>
        {image && <img src={Cloudinary.url(image, { crop: "scale", width: 200 })} />}
      </section>
      </>
  )
}