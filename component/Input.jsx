import React from "react";

// class Input extends React.Component {
//   render() {
//     return <input />;
//   }
// }
// NOTE: props - chính là những cái tham số được truyền vào từ component cha
const Input = (params) => {
  //   console.log(params);
  const { name, placeholder, bordered } = params;
  // console.log(bordered);
  const borderStyle = {
    border: "1px solid black",
  };

  const noBorderStyle = {
    border: "none",
  };

  return (
    <input
      placeholder={placeholder}
      style={bordered === true ? borderStyle : noBorderStyle}
    />
  );
};

export { Input };
