import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Layouts, Responsive, WidthProvider } from "react-grid-layout";
import styles from "./home.module.scss";
import { useState } from "react";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const HomePage = () => {
  const [layouts, setLayouts] = useState<Layouts>({});

  return (
    <>
      <p>home page bby</p>

      <ResponsiveReactGridLayout
        className={styles.layout}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={30}
        layouts={layouts}
        onLayoutChange={(layout: any, layouts: any) => {
          console.log("layouts", layouts);
          setLayouts({ layouts });
        }}
      >
        <div
          key="1"
          data-grid={{
            w: 2,
            h: 3,
            x: 0,
            y: 0,
            minW: 2,
            maxW: 4,
            minH: 3,
            isResizable: true,
          }}
        >
          <span className="text">1</span>
        </div>
        <div key="2" data-grid={{ w: 2, h: 3, x: 2, y: 0, minW: 2, minH: 3 }}>
          <span className="text">2</span>
        </div>
        <div key="3" data-grid={{ w: 2, h: 3, x: 4, y: 0, minW: 2, minH: 3 }}>
          <span className="text">3</span>
        </div>
        <div key="4" data-grid={{ w: 2, h: 3, x: 6, y: 0, minW: 2, minH: 3 }}>
          <span className="text">4</span>
        </div>
        <div key="5" data-grid={{ w: 2, h: 3, x: 8, y: 0, minW: 2, minH: 3 }}>
          <span className="text">5</span>
        </div>
      </ResponsiveReactGridLayout>
    </>
  );
};

export default HomePage;
