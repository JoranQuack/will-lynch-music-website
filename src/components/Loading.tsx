import Loader from "./Loader";

export default function Loading() {
  return (
    <div className="z-50 flex h-screen w-screen items-center justify-center bg-opacity-20">
      <Loader />
    </div>
  );
}
