import React, { useState } from 'react';

function ParkingSlots() {
  const [availableSlots, setAvailableSlots] = useState(8);
  const [selectedSlots, setSelectedSlots] = useState([]);

  const handleSlotClick = (event) => {
    const selectedSlot = event.target.value;
    const slotIndex = selectedSlots.indexOf(selectedSlot);

    if (slotIndex === -1) {
      // Add selected slot to array
      setSelectedSlots([...selectedSlots, selectedSlot]);
      setAvailableSlots(availableSlots - 1);
    } else {
      // Remove selected slot from array
      selectedSlots.splice(slotIndex, 1);
      setSelectedSlots(selectedSlots);
      setAvailableSlots(availableSlots + 1);
    }
  }

  return (
    <>
      <p>Available Slots: {availableSlots}</p>
      {[...Array(8)].map((_, index) => (
        <button key={index} value={index + 1} onClick={handleSlotClick}>
          {selectedSlots.includes(index + 1) ? 'Selected' : 'Available'}
        </button>
      ))}
    </>
  );
}

export default ParkingSlots;