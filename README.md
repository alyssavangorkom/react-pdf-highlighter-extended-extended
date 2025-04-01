# react-pdf-highlighter-extended-EXTENDED

[![Node.js CI](https://github.com/DanielArnould/react-pdf-highlighter-extended/actions/workflows/node.js.yml/badge.svg)](https://github.com/DanielArnould/react-pdf-highlighter-extended/actions/workflows/node.js.yml)
[![npm version](https://badge.fury.io/js/react-pdf-highlighter-extended.svg)](https://badge.fury.io/js/react-pdf-highlighter-extended)

`react-pdf-highlighter-extended` is a [React](https://reactjs.org/) library that provides a highly customisable annotation experience for PDF documents on the web, with text and rectangular highlights both supported. It leverages [PDF.js](https://github.com/mozilla/pdf.js) as its viewer. The highlight data format is also independent of the viewport, making it suitable for saving on a server.

This originally started as a fork of [`react-pdf-highlighter`](https://github.com/agentcooper/react-pdf-highlighter) but so much has been refactored and redesigned that it would be a burden to pull it to the original repo. Some of these changes include: addition of `HighlightContext`, `PdfHighlighterContext`, and `MonitoredHighlightContainer`; zoom support; exposed styling on all components; and numerous bugfixes. Efforts will be made to try to ensure feature parity with the original repo, but there are no guarantees that syntax and usage will be the same.

### My Changes
I made small changes to react-pdf-highlighter-extended to make it work better for my project. Now it is `react pdf highlighter extended extended`! Fixed some old bugs.
I upgraded react to react 19 so that it is compatible with other plugins for my app.  In order to do this the ability to resize highlights must be removed or upgraded as well (but I am not using them anyways, so I just deleted them).  I also made highlight tooltips persist until another one is hovered to be more compatible with a lot of busy highlights.

## Documentation

Find documentation for the original library that this is forked from here:

If you just want to use this library, you can find comprehensive docs for all aspects by visiting the [official documentation page](https://danielarnould.github.io/react-pdf-highlighter-extended/docs/).

If you wish to contribute, most internal components are documented in code, though not to the same depth.

Some notable changes:
I had no needs for resizing and moving highlights so I removed the feature.

