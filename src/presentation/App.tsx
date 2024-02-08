import Button from "./shared/button/button";
import TextField from "@shared/text-field/text-field";
import React, { useId } from "react";

const App: React.FC = () => {
  const inputId = useId();

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="w-96 h-40 flex justify-center items-center flex-col gap-3">
        <TextField.Root>
          <TextField.Input id={inputId} mask="number" />
          <TextField.Label htmlFor={inputId}>Label</TextField.Label>
        </TextField.Root>
        <Button.Box>
          <Button.Root>Button</Button.Root>
        </Button.Box>
      </div>
    </main>
  );
};

export default App; 