export const TaskList = () => {
  return (
    <main>
      <section className="p-6 grid grid-cols-[repeat(auto-fill,288px)] justify-center gap-4">
        <article className="p-6 relative flex flex-col justify-between rounded-3xl aspect-square bg-gray-200">
          <div>
            <h2>Task Title</h2>
            <p>Task Description...</p>
          </div>
          <div className="flex justify-end items-center gap-1">
            <label htmlFor="done" className="leading-none">
              Done
            </label>
            <input
              id="done"
              type="checkbox"
              className="w-3 h-3 translate-y-[1px]"
            />
          </div>
          <div className="w-6 h-6 absolute right-4 rounded-full bg-green-500"></div>
        </article>
        <article className="p-6 relative flex flex-col justify-between rounded-3xl aspect-square bg-gray-200">
          <div>
            <h2>Task Title</h2>
            <p>Task Description...</p>
          </div>
          <div className="flex justify-end items-center gap-1">
            <label htmlFor="done" className="leading-none">
              Done
            </label>
            <input
              id="done"
              type="checkbox"
              className="w-3 h-3 translate-y-[1px]"
            />
          </div>
          <div className="w-6 h-6 absolute right-4 rounded-full bg-green-500"></div>
        </article>
        <article className="p-6 relative flex flex-col justify-between rounded-3xl aspect-square bg-gray-200">
          <div>
            <h2>Task Title</h2>
            <p>Task Description...</p>
          </div>
          <div className="flex justify-end items-center gap-1">
            <label htmlFor="done" className="leading-none">
              Done
            </label>
            <input
              id="done"
              type="checkbox"
              className="w-3 h-3 translate-y-[1px]"
            />
          </div>
          <div className="w-6 h-6 absolute right-4 rounded-full bg-green-500"></div>
        </article>
      </section>
    </main>
  );
};
