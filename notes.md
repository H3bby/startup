Midterm Questions
In the following code, what does the link element do?
- Links to other documents for style purposes
In the following code,  what does a div tag do?
- Group things together so you can style them
In the following code, what is the difference between the #title and .grid selector?
- #title targets elements with id “title”
- .grid targets all elements with the class set to grid
In the following code, what is the difference between padding and margin?
- Margin - space between a block of things and others blocks
- Padding - space between items in a block
Given this HTML and this CSS how will the images be displayed using flex?
- Start: top, End: bottom, Center: center
What does the following padding CSS do?
- Padding-top, padding-right, padding-bottom, padding-left 
- (25pz, 75pz, 75pz, 25pz)  =  (25pz, 75pz, 25pz) = (25pz, 75pz)
- Can be pz, pt, cm …; % of width of element; inherit from parent function
- Width and padding add together
What does the following code using arrow syntax function declaration do?
- const function = (parameters) => what you do with the parameters
What does the following code using map with an array output?
- Map makes a new array by applying a function to each element of an array
- Doesn’t modify the og array, makes a new one
- Array.map(current value, index(optional), array(optional)
What does the following code output using getElementByID and addEventListener?
- getElementByID(“id”) returns element with that id
- addEventListener(“event”, eventfunction) lets you define a function that will run when a certain event happens to a block (usually found by getElementByID)
- “Events” can be click, mouseover, keydown, submit and more
What does the following line of Javascript do using a # selector?
- # targets a certain id in html
Which of the following are true? (mark all that are true about the DOM)
- Browser gives access to DOM through “document” variable
- Nodes for every element in a tree format
- DOM lets you insert (appendChild), modify or delete (removeChild)
- Can inject HTML using DOM; makes it susceptible to attacks
- DOM elements support event listener (addEventListener)
By default, the HTML span element has a default CSS display property value of: 
- Inline
How would you use CSS to change all the div elements to have a background color of red?
- Div {
background color: red;
}
How would you display an image with a hyperlink in HTML?
- <a href=”http://link.com>
	<img src=”image.png”>
</a>
In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
- Content, padding, border, margins
Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
- #idname {
style properties
}
- .classname {
style properties
}
What will the following code output when executed using a for loop and console.log?
- console.log writes messages to the console with whatever is inside
- const means it doesn’t change
How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
- const element = document.getElementByID(“byu”);
- <script>
const element = document.getElementByID(“byu”);
element.style.color = “green”;
</script>
What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
- Paragraph <p>
- Ordered L=list <ol>
- Unordered list <ul>
- Second level heading <h2>
- First level heading <h1>
- Third level heading <h3>
How do you declare the document type to be html?
- <!DOCTYPE html> at beginning of file
What is valid javascript syntax for if, else, for, while, switch statements?
- If (condition) {

} else {

}
- for (initialisation, condition, increment) {

	}
- while (condition) {
	}
- switch (expression) {
		case value1:
			#if expression = val1
			break;
		case value2:
			#if expression = val2
			break;
		default:
			#if expression doesn’t match either
}
What is the correct syntax for creating a javascript object?

Is it possible to add new properties to javascript objects?
- Yes
- obj.newKey = “newValue”
If you want to include JavaScript on an HTML page, which tag do you use?
- <script>
Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?

Which of the following correctly describes JSON?
- Javascript Object Notation
What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
- Chmod: change permissions of a file/directory
- Pwd: shows path to directory you’re in
- Cd: changes current directory 
- Ls: shows files in current directory
- Vim: text editor to create and edit files
- Nano: another tet editor, easier to use than vim; shows commands at bottom
- Mkdir *name*: creates new directory called *name*
- Mv oldname newname/newpath: moves or renames file/directory
- Rm: removes files (use rm -r as well to delete directory)
- Man *command*: shows you how to use a command
- Ssh: Securely connects you to a remote server
- ssh -i ~/OneDrive/Documents/KEY_PAIR.pem ubuntu@54.211.38.145
- Ps: shows current processes running on the system
- Wget *link* t: download files from the web off link
- Sudo: use a command as the superuser
Which of the following console commands creates a remote shell session?
- ssh
Which of the following is true when the -la parameter is specified for the ls console command?
- l shows detailed long list of each file (type, links, owner, size, dates, etc)
- a shows hidden files as well (start with .)
Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
- Top level (TLD): .click
- Root domain: bozo.click
- Fruit is a subdomain of bozo.click
- Banana is a subdomain of fruit.bozo.click
Is a web certificate necessary to use HTTPS?
- Yes, an ssl certificate is necessary
Can a DNS A record point to an IP address or another A record?
- Only to an IP address, not an A record
- DNS is the phonebook of the web, the A stands for address, which must be an IP address
Port 443, 80, 22 is reserved for which protocol?
- 443: encrypted web traffic (HTTPS)
- 80: unencrypted web traffic (HTTP)
- 22: secure remote login (SSH)
What will the following code using Promises output when executed?
