import React from "react"
import styled from "styled-components"
import { AddNewItem } from "./AddNewItem"
import { Card } from "./Card"
import { Column } from "./Column"
import { AppContainer } from "./styles"

export const App = () => {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column>
      <AddNewItem toogleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  )
}