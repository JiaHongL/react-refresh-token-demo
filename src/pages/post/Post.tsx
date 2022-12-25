import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Comment from "./components/Comment";
import Article from "./components/Article";

import { CommentDto } from "../../_models/comment.dto";
import { PostItemDetailDto } from "../../_models/post-item-detail.dto";

import { useLazyGetCommentsQuery } from "../../_redux/services/commentsService";
import { useLazyGetPostDetailQuery } from "../../_redux/services/postsService";

function Post() {
  const [postItemDetail, setPostItemDetail] = useState<PostItemDetailDto | null>(null);
  const [comments, setComments] = useState<CommentDto[] | null>(null);

  const { postId } = useParams();

  const [getPostDetail] = useLazyGetPostDetailQuery();
  const [getCommentsQuery] = useLazyGetCommentsQuery();

  useEffect(() => {
    async function apiCall() {
      const res = await getPostDetail(postId as string).unwrap();
      setPostItemDetail(res.data);
      const res2 = await getCommentsQuery(res.data.postId as number).unwrap();
      setComments(res2.data);
    }
    apiCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      
      <Article postItemDetail={postItemDetail} />

      <hr className="border-b-1 border-gray-300 my-4" />

      <div className="w-full">
        <h3 className="mb-5 text-2xl">Comments</h3>

        <div className="grid w-full gap-2 px-4">
          {comments?.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default Post;
