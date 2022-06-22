import React from "react"
// import styled from "styled-components"
import { AddNewItem } from "./AddNewItem"
import { useAppState } from "./AppStateContext"
import { Column } from "./Column"
import { CustomDragLayer } from "./CustomDragLayer"
import { AppContainer } from "./styles"

export const App = () => {
  const { state, dispatch } = useAppState()

  return (
    <AppContainer>
      <CustomDragLayer />
      {state.lists.map((list, i) => (
        <Column id={list.id} text={list.text} key={list.id} index={i} />
      ))}
      <AddNewItem
        toogleButtonText='+ Add another list'
        onAdd={(text) => dispatch({ type: "ADD_LIST", payload: text })}
      />
    </AppContainer>
  )
}
