export default function Loader() {
  return (
    <div>
      <svg
        className="container fill-green"
        viewBox="0 0 40 40"
        height="40"
        width="40"
      >
        <circle
          className="track"
          cx="20"
          cy="20"
          r="17.5"
          pathLength="100"
          strokeWidth="5px"
        />
        <circle
          className="car"
          cx="20"
          cy="20"
          r="17.5"
          pathLength="100"
          strokeWidth="5px"
        />
      </svg>
    </div>
  );
}
