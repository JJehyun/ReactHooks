import React, { lazy, Suspense } from "react";

//class
class Three extends React.Component {
  render() {
    return (
      <>
        <div
          style={{ width: "300px", height: "300px", border: "blue 1px solid" }}
        >
          Class형 컴포넌트
        </div>
      </>
    );
  }
}

export default Three;
