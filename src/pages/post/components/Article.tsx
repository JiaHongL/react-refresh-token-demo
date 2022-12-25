import { PostItemDetailDto } from "../../../_models/post-item-detail.dto";

type ArticleProps = {
    postItemDetail: PostItemDetailDto | null;
};

function Article({ postItemDetail }: ArticleProps) {
  return (
    <>
      <div className="my-3 font-bold text-center text-4xl">
        {postItemDetail?.title}
      </div>

      <p style={{ whiteSpace: "pre-wrap" }}>{postItemDetail?.body}</p>

      <div className="flex justify-end">
        <div className="mx-3 mt-2 flex flex-row px-2 py-3">
          <div className="h-auto w-auto rounded-full border-2">
            <img
              className="h-12 w-12 rounded-full object-cover shadow"
              alt="User avatar"
              src={postItemDetail?.user.avatar}
            />
          </div>
          <div className="mb-2 ml-4 mt-1 flex flex-col">
            <div className="text-sm font-semibold text-gray-600">
              {postItemDetail?.user.username}
            </div>
            <div className="mt-1 flex w-full">
              <div className="text-xs font-thin text-gray-400">2022/04/01</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;
