const DeviceSizeIndicator = ({ enable }) => {
    if (process.env.NODE_ENV === 'development' && enable) {
        return (
            <div className="fixed bottom-0 left-0 z-50 m-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-700 p-3 font-mono text-xs text-white sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500">
                <div className="block  sm:hidden md:hidden lg:hidden xl:hidden">
                    al
                </div>
                <div className="hidden sm:block  md:hidden lg:hidden xl:hidden">
                    sm
                </div>
                <div className="hidden sm:hidden md:block  lg:hidden xl:hidden">
                    md
                </div>
                <div className="hidden sm:hidden md:hidden lg:block  xl:hidden">
                    lg
                </div>
                <div className="hidden sm:hidden md:hidden lg:hidden xl:block">
                    xl
                </div>
            </div>
        );
    }
};

export default DeviceSizeIndicator;
