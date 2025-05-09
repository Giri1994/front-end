import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const  Timestamp = () => {

  const [timestamps, setTimestamps] = useState([]);
  const [localTime, setLocalTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setLocalTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const addTimestamp = () => {
    setTimestamps([...timestamps, new Date().toLocaleString()]);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <Card>
        <CardContent className="p-4">
          <h1 className="text-xl font-bold mb-4">Timestamp Logger</h1>
          <p className="text-sm mb-2">Current Time: {localTime}</p>
          <Button onClick={addTimestamp} className="mb-4">
            Add Timestamp
          </Button>
          <ul className="list-disc pl-5">
            {timestamps.map((timestamp, index) => (
              <li key={index} className="text-sm">
                {timestamp}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export default Timestamp;

//export default function App() {
//  return (
//    <Router>
//      <Routes>
//        <Route path="/" element={<TimestampApp />} />
//      </Routes>
//    </Router>
//  );
//}
