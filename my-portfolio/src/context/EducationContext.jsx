import { useState, createContext } from 'react';
import { educationData } from '../data/educationData';
// import { clientsHeading as clientsPageHeading } from '../data/clientsData';
// import { clientsData as clientsDataJson } from '../data/clientsData';

const EducationContext = createContext();

export const EducationProvider = ({ children }) => {
	const [education, setEducation] = useState(educationData);

	// const clientsHeading = clientsPageHeading;

	// const [clientsData, setClientsData] = useState(clientsDataJson);

	return (
		<EducationContext.Provider
			value={{
				education,
				setEducation,
				// clientsHeading,
				// clientsData,
				// setClientsData,
			}}
		>
			{children}
		</EducationContext.Provider>
	);
};

export default EducationContext;
