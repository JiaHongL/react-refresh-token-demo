import { useNavigate } from "react-router-dom";
import { PostItemDto } from "../../../_models/post-item.dto";

type CardProps = {
    postItem: PostItemDto;
  };
  
function Card({ postItem }: CardProps) {

  const navigate = useNavigate();

  function goToDetail(postId: number) {
    navigate("/post/" + postId);
  }
  
  return (
    <div className="flex w-full items-center">
    <div className="w-full h-full">
      <div className="mx-3 mt-2 flex flex-row px-2 py-3">
        <div className="h-auto w-auto rounded-full border-2">
          <img
            className="h-12 w-12 rounded-full object-cover shadow"
            alt="User avatar"
            src={postItem.user.avatar}
          />
        </div>
        <div className="mb-2 ml-4 mt-1 flex flex-col">
          <div className="text-sm font-semibold text-gray-600">
            {postItem.user.username}
          </div>
          <div className="mt-1 flex w-full">
            <div className="text-xs font-thin text-gray-400">
              • 30 seconds ago
            </div>
          </div>
        </div>
      </div>
      <div
        className="cursor-pointer"
        onClick={() => goToDetail(postItem.id)}
      >
        <div className="border-b border-gray-100"></div>
        <div className="mx-3 mb-7 mt-6 px-2 text-sm font-medium text-gray-400">
          <img className="rounded" src={postItem.cover} alt="" />
        </div>
        <div className="mx-3 mb-2 px-2 text-lg font-semibold text-gray-600">
          {postItem.title}
        </div>
        <div className="mx-3 mb-6 px-2 text-sm font-thin text-gray-500">
          {postItem.body}
        </div>
      </div>
    </div>
  </div>
  );
}

export default Card;
