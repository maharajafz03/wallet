import React, { useState } from 'react';
import { network } from './Network';

const Dropdown: React.FC = () => {
  const [selectedNetwork, setSelectedNetwork] = useState<string>(network[0]?.URL || "");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedNetwork(event.target.value);
  };



  return (
    <div>
 <select id="network-dropdown" value={selectedNetwork} onChange={handleChange}>
        <option value="" disabled>Select a network</option>
        {network.map((net) => (
          <option key={net.Id} value={net.URL}>
            {net.Name}
          </option>
        ))}
      </select>
      <p>Selected Network URL: {selectedNetwork}</p>
    </div>
  );
};

export default Dropdown;
