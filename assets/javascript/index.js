console.log("Thanks for stopping by!\nTo get in touch:\nWebsite: yechiel.me\nEmail: holler@yechiel.me\nBlog: blog.yechiel.me\nTwitter: @yechielk\nGitHub: achasveachas\nLinkdIn: www.linkedin.com/in/yechiel-k")

if (window.location.search) {
    const company = decodeURI(window.location.search.split("=")[1])

    let message

    if(company === resume) {
        message = "Hi there,\n\nThanks fot taking the time to look at my resume!\n\nAs you know, resumes are nototrious for trying to pack in as much information as possible into as small a space as possible, for this reason my resume might be missing a lot of interesting information.\n\nThat's what this sight is for! Feel free to look around, the Projects page contains some of the stuff I built that didn't make it into the resume.\n\nThanks for stopping by, and if you want to get in touch head over to the Contact page.\nYechiel"
    } else {
        message = "Hello " + company + "!\n\nYou should totally hire Yechiel, I mean he's totally awesome!\n\nBut don't take my word for it, I'm just a simple browser, instead why don't you head over to the Projects page and take a look at some of the cool stuff he's made (or the resume if you want the boring version ;)\n\nSo waddaya say?"
    }
    setTimeout(() => alert(message), 500)
}
