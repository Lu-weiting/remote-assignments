import styled from 'styled-components';


export const PostContainer = styled.div`
  max-width: 800px;
  margin: 70px auto;
`;

export const PostCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 30px;
`;

export const PostTitle = styled.h1`
  color: #333;
`;

export const PostContent = styled.p`
  color: #666;
  font-size: 20px
`;

export const PostDate = styled.p`
  font-size: 12px;
  color: #888;
`;
export const PostLikeBtn = styled.button`
  background: ${({isLiked})=>(isLiked ? '#BF4F74':'#cbcbcb')};
  color: white;
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 5px;
  border: 2px solid ${({isLiked})=>(isLiked ? '#BF4F74':'##cccccc')};

  &:hover {
    background-color: #cccccc;
    border: 2px solid #cccccc;
  }
`;