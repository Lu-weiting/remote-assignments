// PostPage.js
import React from 'react';
// import styled from 'styled-components';
import getPostData from './getPostData';
import { PostContainer, PostCard, PostTitle, PostContent, PostDate, PostLikeBtn } from '../styled-component/Post-style'

const PostPage = () => {
  const postData = getPostData();
  const [isLiked, setIsLiked] = React.useState(false);
  // React.useEffect(()=>{
  //   console.log("re-render");
  // },[isLiked])

  const handleClick = () => {
    setIsLiked((preLike) => !preLike)
  }
  return (
    <PostContainer>
      {postData.map(post => (
        <PostCard key={post.id}>
          <PostTitle>{post.title}</PostTitle>
          {post.content.map(p => (
            <PostContent>{p}</PostContent>
          ))}
          <PostDate>{post.date}</PostDate>
          <PostLikeBtn isLiked={isLiked} onClick={handleClick} >Like</PostLikeBtn>
        </PostCard>
      ))}
    </PostContainer>
  );
};

export default PostPage;
