import axios from 'axios'
var ServerIp = 'http://118.126.116.187:3002/'

// 通过关键字查询博客
export const searchBlogByT = (param) => {
    return axios.get(`${ServerIp}api/searchBlogByT/${param}/`);
}