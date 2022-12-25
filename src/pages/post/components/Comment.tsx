import { CommentDto } from "../../../_models/comment.dto";

type CommentProps = {
  comment: CommentDto;
};

function Comment({ comment }: CommentProps) {
  return (
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
  );
}

export default Comment;
