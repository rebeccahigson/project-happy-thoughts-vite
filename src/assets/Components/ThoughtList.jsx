import "./Thoughts.css";

import { formatRelative } from "date-fns";
import { LikeButton } from "./LikeButton";

export const ThoughtList = ({ loading, thoughtsList, handleLike }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>;
  }

  return (
    <section>
      {thoughtsList.map((thought) => (
        <div key={thought._id} className="thought-container">
          <h4>{thought.message}</h4>

          <div className="thought-informationContainer">

            {/* Like button */}
            <LikeButton 
            thoughtId={thought._id} 
            onLike={handleLike}
            thoughtHearts={thought.hearts}
            />

            {/* Date published */}
            <p className="thought-createdAt">{formatRelative(new Date(thought.createdAt), new Date())}</p>
          </div>
        </div>
      ))
      .slice(0, 10)
      }
      
    </section>
  );
};

