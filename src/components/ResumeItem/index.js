import React from "react";
import * as C from "./styles";

function ResumeItem({ title, Icon, value }) {
  return (
    <C.Conteiner>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <Icon />
      </C.Header>
      <C.Total>{value}</C.Total>
    </C.Conteiner>
  );
}

export default ResumeItem;
