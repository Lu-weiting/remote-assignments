// PostPage.js
import React from 'react';
// import styled from 'styled-components';
import getPostData from './getPostData';
import { PostContainer, PostCard, PostTitle, PostContent, PostDate, PostLikeBtn } from '../styled-component/Post-style'

const PostPage = () => {
  const postData = getPostData();
  const [isLiked, setIsLiked] = React.useState(false);
  const [likeCount,setLikeCount] = React.useState(0);
  const handleClick = () => {
    setIsLiked((preLike) => !preLike);
    setLikeCount((preCount)=>{
      if(isLiked){
        preCount-=1;
      }else{
        preCount+=1;
      }
      return preCount;
    });
  };
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
          <span>{likeCount}</span>
        </PostCard>
      ))}
    </PostContainer>
  );
};

export default PostPage;
