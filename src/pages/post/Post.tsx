import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CommentDto } from "../../models/comment.dto";
import { PostItemDetailDto } from "../../models/post-item-detail.dto";

import { useLazyGetCommentsQuery } from "../../_redux/services/commentsService";
import { useLazyGetPostDetailQuery } from "../../_redux/services/postsService";

function Post() {
  const [post, setPost] = useState<PostItemDetailDto | null>(null);
  const [comments, setComments] = useState<CommentDto[] | null>(null);

  const { postId } = useParams();
  const [getPostDetail] = useLazyGetPostDetailQuery();
  const [getCommentsQuery] = useLazyGetCommentsQuery();

  useEffect(() => {
    async function apiCall() {
      const res = await getPostDetail(postId as string).unwrap();
      setPost(res.data);
      const res2 = await getCommentsQuery(res.data.postId as number).unwrap();
      setComments(res2.data);
    }
    apiCall();
  }, []);

  return (
    <div>
      <div className="my-3 font-bold text-center text-4xl">{post?.title}</div>

      <p style={{ whiteSpace: "pre-wrap" }}>{post?.body}</p>

      <div className="flex justify-end">
        <div className="mx-3 mt-2 flex flex-row px-2 py-3">
          <div className="h-auto w-auto rounded-full border-2">
            <img
              className="h-12 w-12 rounded-full object-cover shadow"
              alt="User avatar"
              src={post?.user.avatar}
            />
          </div>
          <div className="mb-2 ml-4 mt-1 flex flex-col">
            <div className="text-sm font-semibold text-gray-600">
              {post?.user.username}
            </div>
            <div className="mt-1 flex w-full">
              <div className="text-xs font-thin text-gray-400">2022/04/01</div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-b-1 border-gray-300 my-4"/>

      <div className="w-full">
        <h3 className="mb-5 text-2xl">Comments</h3>

        <div className="grid w-full gap-2 px-4">
          {comments?.map((comment) => (
            <div className="flex" key={comment.id}>
              <div className="flex justify-center items-center flex-shrink-0">
                <img
                  className="h-8 w-8 rounded-full sm:h-10 sm:w-10"
                  src={comment.user.avatar}
                  alt=""
                />
              </div>
              <div className="flex-1 rounded-lg border px-4 py-2 leading-relaxed sm:px-6 sm:py-4">
                <strong>{comment.user.username}</strong>
                <p className="text-sm">{comment.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
