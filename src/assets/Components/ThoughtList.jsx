import "./Thoughts.css";
import { formatRelative } from "date-fns";
import { ThoughtLikes } from "./ThoughtLikes";

export const ThoughtList = ({ loading, thoughtsList, setThoughtsList }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>;
  }

  return (
    <section>
      {thoughtsList.map((thought) => (
        <div key={thought._id} className="thoughtContainer">
          <h4>{thought.message}</h4>

          { <ThoughtLikes/> }

          <p>{formatRelative(new Date(thought.createdAt), new Date())}</p>
        </div>
      ))}
    </section>
  );
};
