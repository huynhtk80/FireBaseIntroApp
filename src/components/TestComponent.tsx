import React, { FunctionComponent } from "react";

type TestProps = {
  title: string;
  paragraph: string;
  number: number;
};
const TestComponent: FunctionComponent<TestProps> = ({
  title,
  paragraph,
  number,
}) => {
  return (
    <div>
      <h1>
        {number}
        {title}
      </h1>
      {paragraph}
    </div>
  );
};

export default TestComponent;
