import Lottie from "lottie-react";
import loadingAnim from "./icons/data.json";

function Loading() {
  const style = {
    height: 300,
  };
  return (
    <div className="loading">
      <Lottie animationData={loadingAnim} />
    </div>
  );
}

export default Loading;
