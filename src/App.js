import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import placeholder from './assets/placeholder.jpg';
import einsteinMarylin from './assets/einstein-marilyn.png';

import cat from './assets/cat.jpg';
import blurCat from './assets/blur-cat.jpg';
import bird from './assets/bird.png';
import lowBird from './assets/low-bird.png';
import plane from './assets/plane.png';
import highPlane from './assets/high-plane.png';
import fishSub from './assets/fish-sub.png';
import birdPlane from './assets/bird-plane.png';
import bikes4 from './assets/bikes-4.png';
import bikes9 from './assets/bikes-9.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="header">
          <div id="headersub">
            <h1><span style={{ color: '#DE3737' }}>Dezhi “Andy” Fang</span></h1>
          </div>
        </div>
        <div className="container">

          <h2>Project 1: Image Filtering and Hybrid Images</h2>
          <div className="center">
            <img src={einsteinMarylin}/>
            <p className="caption">Example of a hybrid image. Lower frequency part of
              Einstein's portrait is filtered out, and higher frequency part is filtered out in
              Marilyn's portrait.</p>
          </div>

          <ReactMarkdown source={`
In this assignment, we look at simple convolutions of images,
and try to create hybrid images from two images by filtering out high/low frequency
parts of the image.

### Image Filtering

Image filtering is done by applying a matrix (kernel) over an image.
In each iteration, a region of the image is element-wise multiplied with the kernel to
get a new pixel, containing a "mixure" of the pixels in such region.
We then apply this kernel to all regions of the image to acquire the filtered image.
          `}/>

          <div className="center">
            <div><img src={cat}/><img src={blurCat}/></div>
            <p className="caption">An example of filtering. In this example, a gaussian
              kernel is applied to the image to obtain a "blurred" effect. Note that the "blurred"
              image is dark near the edges. This effect is caused by the padding strategy of <code>my_imfilter</code>.
              A better padding strategy can get rid of this effect.
            </p>
          </div>

          <ReactMarkdown source={`
### High and Low Frequency

We can think of images as digital signals, and by transforming it with Fourier Transformation, we can
separate out the "high frequency" and "low frequency" parts of an image. As shown by the example below,
high frequencies images contain more detail and look "sharper", whereas low frequency images are more "smooth".

The filtering is implemented using a gaussian kernel.
          `}/>

          <div className="center">
            <div><img src={bird}/><img src={lowBird}/></div>
            <p className="caption">An image of a bird and its lower frequency part.
            </p>
          </div>

          <div className="center">
            <div><img src={plane}/><img src={highPlane}/></div>
            <p className="caption">An image of a plane and its higher frequency part.
            </p>
          </div>

          <ReactMarkdown source={`
### Hybrid Images

We can take the high frequency part of an image and the low frequency part of another, combine them,
and get a "hybrid" image. This image will look more like the high frequency part when close, and more
like the low frequency part when looked at from afar.

Below, we explore some hybrid images and the effect of cutoff frequency.
          `}/>

          <div className="center">
            <div><img src={birdPlane}/></div>
            <p className="caption">An image of a bird and a plane.
            </p>
          </div>

          <div className="center">
            <div><img src={fishSub}/></div>
            <p className="caption">An image of a fish and a submarine.
            </p>
          </div>

          <div className="center">
            <div><img src={bikes4}/></div>
            <div><img src={bikes9}/></div>
            <p className="caption">An image of a bicycle and a motorcycle.
              The first image is obtained by <code>cutoff_freq=4</code>, and second by <code>cutoff_freq=9</code>.
              <code>cutoff_freq=9</code> yields much better results.
            </p>
          </div>

          <ReactMarkdown source={`
### Potential Improvements

- Currently, the \`my_imfilter\` function is very slow in comparison to matlab's implementation.
  This is because we're simply looping through all the pixels and obtaining results. We could
  potentially improve this by using FFT.

- More exploration of the cutoff frequency might yield better result for hybrid images.

          `}/>

        </div>
      </div>
    );
  }
}

export default App;
