import React from "react";

interface HowToUseProps {
  api_key: string | null | undefined;
}

const HowToUse: React.FC<HowToUseProps> = ({ api_key }) => {
  return (
    <div className="mt-8 border-t pt-6">
      <h2 className="text-xl font-semibold mb-3">
        How to Use UUID Generator API?
      </h2>
      <ol className="list-decimal pl-6 space-y-4">
        <li>Sign up and get your API key from our website.</li>
        <li>
          Make a GET request to the following URL using your API key:
          {api_key ? (
            <div className="bg-gray-100 p-2 rounded-md">
              {`http://localhost:3000/api/endpoint?api_key=${api_key}`}
            </div>
          ) : (
            <div className="bg-gray-100 p-2 rounded-md">
              {`http://localhost:3000/api/endpoint?api_key=YOUR_API_KEY`}
            </div>
          )}
        </li>
        <li>Receive a unique UUID in the response.</li>
      </ol>
    </div>
  );
};

export default HowToUse;
