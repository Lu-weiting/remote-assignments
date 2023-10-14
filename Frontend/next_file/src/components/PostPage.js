
import React from 'react';
import getPostData from './getPostData';

const PostPage = () => {
  const postData = getPostData();
  const [isLiked, setIsLiked] = React.useState(false);

  const handleClick = () => {
    setIsLiked((preLike) => !preLike);
  };
  React.useEffect(()=>{
      console.log("re-render");
    },[isLiked])
  return (
    <div className="max-w-screen-md mx-auto m-7 ">
      {postData.map(post => (
        <div key={post.id} className="border border-solid border-gray-300 rounded-xl p-8 mb-8">
          <h1 className="text-gray-888 text-3xl">{post.title}</h1>
          {post.content.map((p, index) => (
            <p key={index} className="mt-4 text-gray-600 text-20px">{p}</p>
          ))}
          <p className="mt-4 text-12px text-gray-888">{post.date}</p>
          {console.log(isLiked)}
          <button
            className={`${isLiked ? 'bg-red-400' : 'bg-#d1d5db'} text-gray-600 px-4 py-2 rounded-xl border-2 border-solid ${isLiked ? 'border-BF4F74' : 'border-cccccc'} transition-colors duration-300 hover:bg-red-400`}
            onClick={handleClick}
          >
            Like
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostPage;
