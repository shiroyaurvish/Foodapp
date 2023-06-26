const Shimmer = () => {
  return (
    <div className="flex flex-wrap p-3 " data-testid="shimmer">
      {Array(15)
        .fill(" ")
        .map((e, index) => (
          // <div key={index} className="bg-green-200 h-76 shadow-lg"></div>
          <div className="my-5">
          <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm  mx-auto h-80 w-56 ml-10">
            <div class="animate-pulse flex space-x-4">
              <div class="rounded-full bg-slate-200 h-20 w-20"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-200 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
