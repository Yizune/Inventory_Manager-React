import React, { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';

const rarityColors = {
  common: 'green',
  uncommon: 'blue',
  rare: 'purple',
};

const Item = ({ id, name, icon, category, rarity, stats }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({ id });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="item-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={icon} alt={name} className="item" />
      {isHovered && (
        <div className="tooltip">
          <p className="tooltip-name">{name}</p>
          <p>Type: {category}</p>
          <p>
            Rarity: <span style={{ color: rarityColors[rarity.toLowerCase()] || 'white' }}>{rarity}</span>
          </p>
          <p>{stats}</p>
        </div>
      )}
    </div>
  );
};

export default Item;