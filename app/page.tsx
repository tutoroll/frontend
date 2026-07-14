"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/auth");
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <div style={styles.spinnerWrapper}>
      <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#4fa94d"
        innerCircleColor="#4fa94d"
        middleCircleColor="#4fa94d"
      />
      <p style={styles.text}>Loading, please wait...</p>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column" as const,
  },
  spinnerWrapper: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  },
  text: {
    marginTop: "1rem",
    fontSize: "1.2rem",
    color: "#333",
  },
};
