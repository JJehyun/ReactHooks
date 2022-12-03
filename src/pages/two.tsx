import React, { memo } from "react";
type Props = {
  props: number;
};

function Two({ props }: Props) {
  console.log(props);
  return (
    <div style={{ background: "yellow", width: "100px", height: "100px" }}>
      <span>{props.toString()}</span>
    </div>
  );
}
export default memo(Two);
