import { useState, useLayoutEffect } from "react";

function One() {
  const [name, setName] = useState("");
  useLayoutEffect(() => {
    setName("김제현");
  });

  return (
    <>
      <div>ㅎㅇㅎㅇㅎㅇ{name}</div>
      <div>ㅎㅇㅎㅇㅎㅇ{name}</div>
      <div>ㅎㅇㅎㅇㅎㅇ{name}</div>
      <div>ㅎㅇㅎㅇㅎㅇ{name}</div>
      <div>ㅎㅇㅎㅇㅎㅇ{name}</div>
    </>
  );
}

export default One;
