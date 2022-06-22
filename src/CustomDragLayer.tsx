import React from "react"
import { useDragLayer, XYCoord } from "react-dnd"
import { Column } from "./Column"
import { DragItem } from "./DragItem"
import { CustomDragLayerContainer } from "./styles"
import { Card } from "./Card"

function getItemStyles(currentOffset: XYCoord | null): React.CSSProperties {
  if (!currentOffset) {
    return {
      display: "none",
    }
  }

  const { x, y } = currentOffset

  const transform = `translate(${x}px, ${y}px)`
  return {
    transform,
    WebkitTransform: transform,
  }
}

export const CustomDragLayer = () => {
  const { isDragging, currentOffset, item } = useDragLayer((monitor) => ({
    isDragging: monitor.isDragging(),
    currentOffset: monitor.getSourceClientOffset(),
    item: monitor.getItem() as DragItem[],
  }))

  return isDragging ? (
    <CustomDragLayerContainer>
      <div style={getItemStyles(currentOffset)}>
        {item[0].type === "COLUMN" ? (
          <Column
            id={item[0].id}
            text={item[0].text}
            index={item[0].index}
            isPreview={true}
          />
        ) : (
          <Card
            id={item[0].id}
            text={item[0].text}
            index={0}
            isPreview={true}
            columnId={item[0].columnId}
          />
        )}
      </div>
    </CustomDragLayerContainer>
  ) : null
}
