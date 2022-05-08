import request from '@/api/requset';
export const designOpera = data => {
    return request.post("/api/design", data).then(res => res.data);
  };
  
  export const answerOpera = data => {
    return request.post("/api/answer", data).then(res => res.data);
  };
  