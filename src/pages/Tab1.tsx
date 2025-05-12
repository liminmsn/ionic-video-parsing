import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { ReactAPPFC } from "../App";
import "./Tab1.css";

const Tab1: ReactAPPFC = (prop) => {
  function fetchData() {
    const fromData = new FormData();
    fromData.set("url", "https://v.douyin.com/G7X5R9Ovwj0/");
    fetch(
      "https://www.v2ob.com/api?url=https%3A%2F%2Fv.douyin.com%2FG7X5R9Ovwj0%2F",
      { method: "POST", body: fromData }
    ).then((res)=>res.json()).then(res=>{
      console.log(res);
    });
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{prop.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{ padding: "8pt" }}>
          <IonItem>
            <IonInput title="解析" placeholder="输入要解析的url"></IonInput>
          </IonItem>
          <div style={{ height: "4pt" }}></div>
          <div style={{ textAlign: "right" }}>
            <IonButton onClick={fetchData}>解析</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
