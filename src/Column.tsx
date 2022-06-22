import React, { useRef } from "react"
import { AddNewItem } from "./AddNewItem"
import { ColumnContainer, ColumnTitle } from "./styles"
import { useAppState } from "./AppStateContext"
import { Card } from "./Card"
import { useItemDrag } from "./useItemDrag"
import { useDrop } from "react-dnd"
import { isHidden } from "./utils/isHidden"

type ColumnProps = {
  text: string
  index: number
  id: string
  isPreview?: boolean
}

export const Column = ({ text, index, id, isPreview }: ColumnProps) => {
  const { state, dispatch } = useAppState()
  const ref = useRef<HTMLDivElement>(null)
  const [, drop] = useDrop({
    accept: "COLUMN",
    hover(item: any) {
      const dragIndex = item[0].index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }

      dispatch({ type: "MOVE_LIST", payload: { dragIndex, hoverIndex } })
      item[0].index = hoverIndex
    },
  })

  const { drag } = useItemDrag({ type: "COLUMN", id, index, text })

  drag(drop(ref))

  return (
    <ColumnContainer
      isPreview={isPreview}
      ref={ref}
      isHidden={isHidden(isPreview, state.draggedItem, "COLUMN", id)}
    >
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task, i) => (
        <Card id={task.id} columnId={id} text={task.text} key={task.id} index={i} />
      ))}
      <AddNewItem
        toogleButtonText='+ Add another task'
        onAdd={(text) =>
          dispatch({ type: "ADD_TASK", payload: { text, listId: id } })
        }
        dark
      />
    </ColumnContainer>
  )
}
