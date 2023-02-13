import React from 'react'

const Review = () => {

  
  const rating = <div className="rating gap-3 rating-xs px-5 mb-8">
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-primary" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-primary" checked />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-primary" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-primary" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-primary" />
  </div>

  const CustReviews = [
    {
      name: "John",
      comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam ratione minima.",
      img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      rating: < rating />,
    },
    {
      name: "Devid Miller",
      comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam ratione minima.",
      img: "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      rating: < rating />,
    },
    {
      name: "Sabiha Akter",
      comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam ratione minima.",
      img: "https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80",
      rating: < rating />,
    },
    {
      name: "Soaib Akter",
      comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam ratione minima.",      
      img: "https://images.unsplash.com/photo-1621592484082-2d05b1290d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      rating: < rating />,
    },
  ]




  return (
    <div>
        <h1 className="text-3xl text-primary font-bold text-center my-16">Customer Review</h1>

  <div className="mx-5 md:mx-8 lg:mx-10 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {
      CustReviews &&  CustReviews.map((review, index) => 

    <div key={index} className="  text-center md:px-6 px-4 py-8 shadow">
      {/* <img src={review.img} alt="" srcSet="" className="w-24 h-24 rounded-full mx-auto" /> */}

      <div className="avatar">
        <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={review.img}  alt="customer h-24"/>
        </div>
      </div>
        <h1 className="text-3xl md:text-xl font-bold mb-2 text-red-600" >{review.name}</h1>
        <p className="text-lg md:text-lg italic mb-1 leading-snug text-justify" >{review.comment}</p>  

        <span> {rating} </span>    
    </div>

)
}
  </div>
  </div>)
}  


export default Review