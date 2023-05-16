import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const type = 'Card';

const Card = ({ card, index, moveCard }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: type,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientX = clientOffset.x - hoverBoundingRect.left;
      if ((dragIndex < hoverIndex) ^ (hoverClientX < hoverMiddleX)) {
        return;
      }

      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  // useDrag will be responsible for making an element draggable. It also expose, isDragging method to add any styles while dragging
  const [{ isDragging }, drag] = useDrag(() => ({
    // what type of item this to determine if a drop target accepts it
    type: type,
    // data of the item to be available to the drop methods
    item: { id: card.id, index },
    // method to collect additional data for drop handling like whether is currently being dragged
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  }));

  /* 
    Initialize drag and drop into the element using its reference.
    Here we initialize both drag and drop on the same element (i.e., Image component)
  */
  drag(drop(ref));

  return (
    <div ref={ref} style={{ opacity: isDragging ? 0 : 1 }} className='card-item'>
      <img className='card-img' key={`card-${card.id}`} src={card.src} />
    </div>
  );
};

export default Card;
