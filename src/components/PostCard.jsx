import React from 'react'
import {Link} from 'react-router-dom'
import service from '../appwrite/config'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300'>
            <div className='w-full flex justify-center mb-4'>
                <img src={service.getFilePreview(featuredImage)} alt={title}
                className='border rounded-xl max-h-48 object-cover' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard