import * as React from "react";
import {hot} from "react-hot-loader";
import "./../assets/css/App.css";

class App extends React.Component<Record<string, unknown>, undefined> {
    public render() {
        return (
            <div>
                <h2>Test</h2>
            </div>
        );
    }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
