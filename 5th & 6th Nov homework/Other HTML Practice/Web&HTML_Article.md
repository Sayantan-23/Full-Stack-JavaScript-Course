##  History of HTML
The first website on world wide web(www) was created by **Tim Berners-Lee** and was launched on 6th August, 1991. He is considered as the first web designer or the forefather of web design. He was the also the creator of the **HTML** or **Hypertext Markup Language**. On 1991 October 29th he published a document entitled **HTML Tags** containing description of the first 18 html tags . **Tim Berners-Lee** with his team created the HTML in 1991 and HTML 2.0 was launched in 1995 with more features and with more creative liberties. At that time HTML's `<table>` tag was used to organize data into rows and columns.

## Web Server and Apache
Now before talking more about HTML let's discuss little bit about web servers. A web server store the website's files such as all HTML documents and their related assets, including images, CSS stylesheets, JavaScript files, fonts and videos. Web server provides support for **HTTP**(Hypertext Transfer Protocol). HTTP is an internet protocol designed to exchange hypertext documents like images, websites etc. between the server and the browser. Whenever a browser needs a file that is hosted on a web server the browser requests the file via HTTP. When the request reaches to the correct web server, the HTTP server accepts the request and finds the requested document and sends it back to the browser also through HTTP. If the server doesn't find the requested document, it returns a 404 response.

#### What is Apache? 
The **Apache HTTP Server** is a free and open source cross platform web server software. Though we call Apache a web server it is not actually any hardware or physical server rather it is a software that runs on HTTP server. The development of Apache began in early 1995 and back in late 90's and early 2000's it was the most dominant web server, serving over more than 50% of internet's active websites. It is still very popular but it's share now has shrunk from 50% to roughly 35% and now there are other competitors like [Nginx](https://www.nginx.com/). Apache played a key role in the initial growth of **World Wide Web**.

## Why index.html 
Websites contains several pages, it may have homepage, contact us, about us services pages etc. and also contains additional files for styling and scripting, for example - contact.html, style.css and script.js etc. The web server contains all of these files. Now when we come to a website writing `www.website.com/contact_us` the server will serve the contact.html page. But if we write like `www.website.com` then it is pointing to the directory listing all the files. In that case the server will look for a file named `index.html` by default and if any `index.html` file is there the server will serve the page. This page is known as the landing page or the default page. If the server doesn't have the index.html files we will a listing of files which obviously we don't want.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Generally server can be configured to a consider a different file name for default page but `index.html` is the most common and typically used name. There are some other default page also known by most web servers such as `index.htm` and `default.htm` (yes we can also use `.htm` as HTML file extension rather than `.html`).

## Emmet
[Emmet](https://emmet.io/) is a set of plug-ins for text editors that allow for high speed coding and editing in HTML, XML, CSS and other structured code formats via content assists. All the popular code editors either have the free Emmet plug-ins available to install or it comes as a built-in feature(Ex: VS code). Using Emmet we can just write this shortcut `ul>li*5` and it will give us five list items inside an unordered list - 
```
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
``` 

 or we can write this `div#header+div.page+div#footer.class1.class2.class3` shortcut in VS Code and hit the tab button to get the bellow code

```
<div id="header"></div>
<div class="page"></div>
<div id="footer" class="class1 class2 class3"></div>
```

This is just a small example, using Emmet we can generate a whole lot of code just by an one line shortcut. This tool is very useful and making the life of web developers and learners and very easy.

## More About HTML
Now let's talk about some **elements** in HTML. There are so many elements and basically we have elements for everything. We have `<h1>` or `<h2>` elements to write heading, `<p>` for paragraph, `<div>` for division, `<a>` to create hyperlink to web pages and so much more.

#### Heading Elements
We have `<h1>` to `<h6>` HTML elements to represent six levels of section headings, where `<h1>` is the highest level and `<h6>` is the lowest.
```
<h1>Heading</h1>
<h2>Heading</h2>
<h3>Heading</h3>
<h4>Heading</h4>
<h5>Heading</h5>
<h6>Heading</h6>
```
We will get the below output - 
<h1>Heading</h1>
<h2>Heading</h2>
<h3>Heading</h3>
<h4>Heading</h4>
<h5>Heading</h5>
<h6>Heading</h6>

#### Paragraph Element
The `<p>` HTML element represents a paragraph. In HTML paragraphs can be any structural grouping related content, such as images or form fields. Paragraphs are [block level elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements).
```
<p> This is my first Paragraph </p>
<p> This is my second Paragraph <p/>
```

If we write the above lines we will get the below output - 
<p> This is my first Paragraph </p>
<p> This is my second Paragraph <p/>
Both the paragraph takes the entire horizontal space as they are block level elements.

#### Attributes 
Both Heading and Paragraph element support only [Global Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes). These attributes are common to all elements and can be used on all elements. 
One of such attribute is `title`, It contains text representing advisory information related to the element it belongs to.

#### The Image Embed Element
The `<img>` element is used to embed image in the document. 
```
<img class="images"
     src="https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
     alt="Let's start the journey of web development">
```
This will give us the below image - 
![Let's start the journey of web development](https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80)

#### Attributes 
 The `<img>` element has some more attributes along with the [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes).

`alt` - It is not mandatory but it is very useful. It defines an alternative text description of the image. If the browser is unable to display the image then it replaces the image with the alternative text from the element's `alt` attribute. Setting the attribute to an empty string (`alt=" "`) indicates that this image is not a key part of the content and non visual browsers may omit it from rendering. Visual browser will also hide the broken image icon if the `alt` is empty and image failed to display.

`decoding` - It provides an image decoding hints to the browser and it has three allowed values, `sync`, `async` and `auto`. 

- `sync` is used to decode the image synchronously, for atomic representation of the image with other content.

- `async` is used to decode the image asynchronously, to reduce the delay in presenting other content.

- `auto` is the default, where browser decides what is best for the user.

`fetchpriority` - It provides a hint of the relative priority to use when fetching the image. This has three allowed values such as `high`, `low` and `auto`. `high` signals a high priority fetch relative to other images whereas `low` signals a low priority fetch relative to other images and `auto` is the default, it signals automatic determination of fetch priority relative to other images.

`ismap` - This is a Boolean attribute that indicates the image is a part of [server side image map](https://en.wikipedia.org/wiki/Image_map#Server-side) (an image map is an image with clickable areas). So the co-ordinates where the user clicked on the image are sent to the server.
This attributes is allowed only if the `<img>` element is inside a `<a>` element with a valid `href` attribute.

`loading` - It indicates how the browser should load the image and it has two values `eager` and `lazy`. 

- `eager` is the default value and it loads the image immediately regardless of whether or not the image is currently within the visible viewport.

- `lazy` defers the loading until some conditions are met. This generally improves performance.

`src` - This is the image URL or this contains the path of the image we want to embed and this attribute is mandatory for `<img>` element.

`srcset` - This attribute specifies multiple image resources for the `<img>` element and it allows us to specify different kind of images for different screen sizes or orientation or display types.

`sizes` - It defines the conditions according to which the browser will select a particular image defined in the `srcset` attribute. It consists of two parts :-

- A media condition, the condition according to which the browser will make a decision to select a particular image.
- A source size value.

With the `srcset` and `sizes` attributes we can create responsive images according to the browser conditions.

`width` - It specifies the width of the image in pixels, it must be an integer value without a unit.

`height` - It specifies the height of the image in pixels and it must be an integer value without a unit.

There are some more attributes like `crossorigin` ,`usemap` etc and we use them for various purposes

## Live Server
When we are talking about HTML and Web development we can't conclude this without mentioning the one of the most useful tool for this. Live server is a VS Code extension by **Ritwick Dey**. By using this extension we can view the representation of out HTML code inside a browser window. It is very useful as by this we can see what changes are we doing or what is the output of our action the HTML or CSS code. This just takes the static HTML, CSS or JS files that we want to open and host them in a localhost and it detect any changes in our static files. That way we are able to see our actions in code live in the browser window.

There are other live servers are also available, one of them is from **negokaz**. This live server allow us to view the browser representation of the code within the VS Code window side by side with our code.
