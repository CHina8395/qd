import './App.css';
import React from "react";
import logo from "./img.png"
class Mouse extends React.Component{
  state={
    x:0,y:0
  }

handMouseMove=e=>{
this.setState({
    x:e.clientX,
    y:e.clientY
})
}

componentDidMount() {
        window.addEventListener('mousemove',this.handMouseMove)
}
    render() {
        return this.props.render(this.state)
    }
}
class App extends React.Component {
    render() {
        return (
            <div>
             <h1>鼠标的坐标</h1>
                <Mouse
                    render={mouse => {
                        return (
                            <p>
                                鼠标位置de：{mouse.x} {mouse.y}

                            </p>

                        )
                    }}
                />

                <Mouse
                    render={mouse => {
                        return (
                            <img
                                src={logo}
                                alt="猫"
                                style={{
                                    position: 'absolute',
                                    top: mouse.y - 96,
                                    left: mouse.x - 96
                                }}
                            />
                        )
                    }}
                />
            </div>)


    }

}

export default App;
