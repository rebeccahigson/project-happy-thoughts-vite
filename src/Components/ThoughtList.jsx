
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { LikeButton } from "./LikeButton";

export const ThoughtList = ({ loading, thoughtsList, handleLike }) => {
  if (loading) {
    return <h1>Loading happy thought...</h1>;
  }

  return (
    <section className="thought-container">
      {thoughtsList.map((thought) => (
        <div key={thought._id} className="thought">
          <h4>{thought.message}</h4>

          <div className="thought-informationContainer">
            {/* Like button */}
            <LikeButton 
            thoughtId={thought._id} 
            onLike={handleLike}
            thoughtHearts={thought.hearts}
            />

            {/* Date published */}
            <p className="thought-createdAt">
              {formatDistance(new Date(thought.createdAt), new Date(), { addSuffix: true })}
            </p>
          
          </div>
        </div>
      ))
      .slice(0, 10)
      }
      
    </section>
  );
};

