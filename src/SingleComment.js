import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { commentUpdate, commentDelete } from './redux/actions';

function SingleComment({ data }) {
  const [commentText, setCommentText] = useState("");

  const { text, id } = data;

  const dispatch = useDispatch();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(commentUpdate(commentText, id))
  };

  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(commentDelete(id));
  }

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const handleInput = (event) => {
    setCommentText(event.target.value);
  };

  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div onClick={handleDelete} className="comments-item-delete">&times;</div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  );
}

export default SingleComment;
