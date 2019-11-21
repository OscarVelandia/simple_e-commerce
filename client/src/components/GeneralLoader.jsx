import React from "react";
import { Loader, Dimmer } from "semantic-ui-react";

function GeneralLoader({ message }) {
  return (
    <>
      <Dimmer active>
        <Loader indeterminate>{message}</Loader>
      </Dimmer>
    </>
  );
}

export default GeneralLoader;
