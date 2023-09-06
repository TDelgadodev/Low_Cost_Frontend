import { metrics } from "./data";
import { Metrics } from "./metrics";


export const ContentRowProduct = () => {

  return (
    <div className="row">
      {
        metrics.map((metric,index) => (
          <Metrics {...metric} key={index + metric.title} />
        ))
      }
    </div>
  );
};
