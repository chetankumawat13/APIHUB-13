import { useParams, useNavigate } from "react-router-dom";
import { apis } from "../data/data";
import { getStoredApis } from "../data/storage";
import Navbar from "../components/Navbar";

const Docs = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const localApis = getStoredApis();
  const allApis = [...apis, ...localApis];

  const api = allApis.find(a => a.id === id);

  if (!api) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-3">API not found</h1>
        <button 
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-4 py-2 rounded">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="p-10 max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-5 bg-gray-200 px-3 py-1 rounded"
        >
          ← Back
        </button>

        <h1 className="text-4xl font-bold mb-2">{api.api_title}</h1>
        <p className="text-gray-600 mb-4">{api.api_description}</p>

        <p><b>Category:</b> {api.api_category}</p>

        {api.tags && (
          <div className="flex gap-2 mt-3">
            {api.tags.map((t, i) => (
              <span key={i} className="bg-blue-100 px-3 py-1 rounded text-sm">
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6">
          <p><b>Endpoint:</b> https://api.example.com/{api.id}</p>
          <p><b>Method:</b> GET</p>
        </div>

        <pre className="bg-gray-100 p-4 mt-4 rounded">
{`{
  "param1": "value1"
}`}
        </pre>

        <pre className="bg-gray-100 p-4 mt-3 rounded">
{`{
  "success": true,
  "data": {}
}`}
        </pre>

        <img src={api.api_img} className="mt-6 rounded shadow w-full" />
      </div>
    </>
  );
};

export default Docs;



