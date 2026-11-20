
function StatCard({ title, value, description }) {
  return (
    <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-6">

      <p className="text-sm text-zinc-400">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-3">
        {value}
      </h2>

      <p className="text-xs text-zinc-500 mt-2">
        {description}
      </p>

    </div>
  );
}

export default StatCard;
