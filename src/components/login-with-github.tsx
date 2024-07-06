import Link from "next/link";

const LoginWithGithub = ({
  userCode,
  verificationUri,
  handleRegenerateCode,
}: {
  userCode: string | undefined;
  verificationUri: string | undefined;
  handleRegenerateCode: () => void;
}) => {
  return (
    <div className="pb-4 w-60 h-72 border-b border-gray-300">
      <h1 className="text-xl font-bold whitespace-nowrap mb-2 border-b border-gray-300">
        GitHub Connect
      </h1>
      <div className="p-4 w-60 h-60 border border-gray-500 rounded-lg">
        {userCode && verificationUri ? (
          <div className="flex flex-col items-center space-y-4 text-center">
            <p className="text-lg font-semibold">Enter this code on GitHub:</p>
            <p className="text-3xl font-bold text-blue-600">{userCode}</p>
            <Link
              href={verificationUri}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition duration-300 ease-in-out"
            >
              Verify on GitHub
            </Link>
            <button
              onClick={handleRegenerateCode}
              className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-300 ease-in-out"
            >
              Regenerate Code
            </button>
          </div>
        ) : (
          <p>Loading GitHub login code...</p>
        )}
      </div>
    </div>
  );
};

export default LoginWithGithub;
