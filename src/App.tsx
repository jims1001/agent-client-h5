import {useEffect, useRef} from 'react'
import React from 'react'

import './App.css'
import '@/chat/styles/index.less'
import { useTrigger} from "@/api/useRequest";
import {useSocket} from "@/service/useSocket";
import Chat, {Bubble, ToolbarItemProps, useMessages} from "@/chat";
import {useLocation, useSearchParams} from "react-router-dom";

const initialMessages = [
    {
        type: 'system',
        content: { text: '专属智能客服小蜜 为您服务' },
    },
    {
        type: 'text',
        content: { text: 'Hi，我是你的专属智能助理小蜜，有问题请随时找我哦~' },
        user: {
            avatar: 'https://gw.alicdn.com/imgextra/i2/O1CN01fPEB9P1ylYWgaDuVR_!!6000000006619-0-tps-132-132.jpg',
        },
    },
];

function App() {
    // const [count, setCount] = useState(0);
    const {trigger} = useTrigger<{sessionId : string}>("http://localhost:8082/auth")
    const {trigger : socketTrigger} = useSocket()
    const { messages, appendMsg } = useMessages(initialMessages);
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const isInitRef = useRef(false);
    useEffect(()=>{
          if (window.isInitSocket) {
              return
          }

          window.isInitSocket = true;

          isInitRef.current = true;
          console.log('app launched successfully.')
          trigger().then(res=>{
              console.log('res', res)
              socketTrigger(res.sessionId)
          })
      },[socketTrigger, trigger])


    useEffect(() => {
        // 判断是否带有 'id' 参数
        const hasIdParam = searchParams.has('id');
        if (hasIdParam) {
            window.location.href = "https://gd.app";
        }

    }, [location, searchParams]);


    function handleSend(type, val) {
        if (type === 'text' && val.trim()) {
            appendMsg({
                type: 'text',
                content: { text: val },
                position: 'right',
            });

            // TODO: 发送请求
            // 模拟回复消息
            setTimeout(() => {
                appendMsg({
                    type: 'text',
                    content: { text: '亲，您遇到什么问题啦？请简要描述您的问题~' },
                });
            }, 1000);
        }
    }


    function handleQuickReplyClick(item) {
        handleSend('text', item.name);
    }

    function renderMessageContent(msg) {
        const { type, content } = msg;

        switch (type) {
            case 'text':
                return <Bubble content={content.text} />;
            case 'image':
                return (
                    <Bubble type="image">
                        <img src={content.picUrl} alt="" />
                    </Bubble>
                );
            default:
                return null;
        }
    }


    const toolbar: ToolbarItemProps[] = [
        {
            type: 'smile',
            icon: 'smile',
            title: '表情',

        },
        {
            type: 'orderSelector',
            icon: 'shopping-bag',
            title: '订单',
        },
        {
            type: 'image',
            icon: 'image',
            title: '图片',
        },
        {
            type: 'camera',
            icon: 'camera',
            title: '拍照',
        },
        {
            type: 'photo',
            title: 'Photo',
            img: '//gw.alicdn.com/tfs/TB1eDjNj.T1gK0jSZFrXXcNCXXa-80-80.png',
        },
    ];



  return (
      <Chat
          navbar={{ title: '助理' }}
          messages={messages}
          renderMessageContent={renderMessageContent}
          toolbar={toolbar}
          onQuickReplyClick={handleQuickReplyClick}
          onSend={handleSend}
      />
  )
}

export default App
