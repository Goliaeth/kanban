import React from "react"
import { AddNewItem } from "./AddNewItem"
import { ColumnContainer, ColumnTitle } from "./styles"

type ColumnProps = {
  text: string
}

export const Column = ({
  text,
  children,
}: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem 
        toogleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  )
}
