import React from 'react'

const Review = () => {

  
  const input = <div className="rating rating-xs px-5 mb-8">
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
      rating: {input},
    },
    {
      name: "Devid Miller",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam ratione minima.",
      rating: {input},
    },
    {
      name: "Soaib Akter",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam ratione minima.",
      rating: {input},
    },
    {
      name: "Soaib Akter",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam ratione minima.",
      rating: {input},
    },
  ]




  return (
    <div>
        <h1 className="text-3xl text-primary font-bold text-center my-8">Customer Review</h1>

  <div className="mx-5 md:mx-8 lg:mx-20 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
        {
      CustReviews &&  CustReviews.map((review, index) => 

    <div key={index} className="  text-center md:px-3 px-2 translate-y-[100%] group-hover:translate-y-0 transition-all duration-500 bg-white">
        <h1 className="text-3xl md:text-xl font-bold mb-2 text-red-600" >{review.name}</h1>
        <p className="text-lg md:text-lg italic mb-1 leading-snug text-justify" >{review.description}</p>      
    </div>

)
}
  </div>
  </div>)
}  


export default Review