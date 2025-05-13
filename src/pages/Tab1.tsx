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
    const socket = new WebSocket("ws://localhost:8081/");
    
    socket.onopen = () => {
      console.log("已连接 WebSocket");
      socket.send("你好服务器");
    };

    socket.onmessage = (event) => {
      console.log("收到服务器消息:", event.data);
    };
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
