import React from "react"
import { useDragLayer } from "react-dnd"
import { Column } from "./Column"
import { DragItem } from "./DragItem"
import { CustomDragLayerContainer } from "./styles"

export const CustomDragLayer = () => {
  const { isDragging, currentOffset, item } = useDragLayer(monitor => ({
    isDragging: monitor.isDragging(),
    currentOffset: monitor.getSourceClientOffset(),
    item: monitor.getItem() as DragItem
  }))
  
  return isDragging ? (
    <CustomDragLayerContainer>
      <Column id={item.id} text={item.text} index={item.index}/>
    </CustomDragLayerContainer>
  ) : null
}