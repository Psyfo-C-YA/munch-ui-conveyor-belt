// "use client";

// import React, { useEffect, useState } from 'react';
// import { addPlateToBelt, removeOldestPlateFromBelt, listPlatesOnBelt, removeRandomPlateFromBelt, PlateRecord, getBelt } from '../utils/sushiLogic';
// import PlateComponent from './Plate';
// import { motion, AnimatePresence } from 'framer-motion';
// import './Belt.css';

// const Belt = () => {
//     const [plates, setPlates] = useState<PlateRecord[]>([]);

//     useEffect(() => {
//         const addPlate = async () => {
//             await addPlateToBelt();
//             setPlates([...getBelt()]);
//         };

//         const removeOldestPlate = async () => {
//             await removeOldestPlateFromBelt();
//             setPlates([...getBelt()]);
//         };

//         // Initially add one plate
//         addPlate();

//         const listInterval = setInterval(() => {
//             listPlatesOnBelt();
//             setPlates([...getBelt()]);
//         }, 4000);  // Refresh every 4 seconds

//         const addInterval = setInterval(() => {
//             addPlate();
//         }, 4000);  // Add plate every 4 seconds

//         const removeInterval = setInterval(() => {
//             removeOldestPlate();
//         }, 10000);  // Remove plate every 10 seconds

//         const removeRandomInterval = setInterval(async () => {
//             await removeRandomPlateFromBelt();
//             setPlates([...getBelt()]);
//         }, 15000);  // Remove random plate every 15 seconds

//         return () => {
//             clearInterval(listInterval);
//             clearInterval(addInterval);
//             clearInterval(removeInterval);
//             clearInterval(removeRandomInterval);
//         };
//     }, []);

//     return (
//         <div className="belt">
//             <AnimatePresence>
//                 {plates.map(([id, plate]) => (
//                     <motion.div
//                         key={id}
//                         initial={{ opacity: 0, y: -50 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: 50 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <PlateComponent plate={plate} />
//                     </motion.div>
//                 ))}
//             </AnimatePresence>
//         </div>
//     );
// };

// export default Belt;

// Belt.tsx
"use client";

import React, { useEffect, useState } from "react";
import {
  addPlateToBelt,
  removeOldestPlateFromBelt,
  listPlatesOnBelt,
  removeRandomPlateFromBelt,
  PlateRecord,
  getBelt,
} from "../utils/sushiLogic";
import PlateComponent from "./Plate";
import { motion, AnimatePresence } from "framer-motion";
import "./Belt.css";

const Belt = () => {
  const [plates, setPlates] = useState<PlateRecord[]>([]);

  useEffect(() => {
    const addPlate = async () => {
      await addPlateToBelt();
      setPlates([...getBelt()]);
    };

    const removeOldestPlate = async () => {
      await removeOldestPlateFromBelt();
      setPlates([...getBelt()]);
    };

    // Initially add one plate
    addPlate();

    const listInterval = setInterval(() => {
      listPlatesOnBelt();
      setPlates([...getBelt()]);
    }, 4000); // Refresh every 4 seconds

    const addInterval = setInterval(() => {
      addPlate();
    }, 4000); // Add plate every 4 seconds

    const removeInterval = setInterval(() => {
      removeOldestPlate();
    }, 10000); // Remove plate every 10 seconds

    const removeRandomInterval = setInterval(async () => {
      await removeRandomPlateFromBelt();
      setPlates([...getBelt()]);
    }, 15000); // Remove random plate every 15 seconds

    return () => {
      clearInterval(listInterval);
      clearInterval(addInterval);
      clearInterval(removeInterval);
      clearInterval(removeRandomInterval);
    };
  }, []);

  return (
    <div className="belt">
      <AnimatePresence>
        {plates.map(([id, plate]) => (
          <motion.div
            key={id}
            layout
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <PlateComponent plate={plate} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Belt;
