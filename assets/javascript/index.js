console.log("Thanks for stopping by!")
console.log("To get in touch:")
console.log("Website: yechiel.me")
console.log("Blog: blog.yechiel.me")
console.log("Email: holler@yechiel.me")
console.log("Twitter: @yechielk")
console.log("GitHub: achasveachas")
console.log("LinkdIn: https://www.linkedin.com/in/yechiel-k")

if (window.location.search) {
    const company = decodeURI(window.location.search.split("=")[1])
    setTimeout(() =>     alert("Hello " + company + "!\n\nYou should totally hire Yechiel, I mean isn't he awesome?\n\nBut don't take my word for it, I'm just a simple browser, instead why don't you head over to the Projects page and take a look at some of the cool stuff he's made (or the resume if you want the boring version ;)\n\nSo waddaya say?"), 500)
}
