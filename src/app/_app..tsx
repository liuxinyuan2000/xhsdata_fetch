import { AppProps } from 'next/app';
import { useState,useEffect } from "react";
function MyApp({ Component, pageProps }: AppProps) {
    console.log("sss")
    const [data, setData] = useState(null)
    useEffect(() => {
      // 设置查询参数
      const params = new URLSearchParams({
        keyword: '互粉',
        times: '20',
        category: '全部',
      });
  
      // 发送请求
      fetch(`http://127.0.0.1:8000/crawl_xiaohongshu?${params}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          // 保存数据到状态
          setData(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
        console.log("get data:",data)
    },[])

  return <Component {...pageProps} />;
}

export default MyApp;