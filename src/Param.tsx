import * as React from 'react';
import { observer } from 'mobx-react';

export const Param = observer((props: { name: string, visible: boolean }) => {
  console.log(`Render param: ${props.name}`);

  return (
    <div style={{ display: props.visible ? 'block' : 'none' }}>{props.name}</div>
  );
});