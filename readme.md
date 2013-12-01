### VLC HTTP STREAMING TEST

This is a test project trialing VLC media streaming to the browser.

#### prerequisites

* Nodejs - http://nodejs.org/
* VLC    - http://www.videolan.org/
* Chrome - https://www.google.com/intl/en/chrome/browser/

#### starting the project

Download or clone this source code.

Open a command prompt in the application root and type.

	node app

This will setup a local http server on your machine (http://localhost:5000). Open this 
in your browser to ensure the application is running.

#### setting up the vlc media stream.

By default, the http server is expecting to recieve a mediastream on localhost:5002. The following is the 
steps taken to configure this stream in VLC 2.1.0 Rincewind

* Open VLC
* Select Media -> Stream (from top toolbar)
* In Open Media Dialog
** File Tab - click Add
** Select Video
** File Tab - Click Stream (bottom right)
* In Stream Output Dialog
** Click Next
** Select "HTTP" from new destination dropdown.
** Click Add
** In HTTP Tab
*** Port - 5002
*** Path - /
** Click Next
* In Transcoding Options Dialog
** Profile - Video - Theora + Vorbis (OGG)
** Click Next

In next dialog, click "Stream" to stream the video. Note the Generated stream output string that can be used
to configure this stream from the command line.

If everything has been configured successfully, you can reload http://localhost:5000 to see the stream rendered to
the webpage.

#### components

This method would require a HTTP server and a HTTP Proxy to be started (locally) whenever a video was to be played
on the users local computer, which is a bit of a downside. However, there is a up side in that, taking a approach like 
this would easily allow a developer to intercept the transcoded video (from the HTTP PROXY) and pipe it to a remote peer
over a establish Peer connection (UDP / TCP / etc).

See documentation/diagram.png for a diagram illustrating this concept.




