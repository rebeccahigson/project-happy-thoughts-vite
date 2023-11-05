import React, { useState } from "react";

export const LikeButton = ({ thoughtId, onLike }) => {
  const handleLike = async () => {
    try {
      const likeUrl = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`;

      const response = await fetch(likeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        onLike(thoughtId);
      } else {
        console.error("Failed to like the thought.");
      }
    } catch (error) {
      console.error("An error occurred while liking the thought:", error);
    }
  };

  return (
    <div>
      <button 
      className="likesButton pulse" 
      onClick={handleLike}>
        <span className="heart pulse">❤️</span>
      </button>
    </div>
  );
};
