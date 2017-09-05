import React, { Component } from 'react';
import placeholder from './assets/placeholder.jpg';
import einsteinMarylin from './assets/einstein-marilyn.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="header">
          <div id="headersub">
            <h1><span style={{color: '#DE3737'}}>Dezhi "Andy" Fang</span></h1>
          </div>
        </div>
        <div className="container">

          <h2>Project 1: Image Filtering and Hybrid Images</h2>

          <div style={{float: 'right', padding: '20px'}}>
            <img src={einsteinMarylin}/>
            <p style={{fontSize: '14px'}}>Example of a right floating element.</p>
          </div>

          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.</p>

          <ol>
            <li>list element 1.</li>
            <li>list element 2.</li>
            <li>etc.</li>
          </ol>

          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.</p>

          <div style={{clear: 'both'}}>
            <h3>Example heading</h3>

            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.</p>

            <h2>Example of code with highlighting</h2>
            <p>The javascript in the <code>highlighting</code> folder is configured to do syntax
              highlighting in code blocks such as the one below.</p>

            <pre><code>
%example code
for i = 1:length(offset)
    source = imread(sprintf('%s/source_%02d.jpg',data_dir,i));
    mask   = imread(sprintf('%s/mask_%02d.jpg',data_dir,i));
    target = imread(sprintf('%s/target_%02d.jpg',data_dir,i));

</code></pre>

            <h3>Results in a table</h3>

            <table border="1">
              <tr>
                <td>
                  <img src={placeholder} width="24%"/>
                  <img src={placeholder} width="24%"/>
                  <img src={placeholder} width="24%"/>
                  <img src={placeholder} width="24%"/>
                </td>
              </tr>

              <tr>
                <td>
                  <img src={placeholder} width="24%"/>
                  <img src={placeholder} width="24%"/>
                  <img src={placeholder} width="24%"/>
                  <img src={placeholder} width="24%"/>
                </td>
              </tr>

            </table>

            <div style={{clear: 'both'}}>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
