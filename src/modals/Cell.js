import classnames from "classnames";

export const Cell = ({
  value,
  status,
  isRevealing,
  isCompleted,
  position = 0,
}) => {
  const isFilled = value && !isCompleted;
  const shouldReveal = isRevealing && isCompleted;
  const animationDelay = `${position * 350}ms`;

  const classes = classnames(
    "xxshort:w-11 xxshort:h-11 short:text-2xl short:w-12 short:h-12 w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded text-white",
    {
      "bg-zinc-900 border-zinc-600": !status,
      "border-zinc-100": value && !status,
      "absent shadowed bg-slate-700 text-white border-slate-700":
        status === "absent",
      "correct shadowed bg-green-500 text-white border-green-500":
        status === "correct",
      "present shadowed bg-yellow-500 text-white border-yellow-500":
        status === "present",
      "cell-fill-animation": isFilled,
      "cell-reveal": shouldReveal,
    }
  );

  return (
    <div className={classes} style={{ animationDelay }}>
      <div className="letter-container" style={{ animationDelay }}>
        {value}
      </div>
    </div>
  );
};
