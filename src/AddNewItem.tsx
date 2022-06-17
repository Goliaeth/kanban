import React, { useState } from "react"
import { NewItemForm } from "./NewItemForm"
import { AddItemButton } from "./styles"

type AddNewItemProps = {
  onAdd(text: string): void
  toogleButtonText: string
  dark?: boolean
}

export const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false)
  const { onAdd, toogleButtonText, dark } = props

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text)
          setShowForm(false)
        }}
      />
    )
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toogleButtonText}
    </AddItemButton>
  )
}
