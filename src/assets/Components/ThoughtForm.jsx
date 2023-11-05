import { FormTextAreaCount } from "./FormTextAreaCount";

export const ThoughtForm = ({newThought, onNewThoughtChange, onFormSubmit}) => {
    
  return (
    <form onSubmit = {onFormSubmit} className="thought-formContainer">
        <h1>What is making you happy right now?</h1>

        {/* Textarea with word count */}
        <FormTextAreaCount newThought={newThought} onNewThoughtChange={onNewThoughtChange}/>

        {/* Submit button */}
        <button className="thought-formButton" type="submit"><span className="heart">❤️</span> Send happy thought! <span className="heart">❤️</span></button>
    </form>
  );
};
