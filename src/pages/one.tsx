import { useState, startTransition, Suspense } from "react";
import Two from "./two";

function One() {
  const [page, setPage] = useState(0);
  const pages = [
    <Two id="0" delay={3000}>
      500ms 지연된 페이지
    </Two>,
    <Two id="1" delay={1000}>
      1000ms 지연된 페이지
    </Two>,
    <Two id="2" delay={3000}>
      3000ms 지연된 페이지
    </Two>,
  ];
  return (
    <>
      <nav>
        <button onClick={() => startTransition(() => setPage(0))}>
          첫 번째 페이지
        </button>
        <button onClick={() => startTransition(() => setPage(1))}>
          두 번째 페이지
        </button>
        <button onClick={() => startTransition(() => setPage(2))}>
          세 번째 페이지
        </button>
      </nav>
      <Suspense fallback={<div>로딩 중</div>}>{pages[page]}</Suspense>
    </>
  );
}
export default One;
