import React from 'react';
import fetchJsonp from 'fetch-jsonp';
class FetchJsonp extends React.Component {
    //构造函数
    constructor() {
        super();
        //react定义数据
        this.state = {
            list: []
        }
    }

    //请求接口的方法
    getData = () => {
        var api = 'http://127.0.0.1:8080/tag/getTags/';

    }
    render() {
        return (
            <div>
                <h2>FetchJsonp获取数据</h2>
                <button onClick={this.getData}>获取api接口</button>
            </div>
        )
    }
}
export default FetchJsonp;