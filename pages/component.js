import { Input } from "@/component/Input";
import { useEffect, useState } from "react";

export default function Component() {
  const [state, setState] = useState(1);
  //   console.log(state);
  // để thực thi logic khi component được update, với 1 dependencies (các phụ thuộc)
  useEffect(() => {
    console.log("state đã được  cập nhật lại");
  }, []);

  return (
    <>
      <Input name="vinh" placeholder="Đây là input 1" bordered={true} />
      <Input name="vinh" placeholder="Đây là input 2" bordered={false} />
      <>{state}</>
      <button onClick={() => setState((prev) => prev + 1)}> CỘng</button>
      {/* <HookUseEffect /> */}
    </>
  );
}

// hook quản lý lifeCycle - vòng đời của component
// mount: component hiển thị ra
// update: component cập nhật - hiển thị lại : khi component cha
function HookUseEffect() {
  return <>hkajshdkjashjk</>;
}
