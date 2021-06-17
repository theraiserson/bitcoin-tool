# bitcoin-tool

For now, this is an extention for both Firefox and Google Chrome.

I haven't published it in the chrome web store or the firefox add-ons-page, and I am not intending in doing so.
So far, if you want to use it, you will have to go the developer-way:

# Firefox

First of all, copy this repository on your computer.

Then you will have to start Firefox and visit [about:debugging#/runtime/this-firefox](about:debugging#/runtime/this-firefox). There you can easily add the Add-On.
Just open the manifest.json, and there you go.

Please note, that this will only last until you close your Browser.

# Chrome

Copy the repository to your computer.

Start chrome and navigate to [chrome://extensions/](chrome://extensions/). In the top right corner you can switch to developer mode.
Now click "Load unpacked", select the right directory, and of you go!

# Known problems:

It is easy to APIs free requesting limit. So if you use this tool extensively, you will probably get banned temporarily.
There are to possible solutions to this:
  1. You could request an API-Key from blockchain.com
  2. We could use another API, like chain.so
