import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

// import '@ionic/react/css/palettes/dark.always.css';
// import '@ionic/react/css/palettes/dark.class.css';
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import React from "react";

setupIonicReact();

export type ReactAPPFC = React.FC<AppChildrenProp>;
export interface AppChildrenProp {
  title: string;
}
class TabItem {
  constructor(
    public label: string,
    public url: string,
    public component: ReactAPPFC,
    public icon: string
  ) {}
}

const tabList: TabItem[] = [
  new TabItem("短视频", "/tab1", Tab1, ellipse),
  new TabItem("电视剧", "/tab2", Tab2, square),
  new TabItem("关于", "/tab3", Tab3, triangle),
];

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          {tabList.map((item, idx) => {
            return (
              <Route key={idx} exact path={item.url}>
                <item.component title={item.label} />
              </Route>
            );
          })}
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          {tabList.map((item, idx) => {
            return (
              <IonTabButton key={idx} tab={`tab${idx}`} href={item.url}>
                <IonIcon aria-hidden="true" icon={item.icon} />
                <IonLabel>{item.label}</IonLabel>
              </IonTabButton>
            );
          })}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
