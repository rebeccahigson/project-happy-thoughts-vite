import "./Thoughts.css";
import { formatRelative } from "date-fns";
import { LikeButton } from "./LikeButton";

export const ThoughtList = ({ loading, thoughtsList, setThoughtsList, handleLike }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>;
  }


  return (
    <section>
      {thoughtsList.map((thought) => (
        <div key={thought._id} className="thought-container">
          <h4>{thought.message}</h4>

          <div className="thought-informationContainer">
            {/* Likes */}
            { <LikeButton 
            thoughtId={thought._id} 
            onLike={handleLike}/> }

            <p>x{thought.hearts}</p>


            {/*<div className="thought-likes">
              <button onClick={onLike} className="thought-likesButton pulse"><span className="heart pulse">❤️</span></button> 
              <p>x{thought.hearts}</p>
      </div>*/}
            

            {/* Date published */}
            <p className="thought-createdAt">{formatRelative(new Date(thought.createdAt), new Date())}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

