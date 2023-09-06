import { ContentRowTop } from "../ContentRowTop";
import { TopBar } from "../TopBar";

export const Contentwrapper = () => {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <TopBar/>
        <ContentRowTop/>
      </div>
    </div>
  );
};
