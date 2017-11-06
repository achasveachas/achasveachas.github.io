console.log("Thanks for stopping by!\nTo get in touch:\nWebsite: yechiel.me\nEmail: holler@yechiel.me\nBlog: blog.yechiel.me\nTwitter: @yechielk\nGitHub: achasveachas\nLinkdIn: www.linkedin.com/in/yechiel-k")

if (window.location.search) {
    const company = decodeURI(window.location.search.split("=")[1])
    setTimeout(() => alert("Hello " + company + "!\n\nYou should totally hire Yechiel, I mean he's totally awesome!\n\nBut don't take my word for it, I'm just a simple browser, instead why don't you head over to the Projects page and take a look at some of the cool stuff he's made (or the resume if you want the boring version ;)\n\nSo waddaya say?"), 500)
}
