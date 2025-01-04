import React from "react";

interface LoadingFallbackProps {
	progress: number;
}

const LoadingFallback: React.FC<LoadingFallbackProps> = ({ progress }) => {
	return (
		<div className="w-full h-full flex flex-col items-center justify-center bg-gray-100">
			<div className="text-center">
				<div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
				<p className="mt-4 text-gray-700">
					Loading 3D Scene: {progress.toFixed(0)}%
				</p>
			</div>
			<div className="w-64 h-2 bg-gray-200 rounded-full mt-4">
				<div
					className="h-full bg-blue-500 rounded-full transition-all duration-300 ease-out"
					style={{ width: `${progress}%` }}
				></div>
			</div>
		</div>
	);
};

export default LoadingFallback;
