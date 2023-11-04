import { FormTextAreaCount } from "./FormTextAreaCount";



export const ThoughtForm = ({newThought, onNewThoughtChange, onFormSubmit}) => {
    
  return (
    <form onSubmit = {onFormSubmit} className="thoughtsFormContainer">
        <h1>What is making you happy right now?</h1>

        <FormTextAreaCount newThought={newThought} onNewThoughtChange={onNewThoughtChange}/>
        
        <button className="thoughtsFormButton" type="submit"><span className="heart">❤️</span> Send happy thought! <span className="heart">❤️</span></button>
    </form>
  );
};
