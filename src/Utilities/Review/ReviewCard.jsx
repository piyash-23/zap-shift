import React from "react";

const ReviewCard = ({ rev }) => {
  const { review, userName, user_photoURL, user_email } = rev;
  return (
    <>
      <div>
        <div className="flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
            <div className="text-5xl text-teal-200 font-serif mb-4">"</div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {review}
            </p>

            <div className="border-t border-dashed border-gray-300 mb-6"></div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-teal-900 flex-shrink-0">
                <img src={user_photoURL} alt="" />
              </div>

              <div>
                <h3 className="text-teal-900 font-bold text-lg">{userName}</h3>
                <p className="text-gray-500 text-sm">{user_email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
