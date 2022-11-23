// 帶入react 與 axios 套件
import React, { Component } from 'react';
import Axios from 'axios';

class Test extends Component {
    // 創立dolist變數
    state = { dolist:[] }
    // 如要在元素裡使用css，必須將style給拉出來設立
    styles = {
        "width":"30px",
        "color":"red"
    }
    async componentDidMount() {
        // 將axios.get回傳的資料放入dolist並且更新畫面
        var result = await Axios.get("http://localhost:8000/test");
        // this.state.dolist = result.data;
        // this.setState(this.state.dolist);
        this.setState({
            dolist: result.data
        })
    }

    render() {
        return (
            // 如果沒有要外掛css就要寫在這裡
            <div style={this.styles}>
                {/* // 使用map迴圈撈出資料 */}
                {this.state.dolist.map((val,index)=>
                    <p key={index}>{val.favId}+{val.userId}+{val.itemId}</p>
                )}
            </div>
        )
    }
}

export default Test;