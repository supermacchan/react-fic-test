import { WelcomeScreen } from "./WelcomeScreen/WelcomeScreen";
import { Question } from "./Question/Question";
import { useState } from 'react';

export const App = () => {
  const [question, setQuestion] = useState(0);

  return (
    <main>
      <WelcomeScreen setQuestion={setQuestion} />
      {question !== 0 && <Question question={question}/>}
    </main>
  );
};
