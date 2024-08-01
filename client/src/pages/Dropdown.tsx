import React, { useState } from 'react';

const Dropdown: React.FC = () => {
  const [selectedNetwork, setSelectedNetwork] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedNetwork(event.target.value);
  };

  type Api = {
    Id: number;
    Name: string;
    URL: string;
  }

  const Network: Api[] = [
    {
        Id: 1,
        Name: "ethereum",
        URL: "https://tailwindcss.com/docs/installation"
    },
    {
        Id: 2,
        Name: "solana",
        URL: "https://tailwindcss.com/docs/installation"
    },
    {
        Id: 3,
        Name: "bitcoin",
        URL: "https://tailwindcss.com/docs/installation"
    }
  ]

  return (
    <div>
 <select id="network-dropdown" value={selectedNetwork} onChange={handleChange}>
        <option value="" disabled>Select a network</option>
        {Network.map((network) => (
          <option key={network.Id} value={network.URL}>
            {network.Name}
          </option>
        ))}
      </select>
      <p>Selected Network URL: {selectedNetwork}</p>
    </div>
  );
};

export default Dropdown;
