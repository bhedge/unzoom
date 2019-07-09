# Unzoom

A simple spike package to remove the Zoom server from your mac
The goal is to provide a simple way to run this uninstall via npx

With [npm](https://npmjs.org/) installed, run
    $ npx unzoom

This is just a terrible wrapper for these basic bash commands:

```
lsof -i :19421
kill -9 [process number]
rm -rf ~/.zoomus
touch ~/.zoomus
```

A link about the [Zoom Zero Day](https://medium.com/@jonathan.leitschuh/zoom-zero-day-4-million-webcams-maybe-an-rce-just-get-them-to-visit-your-website-ac75c83f4ef5)

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.


If you want to improve this, please submit a PR. Thanks!