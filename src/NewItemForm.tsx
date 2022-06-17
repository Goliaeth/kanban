import React, { useState } from "react"
import { NewItemButton, NewItemFormContainer, NewItemInput } from "./styles"
import { useFocus } from "./utils/useFocus"

type NeeItemFormProps = {
  onAdd(text: string): void
}

export const NewItemForm = ({ onAdd }: NeeItemFormProps) => {
  const [text, setText] = useState("")
  const inputRef = useFocus()
  const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onAdd(text)
    }
  }

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleAddText}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  )
}
