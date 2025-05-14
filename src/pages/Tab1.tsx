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
import { useRef } from "react";

const socket = new WebSocket('ws://localhost:8081');
socket.onopen = () => {
  console.log("已连接 WebSocket");
  socket.send(JSON.stringify({
    useid: Math.random().toString().slice(2)
  }));
};
socket.onmessage = (event) => {
  console.log("收到服务器消息:", event.data);
};
const Tab1: ReactAPPFC = (prop) => {
  const ipt = useRef<HTMLIonInputElement>(null);
  const ipt2 = useRef<HTMLIonInputElement>(null);
  function send(com: string, data: string) {
    socket.send(JSON.stringify(
      {
        'command': com,
        'data': {
          "id": data
        }
      }
    ))
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
            <IonInput ref={ipt} placeholder="指令"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput ref={ipt2} placeholder="数据"></IonInput>
          </IonItem>
          <div style={{ height: "4pt" }}></div>
          <div style={{ textAlign: "right" }}>
            <IonButton onClick={() => send("login", String(ipt.current?.value))}>登录</IonButton>
            <IonButton onClick={() => send("hall_count", "")}>获取大厅人数</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
