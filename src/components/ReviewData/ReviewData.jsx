/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const ReviewData = ({ ReviewsData }) => {
  console.log(ReviewsData);
  const { name, UserImg, review } = ReviewsData;
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6  mt-6">
      {ReviewsData.map((reviews) => (
        <div key={reviews.reviewId} className="card bg-base-100  shadow-xl">
          <div className="card-body">
            <div className="flex justify-between">
              <img
                className="w-12 h-12 rounded-full"
                src={reviews.UserImg}
                alt="img"
              />
              <h2 className="card-title text-lg">{reviews.name}</h2>
            </div>

            <p>{reviews.review}</p>

            <div className=" flex justify-between items-center gap-2">
              <div className="rating rating-md">
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-yellow-500"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-yellow-500"
                />
              </div>
              <button className="btn font-semibold text-lg bg-blue-500 text-white hover:text-blue-700 border-none">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewData;
