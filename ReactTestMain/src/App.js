// 帶入react套件
import React, { Component } from 'react';
// 將components裡的test.jsx帶入
import Test from "./components/test.jsx"
class App extends Component {
    state = {  } 
    render() { 
        return (
            // 將 Test 物件帶入
            <Test/>
        );
    }
}
 
export default App;