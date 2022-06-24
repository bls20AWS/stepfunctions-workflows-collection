 /**
              MIT No Attribution
              
              Copyright 2022 Amazon Web Services
              
              Permission is hereby granted, free of charge, to any person obtaining a copy of this
              software and associated documentation files (the "Software"), to deal in the Software
              without restriction, including without limitation the rights to use, copy, modify,
              merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
              permit persons to whom the Software is furnished to do so.
              
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
              INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
              OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
              SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
          */
         
//return average output
exports.lambdaHandler = async (event, context) => {

    return {
        "avg":Math.average(event.data)
    }
};


Math.average = function(input) {
    this.output = 0;
    for (this.i = 0; this.i < input.length; this.i++) {
      this.output+=Number(input[this.i]);
    }
    return this.output/input.length;
  }

