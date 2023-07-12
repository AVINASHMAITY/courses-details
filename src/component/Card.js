import React from 'react';
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';

const Card = (props) => {
    let course=props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    
    function changeHandler(){
         if(likedCourses.includes(course.id)){
          setLikedCourses((prev)=> prev.filter((cid)=>(cid !== course.id)));
          toast.warning("Like removed");
         }
         else{
          if(likedCourses.length === 0){
            setLikedCourses([course.id]);
          }
          else{
            setLikedCourses((prev)=>[...prev, course.id]);
          }
          toast.success("Liked successfully");
         }
    }

  return (
    <div className='w-[300px] bg-blue-200 rounded-md overflow-hidden'>
      <div className='relative '>
       <img src={course.image.url} alt='not'/>
       <div>
       <button onClick={changeHandler} className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-15px] grid place-items-center'>
          {
            likedCourses.includes(course.id)?(<FcLike  fontSize="30px"/>):(<FcLikePlaceholder fontSize="30px"/>)
          }
       </button>
    </div>
      </div>
     
      <div className='p-4'>
      <p className='font-semibold text-slate-600 text-lg leading-6'>{course.title}</p>
      <p className='m-2'>
      {course.description.length >100 ?(course.description.substr(0,100))+"...":(course.description)}
      </p>
      </div>
    </div>
  )
}

export default Card;
